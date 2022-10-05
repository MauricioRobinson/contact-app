import Image from 'next/image'
import React from 'react'

const ImageContact = (props) => {
  return (
    <div className='relative w-32 h-32 shadow overflow-hidden bg-slate-500 rounded-full mt-5'>
      <Image
        src={props.imageUrl}
        alt={props.imageAlt}
        layout='fill'
        objectFit='cover'
      />
    </div>
  )
}

export default ImageContact