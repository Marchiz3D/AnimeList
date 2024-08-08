"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault()
      const keyword = searchRef.current.value
      router.push(`/search/${keyword}`)
      if (!keyword || keyword.trim() === "") {
        router.push("/")
      }
    }
  }

  return (
    <div className="relative">
      <input
        placeholder="Cari anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      ></input>
      <button className="absolute top-1.5 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={26} />
      </button>
    </div>
  )
}

export default InputSearch
