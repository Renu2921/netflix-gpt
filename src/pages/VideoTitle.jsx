import React from 'react';
import { Info,Play } from 'lucide-react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute pt-[20%] text-white px-10'>
     <p className='text-6xl font-bold'>{title}</p>
     <p className='py-6 text-xl w-1/3'>{overview}</p>
     <div className='flex gap-3 '>
        <button className='flex justify-center items-center gap-2 rounded-lg bg-white text-black text-lg font-semibold px-5 py-3 hover:bg-opacity-90'><Play/>Play</button>
        <button className='flex justify-center items-center gap-2 rounded-lg bg-gray-400 bg-opacity-60 text-white text-lg font-semibold px-5 py-3 hover:bg-opacity-90'><Info/>More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle
