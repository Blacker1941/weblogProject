import Image from 'next/image'
import React from 'react'

function ImagePageDetail(props) {
  return (
    <div className="relative mt-10 aspect-[16/7] w-full overflow-hidden rounded-2xl">
            <Image
              src={props.image}
              alt="React Query"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>
  )
}

export default ImagePageDetail