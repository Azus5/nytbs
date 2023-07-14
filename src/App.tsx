import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<h1>about</h1>} />
    </Routes>
  )
}

export default App
