'use client'
//image
import Image from "next/image"
//framer
import { motion } from "framer-motion"
//variants
import { fadeIn } from "../variants"
const Cta = () => {
  return (
    <section className='pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10 overflow-hidden' >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* {text} */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2 
                 variants={fadeIn('right',0.2)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once:false,amount:0.6}}
                 className="h2">
                  Available on your mobile devices as well
              </motion.h2>
              <motion.p
                 variants={fadeIn('left',0.4)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once:false,amount:0.6}}
                 className="mb-10">
                Our car rental web app is designed with accessibility in mind, ensuring compatibility across a range of mobile platforms. Whether you're an iOS enthusiast or an Android user, our app seamlessly adapts to your device, offering a user-friendly experience and on-the-go convenience. With responsive design and cross-platform compatibility, you can effortlessly browse, book, and manage your rentals from the palm of your hand.
              </motion.p>

           
            </div>
          </div>
          {/* {image} */}
          <motion.div
             variants={fadeIn('up',0.8)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false,amount:0.4}}
             className="flex-1 flex justify-center order-1 md:order-none">
              <Image src={'/images/cta/phone.svg'}
              width={320}
              height={640}
              alt="cta phone"/>

          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Cta