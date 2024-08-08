import prisma from "@/libs/prisma"

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  })

  return (
    <div className="flex flex-col gap-4 text-color-primary mt-7 ">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="">
            <p className="text-xl italic">{comment.username} : </p>
            <p>{comment.user_comment}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CommentBox
