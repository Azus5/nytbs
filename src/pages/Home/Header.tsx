import undrawReadingPath from '@/assets/undraw_reading.svg'
import logoPath from '@/assets/logo.svg'
import ScrollDownArrow from 'components/ScrollDownArrow'

function Header() {
  return (
    <div className='xl:h-screen relative'>
      <div className="bg-[url('/src/assets/books.jpg')] h-32 md:h-60 xl:h-80 bg-cover flex justify-center items-center">
        <img src={logoPath} alt="The New York Times Best Sellers" className='w-3/4 md:w-1/2' />
      </div>
      <div className='font-medium flex flex-col xl:flex-row'>
        <div className='w-full xl:w-1/2 text-sm md:text-lg mt-20 xl:mt-44'>
          <div className='w-full px-2 md:px-0 md:mx-auto md:max-w-lg'>
            <div className='text-justify max-w-sm md:ml-4'>
              <p>Easiest way to browse through the <b>New York Times</b> best sellers lists.</p>
              <p className='mt-5'>Travel through time and see what were the best sellers last week/month/year</p>
            </div>
            <div className='bg-blue-400 mt-5 md:max-w-max p-10 md:px-16rounded-md mx-auto'>
              <ul className='list-disc'>
                <li>See what are the best sellers of the week</li>
                <li className='mt-2'>Find and search by your favorite genres</li>
                <li className='mt-2'>One click away from the Amazon Store!</li>
                <li className='mt-2'>100% free and no sign-up required</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full xl:w-1/2 text-center mt-32'>
          <img src={undrawReadingPath} alt="undraw-reading" className='mx-auto' />
        </div>
      </div>
      <ScrollDownArrow hideOnSmallerDevices={true} />
    </div>
  )
}

export default Header