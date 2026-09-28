import Cart from "../assets/cart.webp"

function Item({ image, name, description, price }) {
    return (
        <div className="item-card">
            <img src={image} alt={name} className="item-img" />
            <div className="item-info">
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="item-preco">R$ {price}</span>
                <button className="item-btn">
                    <img src={Cart} alt="Carrinho" />
                    Adicionar
                </button>
            </div>
        </div>
    )
}

export default Item;