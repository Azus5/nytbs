import GenreList from "components/GenresList"
import ScrollDownArrow from 'components/ScrollDownArrow'

function Genres() {
  return (
    <div id="genres" className="h-screen relative pt-10">
      <h1 className="text-center text-4xl font-bold mb-10">Genres</h1>
      <div>
        <GenreList />
      </div>
      <ScrollDownArrow />
    </div>
  )
}

export default Genres