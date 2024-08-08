import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"

const UserActionButton = async () => {
  const user = await authUserSession()

  const label = user ? "Sign Out" : "Sign In"
  const labelURL = user ? "/api/auth/signout" : "/api/auth/signin"

  return (
    <div className="flex justify-between gap-3">
      {user ? (
        <Link href="/users/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={labelURL}
        className="bg-color-dark text-color-accent py-1 px-10"
      >
        {label}
      </Link>
    </div>
  )
}

export default UserActionButton
