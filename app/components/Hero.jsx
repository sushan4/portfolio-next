"use client" // this is a client component
import React from "react"
import Image from "next/image"
import Link from 'next/link';
import { HiArrowDown } from "react-icons/hi"
import SocialMediaIcons from "./socials";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-5 py-8 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl ml-56 opacity-100"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Sushan!</h1>
          <p className="text-lg mt-4 mb-10 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Mumbai, India. Dedicated to crafting innovative software solutions that not only embody creativity but also address real-world challenges.
          </p>
          <div className="mt-8">
            <SocialMediaIcons/>
            </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center mb-20">
        <Link href="#about">
          <HiArrowDown size={35} className="animate-bounce" />
          </Link>
        
      </div>
    </section>
  )
}

export default Hero;