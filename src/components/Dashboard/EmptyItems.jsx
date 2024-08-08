import Link from "next/link"

const EmptyItems = ({ items }) => {
  return (
    <div className="text-color-primary flex flex-col justify-center items-center h-screen">
      <h3 className="text-2xl">Kamu belum memiliki {items} apapun...</h3>
      <Link
        href={"/"}
        className="hover:text-color-accent underline transition-all"
      >
        Kembali ke Home
      </Link>
    </div>
  )
}

export default EmptyItems
