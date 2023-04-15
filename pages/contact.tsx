import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const contact = () => {
    return (
        <>
            <NavBar currentPage={"Contact"} />
            <Contact />
            <Footer />
        </>
    )
}

export default contact