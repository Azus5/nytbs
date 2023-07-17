
function GenreList() {
  return (
    <div className="flex flex-row flex-wrap gap-3 mx-40">
      {bookGenres.map(genre => (
        <span className="genre-box">
          {genre}
        </span>
      ))}
    </div>
  )
}

export default GenreList