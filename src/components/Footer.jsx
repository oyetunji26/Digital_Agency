import { SectionWrapper } from '../hoc'

const Footer = () => {
  return (
    
    <div className='xs:grid xs:grid-cols-2 md:grid-cols-none  mx-auto md:flex md:flex-auto md:flex-wrap gap-20 py-10'>
        <div className=''>
            <h1 className='text-2xl font-bold'>Digital Agency</h1>
            <p className=' my-5'>Building digital products, brand and experience</p>
        </div>
        <div>
            <h1 className='text-2xl font-semibold'>Resources</h1>
            <ul className='list-none text-blacked'>
                <li className='text-blacked my-2'>Guides</li>
                <li className='text-blacked my-2'>Blogs</li>
                <li className='text-blacked my-2' >Customer Stories</li>
                <li className='text-blacked my-2'>Glossery</li>
            </ul>
        </div>

        <div>
            <h1 className='text-2xl font-semibold'>Company</h1>
            <ul className='list-none text-blacked'>
                <li className='text-blacked my-2'>About Us</li>
                <li className='text-blacked my-2'>Careers</li>
                <li className='text-blacked my-2' >Partners</li>
                <li className='text-blacked my-2'>Contact Us</li>
            </ul>
        </div>

        <div>
            <h1 className='text-2xl font-semibold'>Social Media</h1>
            <ul className='list-none text-blacked'>
                <li className='text-blacked my-2'>LinkedIn</li>
                <li className='text-blacked my-2'>Facebook</li>
                <li className='text-blacked my-2' >Instagram</li>
                <li className='text-blacked my-2'>Twitter</li>
            </ul>
        </div>
    </div>
  )
}

export default SectionWrapper(Footer,"contact")