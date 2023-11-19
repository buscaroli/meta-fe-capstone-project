import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
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
