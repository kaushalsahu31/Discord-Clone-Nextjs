"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export const  Second = () => {

    const [isMounted,setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if(!isMounted) return null;
    
    return (<section className="w-[100] h-[100vh] ">
      <div className="grid grid-cols-[50%_50%] tracking-[1px] text-lg text-[rgb(134,123,123)] p-5">
        <div className="w-full relative">
          <Image
            className="relative z-10 w-full object-contain max-h-[80vh]"
            src="https://images.bitmoji.com/3d/avatar/859643639-99424397655_14-s5-v1.webp"
            alt=""
            width={400}
            height={600}

          />
          <div className="absolute z-[1] flex justify-center items-center  overflow-hidden h-[300px] w-[250px] md:h-[300px] md:w-[250px] bg-[300%_300%] backdrop-blur-lg transition-[0.5s] animate-[gradient\_301_5s_ease_infinite] bg-[linear-gradient(#000000,#000000),linear-gradient(_137.48deg,#ffdb3b_10%,#fe53bb_45%,#8f51ea_67%,#0044ff_87%_)] m-auto rounded-[100%] border-[none] inset-0">
            <div className="absolute z-[-1] w-full h-full overflow-hidden transition-[0.5s] backdrop-blur-lg rounded-[5rem]">
              <div id="stars" ></div>
            </div>
  
            <div className="absolute flex w-48">
              <div className="bg-[#a020f0] w-full h-[100px] blur-[2rem] animate-[pulse\_3011_4s_infinite] z-[-1]"></div>
              <div className="bg-[#a020f0] w-full h-[100px] blur-[2rem] animate-[pulse\_3011_4s_infinite] z-[-1]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <div className="bg-[#ffffff00] ml-2.5 ">
              <svg className="w-full h-full">
                <text className="animate-[stroke_5s_infinite_alternate] stroke-2 stroke-[#a020f0] xl:text-[83px] md:text-[40px]" x="54%" y="50%" textAnchor="end">About me</text>
              </svg>
            </div>
            <p className="text-[24px] md:text-[18px] sm:text-[14px]">
              {`I'm a Software Developer at Hamilton Web Services with a passion for
              crafting exceptional products that simplify people's lives. With a
              versatile skill set and a penchant for innovation, I thrive on turning
              ideas into reality in the digital realm.`}
            </p>
          </div>
        </div>
      </div>
  
    </section>)
  }
  
  