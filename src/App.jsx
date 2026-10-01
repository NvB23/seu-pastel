import { useState } from 'react'

import './App.css'

import Home from './pages/Home'
import Cart from './pages/Cart';

function App() {

    const [cart, setCart] = useState([])

    const [pagina, setPagina] = useState("home");


    function addToCart(product) {

        setCart((cartAtual) => {

            const produtoExiste = cartAtual.find(
                (item) => item.name === product.name
            );

            if (produtoExiste) {

                return cartAtual.map((item) =>
                    item.name === product.name
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );

            }

            return [
                ...cartAtual,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    }


    function increaseQuantity(name) {

        setCart((cartAtual) =>
            cartAtual.map((item) =>
                item.name === name
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            )
        );
    }


    function decreaseQuantity(name) {

        setCart((cartAtual) =>
            cartAtual
                .map((item) =>
                    item.name === name
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    }


    function removeFromCart(name) {

        setCart((cartAtual) =>
            cartAtual.filter((item) => item.name !== name)
        );
    }


    const total = cart.reduce(
        (valorTotal, item) =>
            valorTotal + item.price * item.quantity,
        0
    );


    const quantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );


    return (
        <>
            {pagina === "home" &&
                <Home
                    quantity={quantity}
                    goToCart={() => setPagina("cart")}
                    onAddToCart={addToCart}
                />
            }

            {pagina === "cart" &&
                <Cart
                    cart={cart}
                    total={total}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                    back={() => setPagina("home")}
                />
            }
        </>
    )
}

export default App