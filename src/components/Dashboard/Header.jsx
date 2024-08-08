"use client"

import { ArrowLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {
  const router = useRouter()

  const handleBack = (event) => {
    event.preventDefault
    router.back()
  }

  return (
    <div className="flex justify-between items-center text-color-primary p-4">
      <button>
        <ArrowLeft size={32} onClick={handleBack} />
      </button>
      <h3 className="text-2xl ">{title}</h3>
    </div>
  )
}

export default Header
