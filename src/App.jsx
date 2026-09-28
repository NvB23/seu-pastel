import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart';

function App() {
  const [count, setCount] = useState(3)
  const [pagina, setPagina] = useState("home");

  return (
    <>
      {pagina === "home" && <Home quantity={count} goToCart={() => setPagina("cart")} />}
      {pagina === "cart" && <Cart back={() => setPagina("home")} />}
    </>
  )
}

export default App
