import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 transition-all">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-color-primary border-2 hover:text-color-accent cover-image"
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="font-bold font-sans md:text-xl text-md p-4 border-t-2">
              {anime.title}
            </h3>
          </Link>
        )
      })}
    </div>
  )
}

export default AnimeList
