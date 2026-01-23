import React from "react";
import TypewritterComponent from "./ui/Typewritter";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full min-h-screen px-6 sm:px-40 py-10 flex flex-col sm:flex-row">
      {/* description */}
      <div className="sm:w-1/2 w-full flex max-sm:justify-center max-sm:items-center flex-col py-17 px-4 sm:px-10 h-full">
        <div className="hidden sm:block">
          <TypewritterComponent />
        </div>

        <div className=" sm:hidden flex items-center justify-center flex-col text-white space-y-2">
          <h1 className="text-5xl text-center font-bold">Hey, I’m Gursimran</h1>
          <p className="text-lg opacity-80">I’m a video editor</p>
        </div>

        <Link href="/contact">
          <Button variant={"outline"} className="mt-5 cursor-pointer">
            Contact me
          </Button>
        </Link>
      </div>

      {/* image */}
      <div className="md:w-1/2 w-full px-10 md:px-24  py-10 md:py-16 h-full">
        <Image
          src="/image.png"
          className="border-5 border-white rounded-3xl"
          alt="nothing"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}

export default Hero;
