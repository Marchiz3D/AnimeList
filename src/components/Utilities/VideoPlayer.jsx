"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false)

  const option = {
    width: "320",
    height: "200",
  }

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2 p-2">
        <button
          className="text-color-primary float-right bg-color-dark mb-1 px-2"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo}
          opts={option}
          onError={() => alert("Mohon maaf video tidak bisa diputar.")}
        />
      </div>
    )
  }

  const ButtonOpenTrailer = () => {
    return (
      <button
        className="bg-color-primary rounded-md fixed bottom-5 right-5 text-color-dark p-1 hover:bg-color-accent transition-all"
        onClick={handleVideoPlayer}
      >
        Lihat Trailer
      </button>
    )
  }

  return isOpen ? <Player /> : <ButtonOpenTrailer />
}

export default VideoPlayer
