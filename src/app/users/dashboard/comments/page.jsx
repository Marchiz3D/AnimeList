import EmptyItems from "@/components/Dashboard/EmptyItems"
import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Link from "next/link"
import React from "react"

const Page = async () => {
  const user = await authUserSession()
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  })
  console.log(comments)

  return (
    <>
      <Header title={"My Comments"} />
      {comments.length === 0 ? (
        <EmptyItems items={"komentar"} />
      ) : (
        <div className="grid grid-cols-1 pb-4 px-4 gap-4">
          {comments.map((comment) => {
            return (
              <Link
                href={`/anime/${comment.anime_mal_id}`}
                key={comment.id}
                className="text-color-dark bg-color-primary p-4 rounded-xl shadow-2xl"
              >
                <p className="text-xl">{comment.anime_title}</p>
                <p className="italic">"{comment.user_comment}"</p>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Page
