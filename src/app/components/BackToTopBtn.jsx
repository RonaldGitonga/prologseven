'use client'

import React,{useEffect,useState} from "react"
//icons
import { FaChevronUp } from "react-icons/fa"

//react scroll
import { Link } from "react-scroll"

const BackToTopBtn = () => {
  const [isActive,setIsActive]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY > 400){
        setIsActive(true)
      }else{
        setIsActive(false)
      }
    };
      window.addEventListener('scroll',handleScroll);

      //clean up
      return()=>{
        window.removeEventListener('scroll',handleScroll);
      }
  })
  return (
    <Link 
    to="Home"
    smooth={true}

    className={`${!isActive && 'hidden' }fixed bg-cyan-600 hover:bg-accent-hover w-12 h-12 right-16
    bottom-11 z-10 cursor-pointer flex justify-center items-center text-white
    border-2 border-white`}>
      <FaChevronUp className="text-xl"/>
    </Link>
  )
}

export default BackToTopBtn