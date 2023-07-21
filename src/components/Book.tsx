import { useState, useEffect } from 'react'
import { getRandomBookCoverPath } from '@/utils'
import BookLoading from './BookLoading'

type Props = {
  book: ListItem | undefined,
  className?: string,
  isLoading?: boolean
}

function Book({ book, isLoading, className = '' }: Props) {
  const [bookCoverPath, setbookCoverPath] = useState('')
  const [bookDetails, setBookDetails] = useState<Partial<Book>>({})

  useEffect(() => {
    if (book && book.book_details) {
      setBookDetails(book.book_details[0])
    }
  }, [book])

  useEffect(() => {
    setbookCoverPath(getRandomBookCoverPath())
  }, [])

  function BookDetailSection(section: string, key: string) {
    return (
      <div className='mt-3'>
        <span>{section}</span>
        <p className='text-sm'>{book ? book.book_details[0][key as keyof typeof Book] : ''}</p>
      </div>
    )
  }

  function BookContent() {
    return (
      <div className='relative flex-shrink-0'>
        <div className='h-20'>
          <h4 className="uppercase text-center">{book?.rank}. {bookDetails?.title}</h4>
        </div>
        <a href='#' className='w-44 relative cursor-pointer peer' tabIndex={0}>
          <img src={bookCoverPath} alt={`${bookDetails?.title} - book cover`} className='w-44 h-72' />
        </a>
        <div className="book-tooltip peer-focus:scale-100 hover:scale-100">
          <h4>{bookDetails?.title}</h4>
          {BookDetailSection('Summary:', 'description')}
          {BookDetailSection('Publisher:', 'publisher')}
          {BookDetailSection('Price:', 'price')}
          <a href={book?.amazon_product_url} target="_blank" rel="noopener noreferrer" className='btn-yellow mt-3'>Buy Now</a>
        </div>
        <h4 className='text-center'>by {bookDetails?.author}</h4>
      </div>
    )
  }

  function Content() {
    if (!isLoading) return <BookContent />
    else return <BookLoading />
  }

  return (
    <div className={`w-44 font-medium text-sm ${className}`}>
      <Content />
    </div>
  )
}

export default Book