import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import InputComment from "@/components/AnimeList/InputComment"
import CommentBox from "@/components/AnimeList/CommentBox"

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`)
  const user = await authUserSession()
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id,
    },
  })

  return (
    <>
      <div className="flex flex-col">
        <div className="p-4">
          <h3 className="text-color-primary text-2xl">
            {anime.data.title} - {anime.data.year}
          </h3>
        </div>
        {/* <div className="gap-2 flex text-color-primary">
        <div className="w-36 flex flex-col justify-center items-center border rounded p-4 border-color-primary">
          <h3>PERINGKAT</h3>
          <p>#{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center border rounded p-4 border-color-primary">
          <h3>RATING</h3>
          <p>⭐{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center border rounded p-4 border-color-primary">
          <h3>STUDIO</h3>
          <p>{anime.data.studios[0].name}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center border rounded p-4 border-color-primary">
          <h3>STUDIO</h3>
          <p>{anime.data.genres.map((genre) => genre.name)}</p>
        </div>
      </div> */}
        <div className="p-4 flex sm:flex-row flex-col gap-2 text-color-primary">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={350}
            height={350}
            className="rounded object-cover"
          ></Image>
          <div className="bg-color-secondary shadow-2xl p-3 w-full">
            <h5 className="text-xl">Synopsis : </h5>
            <p className="text-justify bg-color-grey text-color-dark p-2 rounded-lg opacity-70">
              {anime.data.synopsis}
            </p>
            <div className="py-3">
              <div>
                <p>Peringkat : #{anime.data.rank}</p>
              </div>
              <div>
                <p>Skor : ⭐{anime.data.score}</p>
              </div>
              <div>
                <p>
                  Producers :{" "}
                  {anime.data.producers
                    .map((produce) => produce.name)
                    .join(", ")}
                </p>
              </div>
              <div>
                <p>
                  Studios :{" "}
                  {anime.data.studios.map((studio) => studio.name).join(", ")}
                </p>
              </div>
              <div>
                <p>
                  Genres :{" "}
                  {anime.data.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
              <div>
                <p>Episodes : {anime.data.episodes}</p>
              </div>
              <div className="mt-5">
                {!collection && user && (
                  <CollectionButton
                    anime_mal_id={id}
                    user_email={user?.email}
                    anime_image={anime.data.images.webp.image_url}
                    anime_title={anime.data.title}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <InputComment
            anime_mal_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data.title}
          />
          {user && <CommentBox anime_mal_id={id} />}
        </div>
        <div>
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
      </div>
    </>
  )
}

export default Page
