import { FaAngleDown } from 'react-icons/fa'

function ScrollDownArrow() {
  return (
    <div className='absolute bottom-3 left-1/2'>
      <div className='relative w-12 h-12 group select-none animate-bounce'>
        <FaAngleDown size={50} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
      </div>
    </div>
  )
}

export default ScrollDownArrow