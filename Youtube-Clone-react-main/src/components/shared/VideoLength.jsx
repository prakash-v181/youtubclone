import React from 'react'
import moment from 'moment'
const VideoLength = ({time}) => {
  const videoLenthSeconds = moment().startOf("day").seconds(time).format("H:mm:ss")
  return (
    <div className='absolute bottom-2 right-2 bg-[#121212] opacity-95 py-1 px-2 text-white text-xs rounded-md'>{videoLenthSeconds}</div>
  )
}

export default VideoLength