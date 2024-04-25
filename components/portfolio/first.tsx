"use client"

import { useEffect, useState } from "react";

export const  First = () => {

    const [isMounted,setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if(!isMounted) return null;
    const arrays= ()=>{
      return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]
    }

    return (
      <section className="w-[full] h-[100vh] grid place-items-center ">
        
        <div className="w-[100] grid grid-cols-[repeat(2,1fr)]">
          <div className="">
            <h1 className="uppercase tracking-[5px] text-[3em] pl-5 text-[rgb(134,123,123)]">
              {"Hey I'am"} <br />
              <span className="relative">
                <span className="actual-text">Kaushal&nbsp;Sahu</span>
                <span className="absolute text-[#A020F0] w-[0%] overflow-hidden transition-[0.5s] animate-[pulse001_10s_infinite] border-r-[6px] border-r-[#A020F0] border-solid top-[-1px] flex items-center inset-0" aria-hidden="true">Kaushal&nbsp;Sahu</span>
              </span><br />a Full-stack Developer
            </h1>
            <div className="tracking-[1px] text-lg text-[rgb(134,123,123)] p-5">
              <p><strong>{"Why Code? It's My Superpower"}</strong></p>
              <p>{"I don't just code; I wield it as my superpower. It's the key to solving problems, crafting solutions, and shaping the digital world. From intuitive UI design to server optimization and diving into databases, I'm always up for the challenge."}</p>
            </div>
          </div>
          <div className="hover grid place-items-center">
            <div className="socket relative">
              <div className="gel center-gel">
                <div className="hex-brick h1"></div>
                <div className="hex-brick h2"></div>
                <div className="hex-brick h3"></div>
              </div>
              {
                arrays().map((val) => {
                  return(
                  <div key={val} className={`gel c${val} r${val>7?(val>19?3:2):1}`}>
                    <div className="hex-brick h1"></div>
                    <div className="hex-brick h2"></div>
                    <div className="hex-brick h3"></div>
                  </div>
                  )
                })

              }
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  