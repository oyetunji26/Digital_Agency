// import {figOne} from '../assets/fig2.png'
import { SectionWrapper } from "../hoc"
import figS from "/fig3.png"
import figT from '/fig2.png'

const Feature = () => {
  return (
    <>
        <div className="flex  flex-wrap-reverse md:flex-row justify-between items-center">

            <div className="w-full md:w-5/12 mdd:w-5/12">
                <img src={figT} className='object-scale-down' alt="" />
            </div>

            <div className="w-full md:w-5/12 mdd:w-5/12 py-5">
                <h1 className="text-4xl mdd:text-5xl font-bold py-6 text-blacked">
                    Branding & Design System
                </h1>
                <p className="text-lg">
                    Commonly Used In The Graphic, Print & Publishing Industries For Previewing Visual Layout And Mockup.
                </p>
            </div>
        </div>

        <div className="flex flex-wrap mt-20 gap-6 justify-between items-center" >

            <div className="w-full md:w-5/12 mdd:w-5/12 px-10 py-5">
                <h1 className="text-4xl mdd:text-5xl font-bold py-6 text-blacked">
                    Custome & Plugin Development
                </h1>
                <p className="text-lg">
                    Commonly Used In The Graphic, Print & Publishing Industries For Previewing Visual Layout And Mockup.
                </p>
            </div>

            <div className="w-full md:w-5/12 mdd:w-5/12 pl-5">
                <img src={figS} className='object-scale-down ' alt="" />
            </div>

        </div>
    </>
  )
}



export default SectionWrapper(Feature,'about')