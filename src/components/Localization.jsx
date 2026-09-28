import Pin from "../assets/pin.png"
import Busca from "../assets/lupa.png"
import Pasteis from "../assets/pasteis.png"

function Localization() {
    return (
        <main className="main-localization">
            <section className="section-card">
                <h1>A fome bateu?</h1>
                <h2>Peça já o seu pastel no conforto da sua casa!</h2>

                <div className="card-busca">
                    <h3>Buscar Pastelarias</h3>

                    <div className="input-busca">
                        <img src={Pin} alt="Icone de Pin" />
                        <input type="text" placeholder="Escolha o lugar..." />
                        <button><img src={Busca} alt="Icone de Lupa" /></button>
                    </div>
                </div>
            </section>
            
            <section className="section-img">
                <img src={Pasteis} alt="Pasteis" />
            </section>
        </main>
    )
}

export default Localization;