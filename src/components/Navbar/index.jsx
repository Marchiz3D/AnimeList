import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col gap-2 justify-between md:items-center p-4">
        <Link href="/" className="font-bold text-3xl">
          MARCHIZ ANIME
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  )
}

export default Navbar
