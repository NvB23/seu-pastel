import Cart from "../assets/cart.webp"

function FleatingActionButton({ quantity = 0, onClick }) {
    return (
        <button onClick={onClick} className="fab" aria-label="Abrir carrinho">
            <img src={Cart} alt="Carrinho" />
            {quantity > 0 && <span className="fab-badge">{quantity}</span>}
        </button>
    )
}

export default FleatingActionButton;