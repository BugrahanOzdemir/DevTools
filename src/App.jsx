import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Route, Routes } from "react-router-dom"

//Compontents
import Navbar from "./components/Navbar"

//Pages
import Home from "./pages/Home"
import TextToNatoAlphabet from "./pages/TextToNatoAlphabet"
import SlugifyString from "./pages/SlugifyString"

const App = () => {
  return (
    <div className='min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased'>
      <div className='py-6 px-72'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/text-to-nato-alphabet'
            element={<TextToNatoAlphabet />}
          />
          <Route path='/slugify-string' element={<SlugifyString />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  )
}

export default App
