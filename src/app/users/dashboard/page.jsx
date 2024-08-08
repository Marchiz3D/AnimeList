import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"
// import { redirect } from "next/navigation"

const Page = async () => {
  const user = await authUserSession()
  // if (!user) redirect("/")

  return (
    <div className="text-color-primary mt-5 flex flex-col justify-center items-center">
      <h5 className="text-2xl">Welcome, {user.name}</h5>
      <Image
        src={user.image}
        alt="..."
        width={100}
        height={100}
        className="mt-5 border-2 rounded-full border-color-dark"
      />
      <div className="flex flex-wrap gap-2 mt-5">
        <Link
          href="/users/dashboard/collections"
          className="text-2xl bg-color-accent text-color-dark p-2 rounded-md hover:scale-105 transition-all"
        >
          Collections
        </Link>
        <Link
          href="/users/dashboard/comments"
          className="text-2xl bg-color-accent text-color-dark p-2 rounded-md hover:scale-105 transition-all"
        >
          Comments
        </Link>
      </div>
    </div>
  )
}

export default Page
