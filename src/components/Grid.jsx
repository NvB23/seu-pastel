import Item from "./Item";
import Pastel from "../assets/pastel.png";

const pasteis = [
    {
        image: Pastel,
        name: "Pastel de Carne",
        description: "Pastel recheado com carne moída temperada",
        price: 8.00
    },
    {
        image: Pastel,
        name: "Pastel de Queijo",
        description: "Pastel crocante recheado com queijo mussarela",
        price: 7.00
    },
    {
        image: Pastel,
        name: "Pastel de Frango",
        description: "Frango desfiado temperado com queijo cremoso",
        price: 9.00
    },
    {
        image: Pastel,
        name: "Pastel de Pizza",
        description: "Recheado com presunto, queijo, tomate e orégano",
        price: 10.00
    },
    {
        image: Pastel,
        name: "Pastel de Calabresa",
        description: "Calabresa fatiada com queijo e cebola",
        price: 9.50
    },
    {
        image: Pastel,
        name: "Pastel de Carne com Queijo",
        description: "Carne moída temperada com queijo mussarela",
        price: 10.00
    },
    {
        image: Pastel,
        name: "Pastel de Chocolate",
        description: "Pastel doce recheado com chocolate cremoso",
        price: 8.50
    },
    {
        image: Pastel,
        name: "Pastel de Banana",
        description: "Banana com açúcar e canela em uma massa crocante",
        price: 7.50
    }
];

function  Grid({ onAddToCart }) {
    return (
        <main className="grid-main">
            <h1>Nossas Opções</h1>

            <section className="grid-section">
                {pasteis.map((pastel) => {
                    return (
                        <Item
                            key={pastel.name}
                            image={pastel.image}
                            name={pastel.name}
                            description={pastel.description}
                            price={pastel.price}
                            onAddToCart={() => onAddToCart(pastel)}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default Grid;