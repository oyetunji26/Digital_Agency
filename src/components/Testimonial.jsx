hiimport { SectionWrapper } from '../hoc'
import tes1 from '/tes1.png'
import tes2 from '/tes2.png'
import tes3 from '/tes3.png'
import fig4 from '/fig4.png'
// import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'


const Testimonial = () => {

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  const testimonials = [
    {
      name:"Andrew Rathore",
      img:tes1, 
      text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nostrum consequuntur amet porro dignissimos quam, beatae dolorum."
    },
    {
      name:"Vera Duncan",
      img:tes2,
      text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nostrum consequuntur amet porro dignissimos quam, beatae dolorum. "
    },
    {
      name:"Mark Smith",
      img:tes3,
      text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nostrum consequuntur amet porro dignissimos quam, beatae dolorum. "
    }
  ]
  return (
    <>
      <div className='mt-20'>
          <p className='text-center text-xl bg-['>Testimonials</p>
          <h1 className='text-4xl text-center font-bold'>Read What Other</h1>
          <h1 className='text-4xl text-center font-bold'>Have To Say</h1>
      </div>

      <div className='mdd:grid grid-cols-3 mt-20 gap-3 justify-center'>
        {testimonials.map((tes) => (
          <Tilt key={tes.id} options={defaultOptions} className="grid-col p-5 bg-[#f6f6f6] my-5 rounded-xl">
            <img src={tes.img} className="object-scale-down mx-auto" alt="" />
            <h1 className='text-center text-blacked my-2 text-xl font-medium'>{tes.name}</h1>
            <p className='text-center text-ellipsis'>
              {tes.text}
            </p>
          </Tilt>
        ))}
      </div>

      <div className="my-20 py-8 md:py-0 px-5 md:px-16 items-center rounded-3xl shadow bg-[#f6f6f6] md:grid grid-cols-2 gap-6">
        <img src={fig4} className='object-contain' alt="" />
        <div className='mt-7'> 
          <h1 className='text-blacked text-3xl md:4xl mdd:text-5xl font-bold my-4'>Be a part of the next big thing</h1>
          <p className='text-blacked'>We work with Brans, Startups, to SMEs.</p>
          <p className='text-blacked'>Collaborate for more impact and growth</p>
          <button className='bg-primary-fade text-white px-4 rounded py-1 my-4 text-lg'>Contact Us</button>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Testimonial,"testimonial");
