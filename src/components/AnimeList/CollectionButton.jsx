"use client"

import React, { useState } from "react"

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false)

  const handleCollectionButton = async (event) => {
    event.preventDefault()

    const data = { anime_mal_id, user_email, anime_image, anime_title }
    const response = await fetch("/api/v1/collections", {
      method: "POST",
      body: JSON.stringify(data),
    })

    const collection = await response.json()

    if (collection.status === 200) {
      setIsCreated(true)
    }
    return
  }

  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">
          Berhasil ditambahkan ke My Collections
        </p>
      ) : (
        <button
          onClick={handleCollectionButton}
          className="border-2 border-color-primary  p-1.5 rounded-lg hover:bg-color-accent hover:text-color-dark hover:border-color-dark transition-all"
        >
          Add To My Collections
        </button>
      )}
    </>
  )
}

export default CollectionButton
