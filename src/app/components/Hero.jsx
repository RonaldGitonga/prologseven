'use client'
import React, { useContext } from 'react'
import Search from './Search'
import Image from 'next/image'

//search context
import { SearchContext } from '../context/search'
//framer motion
import {motion, easeInOut} from 'framer-motion'

//variants
import { fadeIn } from '@/app/variants'
const Hero = () => {
  const {searchActive}=useContext(SearchContext)
  return (
    <section className='h-screen xl:h-[90vh] bg-[#b2b7c2]/10 ' id='Home'>
      <div className="container mx-auto h-full xl:pt-10">
      {/* {text + img wrapper} */}


      <div className="flex flex-col xl:flex-row justify-center items-center
      xl:justify-start h-full">
        {/* {text} */}
        <div className='text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0'>
          <motion.h1 
          variants={fadeIn('down',0.2)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.6}} 
          className='h1'>
            Explore the finest <span className='text-cyan-700'>Global </span>{''}Offers
          </motion.h1>
          <motion.p 
          variants={fadeIn('down',0.4)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.6}} 
          
          className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>
            Find your ideal vehicle for any adventure with our diverse range of affordable
            and dependable car rentals.
          </motion.p>
        </div>
        {/* {image} */}
        <motion.div 
        variants={fadeIn('up',0.6)} 
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.6}} 
        className='relative w-full h-full max-h-[50vh] md:max-w-[70vw]
        xl:max-w-[760px] xl:max-h-[542px] xl:absolute xl:right-[100px] min-[1680px]
        :right-[120px] xl:top-48'>
          <Image src={'/images/hero/car.svg'}
          fill
          alt='car'
          style={{objectFit:'contain'}}
          priority/>
        </motion.div>
      </div>
      </div>

        {searchActive ? (
        <motion.div 
        initial={{y:'-100%'}}
        animate={{y:0}}
        transition={{ease:easeInOut}}
        className='fixed top-[80px] z-10 w-full max-w-[1920px]'><Search/> </motion.div>
        ):
        (
          <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div 
          variants={fadeIn('up',0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.2}}

          className='-mt-12 w-full max-w-[1300px] mx-auto'>
             <Search/>
          </motion.div>
          </div>
        )  

      }
     
    </section>
  )
}

export default Hero