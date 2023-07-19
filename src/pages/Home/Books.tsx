import Footer from "./Footer"
import useBooks from '@/hooks/useBooks'
import Book from "components/Book";
import BookList from "components/BookList";
import undrawCheckingBoxPath from '@/assets/undraw_checking_box.svg'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect } from "react";

type Props = {
  elRef: React.MutableRefObject<HTMLDivElement | null>,
  genre: Genre | Partial<Genre>
}

function Books({ elRef, genre }: Props) {

  function NoBooks() {
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
    const { data, error, isLoading, mutate } = useBooks({ list: genre.list_name_encoded || '' })

    function top3Books(): ListItem[] {
      return data?.results.slice(0, 3) || []
    }

    function sub3Books(): ListItem[] {
      return data?.results.slice(3) || []
    }

    useEffect(() => {
      if (data?.results[0]?.display_name !== genre.display_name) {
        mutate()
      }
    }, [genre])

    return (
      <div className="pt-5 px-14">
        <div className="flex flex-row">
          <div className="items-start mr-32">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
          <div>
            <h1 className="font-bold text-lg">These are the Top 3 in <span className="text-orange-400">{genre.display_name}</span></h1>
            <div className="flex flex-row mt-5">
              {top3Books().map(book => (
                <Book book={book} className="mr-5" key={book.rank} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-bold ml-4 mb-5 text-lg">Sub 3</h1>
          <BookList books={sub3Books()} />
        </div >
      </div >
    )
  }

  function Content() {
    if (genre.list_name_encoded) {
      return <WithBooks />
    } else {
      return <NoBooks />
    }
  }

  return (
    <div id="books" ref={elRef} className="flex flex-col justify-between">
      <Content />
      <Footer />
    </div>
  )
}

export default Books