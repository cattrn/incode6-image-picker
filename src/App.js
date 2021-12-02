import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import './App.css'
import PickerPage from './components/PickerPage/PickerPage'
import FavouritesPage from './components/FavouritesPage/FavouritesPage'

function App() {  
  const [savedPhotos, setSavedPhotos] = useState([])

  return (
    <BrowserRouter>
      <div className="App">
      {/* TODO: create nav component */}
        <Link to="/favourites">Favourites</Link>
        <Routes>
          <Route path="/favourites" element={<FavouritesPage savedPhotos={savedPhotos} />} />
          <Route path="/" element={<PickerPage savedPhotos={savedPhotos} setSavedPhotos={setSavedPhotos} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
