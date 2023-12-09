// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import { BrowserRouter } from 'react-router-dom';
// import fig from '/fig1.png'
import { Navbar, Hero, Company, Feature, Testimonial, Footer} from './components'
import ell2 from '/ellipse2.png';
import ell3 from '/ellipse3.png';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#fdfdfc">
        <div style={{backgroundImage: `url(${ell2})`, backgroundRepeat: 'no-repeat'}} className=' w-full h-full'>
          {/* <img src={ell2} className="w-full h-full" alt="" /> */}
          <Navbar />
          <Hero />
        </div>
        <Company/>
        <div style={{backgroundImage: `url(${ell3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center right'}}>
          <Feature/>
        </div>
        <Testimonial />
        <div className='bg-[#f6f6f6] mt-20'>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
