import Book from "./Book"

type Props = {
  books: ListItem[] | Array<undefined>,
  isLoading?: boolean
}

function BookList({ books, isLoading }: Props) {
  return (
    <div className="flex flex-row flex-no-wrap overflow-x-scroll overflow-y-hidden scrolling-touch items-start">
      {books.map((book, i) => (
        <>
          <Book book={book} isLoading={isLoading} className="mr-6 flex-shrink-0" key={i} />
        </>
      ))}
    </div>
  )
}

export default BookList