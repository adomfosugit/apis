import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getVideos } from './api'
import Videos from './components/Videos'
function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos(`${searchTerm}`).then((data) => setVideos(data))
  
    
  }, [searchTerm])
  const handleSubmit = (e) => {
    e.preventDefault()
    getVideos(searchTerm).then((data) => setVideos(data))
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
