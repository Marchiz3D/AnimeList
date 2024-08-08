"use client"

import { Warning } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen mx-auto max-w-xl flex justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col">
        <Warning size={32} className="text-color-accent" />
        <h3 className="text-color-accent font-bold text-3xl">
          404 | NOT FOUND
        </h3>
        <button
          onClick={() => router.back()}
          className="text-color-primary hover:text-color-accent underline transition-all"
        >
          Kembali
        </button>
      </div>
    </div>
  )
}

export default Page
