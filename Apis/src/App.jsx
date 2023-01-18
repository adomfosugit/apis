import { useState } from 'react'
import './App.css'
import { getVideos } from './api'
import Videos from './components/Videos'
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [videos, setVideos] = useState([])
  const [lastSearchTerm, setLastSearchTerm] = useState('...')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm !== lastSearchTerm) {
      setLastSearchTerm(searchTerm)
      getVideos(searchTerm).then((data) => setVideos(data))
    }
  }
  return (
    <div className="App">
      <h1> Welcome to the World of Apis</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <Videos videos={videos} />
      
    </div>
  )
}

export default App
