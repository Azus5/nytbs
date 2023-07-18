import Book from "./Book"

type Props = {
  books: Book[]
}

function BookList({ books }: Props) {
  return (
    <div className="flex flex-row flex-no-wrap overflow-x-scroll scrolling-touch items-start">
      {books.map(book => (
        <>
          <Book book={book} className="mr-6 flex-shrink-0" key={book.rank} />
        </>
      ))}
    </div>
  )
}

export default BookList