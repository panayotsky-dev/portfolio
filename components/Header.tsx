import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion"

type Props = {}
//possition between 2 children - justify
// mx-auto - automatic apply margins
//p-padding

export default function Header({}: Props) {
  return ( 
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            x:-500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0, //basicly x should go to his basic possition
            opacity:1,
            scale:1,
        }}
        transition={{
            duration: 1.3
        }}
         className='flex flex-row items-center'>
            {/* Socials */}
            <SocialIcon
             url="https://www.linkedin.com/in/panayot-petkov/"
             fgColor='gray'
             bgColor='transparent'/>
             <SocialIcon
             url="https://www.github.com/panayotsky-dev/"
             fgColor='gray'
             bgColor='transparent'/>             
        </motion.div>
        <motion.div 
            initial={{
                x:500,
                opacity:0,
                scale:0.5,
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1,
            }}
            transition={{ duration:1.1}}
            
            className='flex flex-row item-center text-gray-300 cursor-pointer'>
                {/*Contacnt me */}
                <SocialIcon 
                network='email'
                className='cursor-pointer'
                fgColor='gray'
                bgColor='transparent'
             />
             <p className='uppercase hidden md:inline-flex text-sm text-gray-400 text-center items-center p-2 hover:text-[#2ed3db] hover:animate-spin focus-within:shadow-lg'>
             Lets talk
            </p>             
        </motion.div>
        </header>
  )
}


// initial={{
//     x: -500,
//     opacity:0,
//     scale: 0.5,
// }}
// animate={{
//     x:0,
//     opacity:1,
//     scale: 1,
// }}
// transition={{
//     duration:1.3,
// }}