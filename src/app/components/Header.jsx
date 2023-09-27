'use client'
import { useContext, useEffect, useState } from "react"
import Image from "next/image"

//icons
import{BiMenuAltRight,BiX} from 'react-icons/bi'
//react scroll
import {Link} from 'react-scroll'
//components
import SearchMobile from "./SearchMobile"
//search context
import { SearchContext } from "../context/search"

import { useMediaQuery } from "react-responsive"

const Header = () => {
    const{setSearchActive}=useContext(SearchContext);
    const [header,setHeader]=useState(false)
    const [nav,setNav]=useState(false)

//desktop mode listener
    const desktopMode=useMediaQuery(
        {
            query:'(min-width:1300px)'
        }
    )

    useEffect(()=>{
        //desktop mode
        if (desktopMode==true){
            console.log("desktop")
        }
        else{
            console.log("mobile")
        }

        const handleScroll=()=>{
            if(window.scrollY>40){
                setHeader(true)
            }
            else{
                setHeader(false);
            }
            if ( window.scrollY>800){
                setSearchActive(true);
            }else{
                setSearchActive(false);
            }
        }

        // scroll listener
        window.addEventListener('scroll',handleScroll)

        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }

    })
    console.log(header)

  //nav links
  const links=[
    {name:'Home',
    link:'Home'},
    {name:'Cars',
     link:"Cars"},
     {name:'About',
     link:"About"},
     {name:'Why Us',
     link:"Why Us"},
     {name:'Testimonials',
     link:"Testimonials"} ,
     {name:'Get In Touch',
     link:"contact"} 

  ]  

  return (


    <header id='Home'className={`${header ? 'bg-white shadow-md py-2 ': 'bg-transparent shadow-none py-4'}
    fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>

        <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
            <div className="flex justify-between items-center px-4 ">
                {/* {Logo} */}
                <Link to="Home" smooth={desktopMode} spy={true} className="cursor-pointer">
                {/* {logo here} */}
                   {/* <Image src={''} width={194} height={64} alt="PrologSeven"  /> */}
                   <div className="h2">PrologSeven</div>
                </Link>

                {/* {nav menu} */}
                <div onClick={()=>setNav(!nav)}className="cursor-pointer xl:hidden  ">
                    {nav ? <BiX className='text-4xl'/>: <BiMenuAltRight className="text-4xl"/>}
                </div>

            </div>
            
                {/* {nav links} */}
                <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0':'max-h-0 xl:max-h-max'}
                 flex flex-col w-full bg-white gap-y-6 overflow-hidden xl:w-max xl:flex-row xl:gap-x-8 xl:h-max 
                 xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase
                 text-sm xl:text-[15px] xl:normal-case`}>
                {links.map((link,index)=>{

                    return(
                    <Link key={index} className="cursor-pointer"
                    to={link.link}
                    activeClass="active"
                    smooth={desktopMode}
                    spy={true}>
                        {link.name}
                    </Link>
                    
                )})}

                    <Link  className="cursor-pointer
                    xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"

                        to='/'
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}>
                            See All Cars
                        </Link>
                        <SearchMobile/>   
                </nav>

        </div>


    </header>

  
  )

}

export default Header