import React from 'react'
import Image from "next/image";

export const ProfileImage = () => {
  return (
    <Image
        src='/next.svg'
        alt="sam's profile photo"
        width={150}
        height={150}
        priority
        className='rounded-full object-cover mx-auto text-center align-middle justify-between'
      />
  )
}
