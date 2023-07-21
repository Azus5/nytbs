import useGenres from "@/hooks/useGenres"
import ScrollDownArrow from 'components/ScrollDownArrow'

type Props = {
  selectedGenre: Genre | Partial<Genre>,
  onSelectGenre: (genre: Genre) => void,
  booksRef: React.MutableRefObject<HTMLDivElement | null>
}

function Genres({ selectedGenre, onSelectGenre, booksRef }: Props) {
  const { data, error, isLoading } = useGenres()

  function onClickGenre(genre: Genre) {
    onSelectGenre(genre)
    booksRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function isGenreSelected(genre: Genre) {
    return selectedGenre.list_name_encoded === genre.list_name_encoded
  }

  function genreBoxClasses(genre: Genre) {
    const defaultClasses = ['genre-box']
    let conditionalClasses = []

    if (isGenreSelected(genre)) conditionalClasses.push('genre-box-selected')

    return [...defaultClasses, ...conditionalClasses].join(' ')
  }

  function GenreListLoading() {
    return (
      <>
        {Array.from({ length: 55 }).map((_el, i) => (
          <span className={`animate-pulse bg-neutral-300 flex basis-1/12 flex-grow py-5 px-10 rounded-md border border-gray-300`} key={i}></span>
        ))}
      </>
    )
  }

  function GenreList() {
    if (isLoading) return <GenreListLoading />
    else {
      const genres = data?.results || []

      return (
        <>
          {genres.map((genre: Genre) => (
            <span className={genreBoxClasses(genre)} onClick={() => onClickGenre(genre)} key={genre.list_name_encoded}>
              {genre.display_name}
            </span>
          ))}
        </>
      )
    }
  }

  return (
    <div id="genres" className="h-screen relative pt-10">
      <h1 className="text-center text-4xl font-bold mb-10">Genres</h1>
      <div>
        <div className="flex flex-row flex-wrap gap-3 mx-40">
          <GenreList />
        </div>
      </div>
      <ScrollDownArrow />
    </div>
  )
}

export default Genres