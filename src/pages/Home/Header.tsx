import undrawReadingPath from '@/assets/undraw_reading.svg'
import logoPath from '@/assets/logo.svg'
import ScrollDownArrow from 'components/ScrollDownArrow'

function Header() {
  return (
    <div className='h-screen'>
      <div className="bg-[url('/src/assets/books.jpg')] h-80 flex justify-center items-center">
        <img src={logoPath} alt="The New York Times Best Sellers" />
      </div>
      <div className='font-medium flex flex-row'>
        <div className='w-1/2 text-lg mt-44'>
          <div className='mx-auto max-w-lg'>
            <div className='text-justify max-w-sm ml-4'>
              <p>Easiest way to browse through the <b>New York Times</b> best sellers lists.</p>
              <p className='mt-5'>Travel through time and see what were the best sellers last week/month/year</p>
            </div>
            <div className='bg-blue-400 mt-5 max-w-max px-16 p-10 rounded-md mx-auto'>
              <ul className='list-disc'>
                <li>See what are the best sellers of the week</li>
                <li className='mt-2'>Find and search by your favorite genres</li>
                <li className='mt-2'>One click away from the Amazon Store!</li>
                <li className='mt-2'>100% free and no sign-up required</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-1/2 text-center mt-32'>
          <img src={undrawReadingPath} alt="undraw-reading" className='mx-auto' />
        </div>
      </div>
      <ScrollDownArrow />
    </div>
  )
}

export default Header