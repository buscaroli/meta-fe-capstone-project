import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

import './App.css'
import RouteMainPage from './RoutePages/RouteMainPage'
import RouteReservePage from './RoutePages/RouteReservePage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<RouteMainPage />} />
        <Route exact path="/reserve" element={<RouteReservePage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
