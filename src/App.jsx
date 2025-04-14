import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Dados from "./Data/Dados.json"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Aside from "./routes/Aside"
import Error from "./routes/Error"
import Filtro from "./routes/Filtro"
import Home from "./routes/Home"
import Jogador from "./routes/Jogador"
import Produtos from "./routes/Produtos"
import Login from "./routes/Login"
import GlobalStyle from './styles/GlobalStyles'

function App() {

  return (
    <Router>
      <GlobalStyle/>
      <div id="container">
      <Header/>
      <div id="content-wraper">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home Dados={Dados} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filtro" element={<Filtro />} />
        <Route path="/jogador" element={<Jogador />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
      <Aside/>
      </div>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
