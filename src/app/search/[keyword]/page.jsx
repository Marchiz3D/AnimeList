import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)

  const topAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    // Paling Populer
    <>
      <section>
        <Header title={`Hasil untuk ${decodedKeyword}`} />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}

export default Page
