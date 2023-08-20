import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className="flex justify-center items-center mt-48"><Image className="bg-white" height="300" width="300" src="/loading.svg" alt="loading" /> </div>
  )
}
