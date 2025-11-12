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
  const [genre, setGenre] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  return (
    <div className='container'>
      <h1>Catalogo Film</h1>
    </div>
  )
}

export default App
