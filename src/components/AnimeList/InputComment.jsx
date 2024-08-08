"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const InputComment = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
  user_image,
}) => {
  const [user_comment, setUser_comment] = useState("")
  const [isCreated, setIsCreated] = useState(false)

  const router = useRouter()

  const handleComment = (event) => {
    const value = event.target.value
    setUser_comment(value)
  }

  const handlePosting = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault()
      const data = {
        anime_mal_id,
        user_email,
        user_comment,
        username,
        anime_title,
        user_image,
      }

      const response = await fetch("/api/v1/comments", {
        method: "POST",
        body: JSON.stringify(data),
      })

      const comment = await response.json()
      console.log(comment)

      if (comment.status === 200) {
        setIsCreated(true)
        setUser_comment("")
        router.refresh()
      }
    }
    return
  }

  return (
    <div className="flex flex-col gap-3 text-color-primary">
      {isCreated && (
        <p className="text-color-primary">Komentar berhasil di post...</p>
      )}
      <h3 className="text-2xl">Komentar</h3>
      <input
        onChange={handleComment}
        className="w-full bg-color-dark border-b-2 outline-none pb-1 focus:border-color-accent transition-all"
        placeholder="Tulis komentar..."
        value={user_comment}
        onKeyDown={handlePosting}
      ></input>
      <button
        onClick={handlePosting}
        className="bg-color-accent rounded-xl p-2 w-40 text-color-dark"
      >
        Post Komentar
      </button>
    </div>
  )
}

export default InputComment
