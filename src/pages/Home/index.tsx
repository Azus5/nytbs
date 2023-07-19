import { useState, useRef } from 'react'
import Header from "./Header"
import Genres from './Genres'
import Books from './Books'

function Home() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | Partial<Genre>>({})
  const booksRef = useRef<HTMLDivElement>(null)

  return (
    <div className="index-page">
      <Header />
      <Genres onSelectGenre={setSelectedGenre} selectedGenre={selectedGenre} booksRef={booksRef} />
      <Books elRef={booksRef} genre={selectedGenre} />
    </div>
  )
}

export default Home
