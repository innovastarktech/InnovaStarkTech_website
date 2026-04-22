import React from 'react'
import { motion } from "framer-motion"

const page = {
    initial: {
        opacity: 0, x: -80, y: 0
    },
    animate: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 50},
}

const Portfolio = () => {
  return (
    <div className='pt-18 min-h-screen'>
        <motion.div variants={page} initial="initial" animate="animate" exit="exit" transition={{duration: 0.4, ease: "easeInOut"}}>
            <div className='flex flex-col items-center justify-center w-full h-80 bg-violet-950 '>
                <h1 className='text-4xl font-bold text-center text-amber-500'>Our Portfolio</h1>
                <p className='text-center m-4 min-w-0 max-w-2xl text-white text-[clamp(1rem,1.5vw,3rem)]'>Explore our successful projects and see how we've helped businesses and organizations across Ghana transform through technology</p>
            </div>
        </motion.div>


    </div>
  )
}

export default Portfolio
