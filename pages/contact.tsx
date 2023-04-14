import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const index = () => {
    return (
        <>
            <NavBar currentPage={"Contact"} />
            <Contact />
            <Footer />
        </>
    )
}

export default index