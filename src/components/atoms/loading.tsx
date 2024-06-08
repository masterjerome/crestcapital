import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
    <div className='relative'>
      <Image src="/logo.svg" alt="Loader" width={50} height={50} className='animate-spin' />
    </div>
  </div>
  )
}

export default Loader