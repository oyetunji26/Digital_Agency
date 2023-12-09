import figg from '/fig1.png'
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../utils/motion';


const Hero = () => {
  return (
    <div className='mt-[5rem] mx-auto md:grid md:grid-cols-2 grid-flow-col gap-4'>
        <div className='  mdd:col-span-7 xs:text-center md:text-left xs:leading-10'>
            <motion.h1 variants={fadeIn("","",0.2,2)} className='mb-3 text-[2rem] font-[inter] tb:text-4xl lg:text-[4.25rem] lg:pt-3 leading-7 mdd:text-6xl text-[#333] font-bold xs:leading-relaxed'>
                Building Digital Products, Brands & Experience.
            </motion.h1>
            <motion.p variants={fadeIn("","",0.1,1)} className='text-[#444] py-2 text-lg'>Digital Agency Is Your Online Team Management Tool That Easy And Prompt</motion.p>
            <button className='bg-primary-fade my-4 px-3 py-1 rounded-md text-white text-[1.3rem] font-medium'>Contact Us</button>
        </div>
        <div className='sm:mt-5 md:mt-0   mdd:col-span-5 '>
            <motion.img variants={slideIn("right","",0.1,1)} src={figg} className=' place-self-center' alt="" />
        </div>
    </div>
  )
}

export default SectionWrapper(Hero,"hero");