import React from 'react'
import TypewritterComponent from './ui/Typewritter'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

function Hero() {
  return (
    <div className="w-full h-screen px-40 py-10 flex max-sm:flex-col">
        
        {/* description */}
       <div className="w-1/2 flex-col py-17 px-10 h-full">

            <TypewritterComponent/>

            <Link href="/contact">
                <Button variant={"outline"} className="mt-5 cursor-pointer">
                    Contact me
                </Button>
            </Link>

       </div>

        {/* image */}
       <div className="w-1/2 max-sm:hidden px-24 py-16 h-full">


        <Image
            src="/image.png"
            className='border-5 border-white rounded-3xl'
            alt='nothing'
            width={400}
            height={300}
        />

       </div>

    </div>
  )
}

export default Hero
