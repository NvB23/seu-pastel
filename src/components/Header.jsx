import Logo from "./Logo";

function Header() {
    return (
        <header>
            <Logo />

            <div className="div-buttons">
                <button className="create">Crie uma conta</button>
                <button className="login">Entre na sua conta</button>
            </div>
        </header>
    )
}

export default Header;