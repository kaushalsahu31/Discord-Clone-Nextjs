"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export const  Third = () => {


    const [isMounted,setIsMounted] = useState(false)
    const [exp, setExp] = useState([
      {
        color: "#FFDE25",
        img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
        title: "JS",
      },
      {
        color: "#EF652A",
        img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
        title: "HTML",
      },
      {
        color: "#1C88C7",
        img: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
        title: "CSS",
      },
      {
        color: "rgb(71 78 110)",
        img: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        title: "PHP",
      },
      {
        color: "#1A1A33",
        img: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        title: "Python",
      },
      {
        color: "#6DA75D",
        img: "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
        title: "Node",
      },
      {
        color: "#d1f9e6",
        img: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        title: "Vue",
      },
      {
        color: "#004659",
        img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        title: "React",
      },
      {
        color: "#851a1a",
        img: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
        title: "Laravel",
      },
      {
        color: "#123849",
        img: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg",
        title: "Wordpress",
      },
      {
        color: "rgb(21 106 132)",
        img: "https://cdn.worldvectorlogo.com/logos/opencart.svg",
        title: "OpenCart",
      },
      {
        color: "rgb(0 110 97)",
        img: "https://cdn.worldvectorlogo.com/logos/nuxt-2.svg",
        title: "Nuxt",
      },
      {
        color: "#ffffff",
        img: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        title: "next",
      },
      {
        color: "rgb(0 48 61)",
        img: "https://cdn.worldvectorlogo.com/logos/mysql-logo.svg",
        title: "mysql",
      },
      {
        color: "rgb(119 190 80)",
        img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        title: "mongodb",
      },
    ])
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if(!isMounted) return null;
    
    
    return (
      <section className="w-[100] h-[100vh] gap-[20px] flex items-center justify-center flex-col">
        <div data-glitch="SKILLS🛸" className=" w-[100] relative text-[40px] font-bold leading-[1.2] text-white tracking-[5px] z-[1] animate-[shiftZ_1s_ease-in-out_infinite_alternate] before:animate-[glitchZ_0.4s_cubic-bezier(0.25,0.46,0.45,0.94)_both_infinite] before:text-[#8b00ff] before:z-[-1] after:animate-[glitchZ_0.4s_cubic-bezier(0.25,0.46,0.45,0.94)_reverse_both_infinite] after:text-[#00e571] after:z-[-2] before:block before:content-[attr(data-glitch)] before:absolute before:opacity-80 before:left-0 before:top-0 after:block after:content-[attr(data-glitch)] after:absolute after:opacity-80 after:left-0 after:top-0">SKILLS🛸</div>
        <div className="grid 2xl:grid-cols-[repeat(5,1fr)] xl:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(3,1fr)] sm:grid-cols-[repeat(2,1fr)] gap-[50px] md:gap-[30px] place-items-center">
          {exp.map((val, i) => <div key={i} className="exp flex items-center" style={{ background: `${val.color}` }}><img src={val.img} className="w-[150px] md:w-[100px] hover:animate-[shiftZ_1s_ease-in-out_infinite_alternate] hover:animate-[glitchZ_0.4s_cubic-bezier(0.25,0.46,0.45,0.94)_both_infinite]" alt="" /></div>)}
        </div>
      </section>)
  }
  
  