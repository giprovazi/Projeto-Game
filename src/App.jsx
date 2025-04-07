import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Aside from "./routes/Aside"
import Error from "./routes/Error"
import Filtro from "./routes/Filtro"
import Home from "./routes/Home"
import Jogador from "./routes/Jogador"
import Login from "./routes/Login"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filtro" element={<Filtro />} />
        <Route path="/jogador" element={<Jogador />} />
      </Routes>
      <Aside />
      <Footer />
    </Router>
  )
}

export default App
