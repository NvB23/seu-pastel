import ImgLogo from "../assets/pastel-logo.png"

function Logo() {
    return (
        <div className="div-logo">
                <img src={ImgLogo} alt="Logo Seu Pastel" />
                <h1>
                    Seu <span>Pastel</span>
                </h1>
            </div>
    )
}

export default Logo;