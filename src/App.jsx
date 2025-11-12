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

  // stati per il filtro
  const [selectedGenre, setSelectedGenre] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {
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
    </div>
  )
}

export default App
