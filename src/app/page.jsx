import AnimeList from "../components/AnimeList"
import Header from "@/components/AnimeList/Header"
import {
  getAnimeResponse,
  getRecommendedAnime,
  reproduce,
} from "../libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getRecommendedAnime(
    "recommendations/anime",
    "entry"
  )

  // const randomRecommendations = Math.floor(
  //   Math.random() * recommendedAnime.length - 4
  // )

  // recommendedAnime = {
  //   data: recommendedAnime.slice(
  //     randomRecommendations,
  //     randomRecommendations + 4
  //   ),
  // }

  recommendedAnime = reproduce(recommendedAnime, 4)

  return (
    <>
      <section>
        <Header
          title={"Paling Populer"}
          linkHref={"/populer"}
          linkTitle={"Lihat Semua"}
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}

export default Page
