import FleatingActionButton from "../components/FleatingActionButton";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Localization from "../components/Localization";

function Home({quantity = 0, goToCart, onAddToCart }) {
    return (
        <>
            <Header />
            <Localization />
            <Grid onAddToCart={onAddToCart} />
            <Footer />
            <FleatingActionButton quantity={quantity} onClick={goToCart} />
        </>
    )
}

export default Home;