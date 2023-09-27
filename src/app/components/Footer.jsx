'use client'
//image
import Image from "next/image"
//icons
import { FaPhone,FaEnvelope } from "react-icons/fa6"
//components
import Copyright from "./Copyright"
//motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"
//react scroll link

import { Link } from "react-scroll"

const Footer = () => {
  return (
   <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto mb-24">
        {/* {grid} */}
        <motion.div 
           variants={fadeIn('up',0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.6}}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">

          <div className="flex flex-col flex-1 gap-y-8">
            {/* {logo} */}
            <Link
             to={'/'}
             smooth={true}
             spy={true}
             className="cursor-pointer"> 
              <h2 className="h-[200px] w-[200px]">PrologSeven</h2>
            </Link>

            {/* {text}      */}
            <div className="text-secondary">
            Unlock Adventure, Rent with Confidence.
            </div>
            {/* {phone & email} */}
            <div className="flex flex-col gap-y-4 font-semi-bold">
              {/* {phone} */}
              <div className="felx items-center gap-x-[10px]">
                <FaPhone/>
                <div>(+254)720-123-456</div>
              </div>
              {/* {email} */}
              <div className="felx items-center gap-x-[10px]">
              <FaEnvelope/>
              <div>office@prologSeven.com</div>
              </div>



            </div>
            
            </div>
            {/* {links} */}
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>Careers</li>
                <li>FaQs</li>
                <li>How We Work</li>
              </ul>
            </div>
          
          </div>
          {/* {Program} */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8 className='text-secondary'">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className='text-secondary'>Mon-Fri:</div>
                <div className="font-semibold">09:00AM - 5:00PM</div>
              </div>

              <div className="flex gap-x-2">
                <div className='text-secondary'>Sat:</div>
                <div className="font-semibold">09:00AM - 3:00PM</div>
              </div>

              <div className="flex gap-x-2">
                <div className='text-secondary'>Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          <div>4</div>
        </motion.div>

      </div>
      <Copyright/>
    </footer>   
  )
}

export default Footer