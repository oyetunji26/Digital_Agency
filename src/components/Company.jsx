import { SectionWrapper } from "../hoc"
import { motion } from 'framer-motion'
// import { fadeIn, slideIn } from '../utils/motion'
import company from "/Companylogo.png";
import company2 from "/Companylogo2.png"
import company3 from "/Companylogo3.png"
import company4 from "/Companylogo4.png"

const Company = () => {
  return (
    <div className="mt-12 mb-12 md:mt-28 pt-4   md:mb-32 justify-center items-center place-items-center">
      {/* <img src={company} alt="CompanyLogo"/> */}
      <center>
        <motion.p className="text-deepGray text-center font-[inter]">Trusted By 4,000+ Companies</motion.p>
        <div className="md:max-w-2xl mt-4 md:mx-20 md:grid md:grid-cols-4 xs:inline-flex overflow-hidden  gap-10 mx-auto justify-between py-1 px-4 rounded-lg bg-[#f6f6f6] overflow-none">
          <img src={company}  className="object-scale-down " alt="Company Logo" />
          <img src={company2} className="object-scale-down " alt="Company Logo" />
          <img src={company3} className="object-scale-down " alt="Company Logo" />
          <img src={company4} className="object-scale-down " alt="Company Logo" />
        </div>
        </center>
    </div>
  )
}

export default SectionWrapper(Company,"")