import { Link } from "react-scroll";
import { FaAngleDown } from 'react-icons/fa'

function ScrollDownArrow() {
  return (
    <div className='absolute bottom-3 left-1/2 translate-x-1/2'>
      <div className='relative w-12 h-12 '>
        <Link to="genres" className='group' smooth={true} duration={500}>
          <FaAngleDown size={50} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
          <div className='w-12 h-12 scale-0 group-hover:scale-100 bg-gray-400 absolute rounded-full top-0 -z-10 transition-all duration-200 ease-linear'></div>
        </Link>
      </div>
    </div>
  )
}

export default ScrollDownArrow