import React from 'react';
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className='mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute right-0 left-0 -top-14'>
        <Image
          className='align-middle rounded-full'
          src={author.photo.url}
          unoptimized
          alt={author.name}
          height={100}
          width={100}
        />
      </div>
        <h3 className='text-white mt-4 mb-4 text-xl font-bold'>
          {author.name}
        </h3>
        <p className='text-white text-ls'>
          {author.bio}
        </p>
    </div>
  )
}

export default Author