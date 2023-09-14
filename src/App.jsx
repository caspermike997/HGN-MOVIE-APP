import React from "react"
import HomePage from "./pages/HomePage"
import MovieDetails from './pages/MovieDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom"





function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
