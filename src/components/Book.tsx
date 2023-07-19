import { useState, useEffect } from 'react'
import { getRandomBookCoverPath } from '@/utils'

type Props = {
  book: ListItem,
  className?: string
}

function Book({ book, className = '' }: Props) {
  const [bookCoverPath, setbookCoverPath] = useState('')
  const [bookDetails, setBookDetails] = useState(book.book_details[0])

  useEffect(() => {
    setBookDetails(book.book_details[0])
  }, [book])

  useEffect(() => {
    setbookCoverPath(getRandomBookCoverPath())
  }, [])

  function BookDetailSection(section: string, key: string) {
    return (
      <div className='mt-3'>
        <span>{section}</span>
        <p className='text-sm'>{book[key as keyof typeof Book]}</p>
      </div>
    )
  }

  return (
    <div className={`w-44 font-medium text-sm ${className}`}>
      <div className='h-20'>
        <h4 className="uppercase text-center">{book.rank}. {bookDetails.title}</h4>
      </div>
      <a href='#' className='w-44 relative cursor-pointer group' tabIndex={0}>
        <img src={bookCoverPath} alt={`${bookDetails.title} - book cover`} className='w-44 h-72' />
        <div className="book-tooltip group-focus:scale-100 hover:scale-100">
          <h4>{bookDetails.title}</h4>
          {BookDetailSection('Summary:', 'description')}
          {BookDetailSection('Publisher:', 'publisher')}
          {BookDetailSection('Price:', 'price')}
          <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer" className='btn-yellow mt-3'>Buy Now</a>
        </div>
      </a>
      <h4 className='text-center'>by {bookDetails.author}</h4>
    </div>
  )
}

export default Book