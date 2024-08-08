import AnimeList from "@/components/AnimeList"
import HeaderRecommend from "@/components/AnimeList/Header"
import Header from "@/components/Dashboard/Header"
import {
  getAnimeResponse,
  getRecommendedAnime,
  reproduce,
} from "@/libs/api-libs"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const { default: Image } = require("next/image")
const { default: Link } = require("next/link")

const Page = async () => {
  const user = await authUserSession()
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user?.user_email,
    },
  })
  let anime = await getRecommendedAnime("recommendations/anime", "entry")
  anime = reproduce(anime, 4)

  return (
    <section>
      <Header title={"My Collections"} />
      {collection.length === 0 ? (
        <div className="flex flex-col gap-4">
          <div className="border-b-2 border-color-primary p-4 w-11/12 flex justify-center items-center mx-auto">
            <h3 className="text-color-primary text-xl">
              Anda belum memiliki collection apapun...
            </h3>
          </div>
          <div>
            <HeaderRecommend title={"Anime yang mungkin anda suka"} />
            <AnimeList api={anime} />
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 px-4 ">
          {collection.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/anime/${item.anime_mal_id}`}
                className="relative border-2 border-color-primary hover:border-color-accent cover-image"
              >
                <Image
                  src={item.anime_image}
                  alt="..."
                  width={250}
                  height={250}
                  className="w-full"
                />
                <div className="absolute bottom-0 w-full h-14 flex justify-center items-center bg-color-accent">
                  <h5 className="text-xl">{item.anime_title}</h5>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Page
