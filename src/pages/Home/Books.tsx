import Footer from "./Footer"
import useBooks from '@/hooks/useBooks'
import Book from "components/Book";
import BookList from "components/BookList";
import undrawCheckingBoxPath from '@/assets/undraw_checking_box.svg'
import undrawVoid from '@/assets/undraw_void.svg'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import ConditionalRenderer from "components/ConditionalRenderer";

type Props = {
  elRef: React.MutableRefObject<HTMLDivElement | null>,
  genre: Genre | Partial<Genre>
}

function Books({ elRef, genre }: Props) {

  function PickAGenre() {
    return (
      <div className='flex flex-row justify-center items-center h-full'>
        <div className='text-center mr-14'>
          <h1 className='text-5xl tracking-widest'>No Books</h1>
          <h4 className='text-xl'>Please pick a Genre first</h4>
        </div>
        <div className='w-96'>
          <img src={undrawCheckingBoxPath} alt="checking box" />
        </div>
      </div>
    )
  }

  function WithBooks() {
    const [listDate, setListDate] = useState<dayjs.Dayjs | null>(null)
    const { data, error, isLoading, mutate } = useBooks({ list: genre.list_name_encoded || '', 'bestsellers-date': listDate?.format('YYYY-MM-DD') })

    function isResultsEmpty() {
      return !data?.results || data.results.length === 0
    }

    function shouldShowBooks() {
      return !isResultsEmpty() || isLoading
    }

    function top3Books(): ListItem[] | Array<undefined> {
      return isResultsEmpty() ? Array.from({ length: 3 }) : data?.results.slice(0, 3)
    }

    function sub3Books(): ListItem[] | Array<undefined> {
      return isResultsEmpty() ? Array.from({ length: 10 }) : data?.results.slice(3)
    }

    function currentBestsellersDate() {
      const bestsellers_date = top3Books()[0]?.bestsellers_date

      return listDate?.format('MM/DD/YYYY') || dayjs(bestsellers_date).format('MM/DD/YYYY')
    }

    useEffect(() => {
      if (listDate) mutate()
    }, [listDate])

    useEffect(() => {
      if (data?.results[0]?.display_name !== genre.display_name) {
        mutate()
      }
    }, [genre])

    return (
      <div className="pt-5 px-14 h-screen">
        <div className="flex flex-row">
          <div className="items-start mr-32">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={listDate} onChange={(date) => setListDate(date)} />
            </LocalizationProvider>
            <h1 className="text-center mt-4">
              Data from <b>{currentBestsellersDate()}</b>
            </h1>
          </div>
          <ConditionalRenderer show={shouldShowBooks()}>
            <div>
              <h1 className="font-bold text-lg">These are the Top 3 in <span className="text-orange-400">{genre.display_name}</span></h1>
              <div className="flex flex-row mt-5">
                {top3Books().map((book, i) => (
                  <Book book={book} isLoading={isLoading} className="mr-5" key={i} />
                ))}
              </div>
            </div>
          </ConditionalRenderer>
          <ConditionalRenderer show={!shouldShowBooks()}>
            <div className="flex flex-row justify-between items-center w-full pr-5">
              <div className='text-center mr-14'>
                <h1 className='text-5xl tracking-widest'>No Books</h1>
                <h4 className='text-xl'>Try change the date filter or pick a another Genre</h4>
              </div>
              <div className='w-96'>
                <img src={undrawVoid} alt="void" />
              </div>
            </div>
          </ConditionalRenderer>
        </div>
        <ConditionalRenderer show={shouldShowBooks()}>
          <div className="w-full">
            <h1 className="font-bold mb-5 text-lg">Sub 3</h1>
            <BookList books={sub3Books()} isLoading={isLoading} />
          </div >
        </ConditionalRenderer>
      </div >
    )
  }

  function Content() {
    if (genre.list_name_encoded) {
      return <WithBooks />
    } else {
      return <PickAGenre />
    }
  }

  return (
    <div id="books" ref={elRef} className={`flex flex-col justify-between ${(genre.list_name_encoded) ? '' : 'h-screen'}`}>
      <Content />
      <Footer />
    </div>
  )
}

export default Books