import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Partnership from "../components/Partnership"

const index = () => {
    return (
        <>
            <NavBar currentPage={"Partnership"} />
            <Partnership />
            <Footer />
        </>
    )
}

export default index