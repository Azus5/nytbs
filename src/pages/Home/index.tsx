import Header from "./Header"
import Genres from './Genres'
import Books from './Books'

function Home() {
  return (
    <div className="index-page">
      <Header />
      <Genres />
      <Books />
    </div>
  )
}

export default Home
