function Cart({
    cart,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    back
}) {

    return (
        <main className="cart-page">

            <div className="cart-header">

                <button
                    className="cart-back"
                    onClick={back}
                >
                    ← Voltar
                </button>

                <h1>Meu Carrinho</h1>

            </div>


            {cart.length === 0 ? (

                <div className="cart-empty">

                    <h2>Seu carrinho está vazio</h2>

                    <p>
                        Adicione alguns pastéis para começar seu pedido.
                    </p>

                    <button
                        className="cart-back-home"
                        onClick={back}
                    >
                        Ver produtos
                    </button>

                </div>

            ) : (

                <div className="cart-content">

                    <section className="cart-items">

                        {cart.map((item) => (

                            <div
                                className="cart-item"
                                key={item.name}
                            >

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />


                                <div className="cart-item-info">

                                    <h2>{item.name}</h2>

                                    <p>{item.description}</p>

                                    <span>
                                        R$ {item.price.toFixed(2)}
                                    </span>

                                </div>


                                <div className="cart-item-actions">

                                    <div className="quantity">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.name)
                                            }
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.name)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>


                                    <button
                                        className="remove-button"
                                        onClick={() =>
                                            removeFromCart(item.name)
                                        }
                                    >
                                        Remover
                                    </button>

                                </div>

                            </div>

                        ))}

                    </section>


                    <aside className="cart-summary">

                        <h2>Resumo do pedido</h2>

                        <div className="summary-line">

                            <span>Itens</span>

                            <span>
                                {cart.reduce(
                                    (total, item) =>
                                        total + item.quantity,
                                    0
                                )}
                            </span>

                        </div>


                        <div className="summary-total">

                            <span>Total</span>

                            <strong>
                                R$ {total.toFixed(2)}
                            </strong>

                        </div>


                        <button className="checkout-button">
                            Finalizar pedido
                        </button>

                    </aside>

                </div>

            )}

        </main>
    )
}

export default Cart;