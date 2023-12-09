// import figs from '../assets/fig3.png'
// import ell2 from '../assets/ellipse2.png'
import { Link } from 'react-router-dom'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import menu from '/menu.svg'
import close from '/close.svg'
import { useState } from 'react'

const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const [active,setActive] = useState('home');
  const navLinks = [
    {id:"",title:"home"},
    {id:"about",title:"about"},
    {id:"testimonial",title:"testimonials"},
    {id:"contact",title:"contact"},
  ]
  return (
    <div className=''>
       <nav className='py-9 sm:px-10 xs:px-10 md:px-24  flex flex-wrap flex-row justify-between text-[#272D38]'>
          <Link to="" className='text-[1.4rem] text-[#272D38] font-bold'
            onClick={() => {setActive(""); window.scrollTo(0,0)}}
          >
            <motion.h1 variants={textVariant(0.1)}>
            DIGITAL AGENCY
            </motion.h1>
          </Link>

          <div className='hidden sm:flex  md:flex xs:flex mdd:hidden flex-1 justify-end items-center'>
            <img src={toggle? close: menu} alt="" className='h-7 w-7 object-contain cursor-pointer' onClick={() => {setToggle(!toggle);}}/>
          </div>

          <ul className='hidden list-none mdd:flex gap-6 mr-5 text-[#272D38] text-lg justify-end'>
            {navLinks.map((link) => (
              <li
              key={link.id}
              className={`${
                active === link.title ? "text-blacked" : "text-deepGray"
              } hover:text-white text-[21px] font-[530] cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
            )) }
          </ul>

          


          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 bg-[#fdfdfc] absolute top-20 right-0 mx-4 my-2 z-10 rounded-xl `}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                key={link.id}
                className={`${
                  active === link.title ? "text-[#222]" : "text-deepGray"
                } font-poppins font-medium cursor-pointer text-[20px] hover:text-blacked`}
                onClick={() => {setToggle(!toggle); setActive(link.title); }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </nav> 

    </div>
  )
}

export default Navbar