import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' }
  ]


  // creo nuovo array contenente solo i generi (senza ripetizioni)
  const genres = []

  movies.forEach(movie => {

    let newGenre = true;

    for (let i = 0; i < genres.length; i++) {
      if (genres[i] === movie.genre) {
        newGenre = false;
        break;
      }
    }
    if (newGenre === true) {
      genres.push(movie.genre)
    }
  })
  // console.log(genres);



  // stati per il filtro
  const [selectedGenre, setSelectedGenre] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {
    console.log('useEffect attivato', selectedGenre);

    if (selectedGenre === "") {
      // se non si seleziona il genere, mostra tutti i film
      setFilteredMovies(movies)
    } else {
      // altrimenti filtra
      const filtered = movies.filter(movie => movie.genre === selectedGenre)
      setFilteredMovies(filtered)
    }
  }, [selectedGenre]); // useEffect si attiva al cambiare di selectedGenre
  // quindi mostra tutto se la stringa selectedGenre è vuota, altrimenti filtra l'array movies per il genere selezionato

  return (
    <div className='container'>
      <h1>Catalogo Film</h1>

      {/* filtro */}
      <label htmlFor="" className='form-label mt-3'>
        Filtra per genere:
      </label>
      <select
        id="genreSelect"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className='mx-2'
      >

        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}

      </select>

      {/* lista film */}
      <div className='list-group mt-3'>
        {movies.map(movie => (
          <div key={movie.title} className='list-group-item'>{movie.title}</div>
        ))}
      </div>
    </div>
  )
}

export default App
