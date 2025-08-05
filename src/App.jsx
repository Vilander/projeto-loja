import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'
import './styles.css'
import { useState, useEffect } from 'react'

function App() {
  const [produtos, setProdutos] = useState([])
  const [carrinho, setCarrinho] = useState([])

  // Simula um "fetch"
  useEffect(() => {
    setProdutos([
      { id: 1, nome: 'Camiseta', preco: 50 },
      { id: 2, nome: 'Calça', preco: 120 },
      { id: 3, nome: 'Tênis', preco: 200 }
    ])
  }, [])

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => [...prev, produto])
  }

  return (
    <Router>
      <Navbar />
      <Banner />
      <Routes>
        <Route
          path="/"
          element={
            <Produtos
              produtos={produtos}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          }
        />
        <Route
          path="/carrinho"
          element={<Carrinho carrinho={carrinho} />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App