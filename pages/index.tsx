import HeaderVideo from "../components/HeaderVideo"
import MediaPartners from "../components/MediaPartners"
import NavBar from "../components/NavBar"
import TheWhy from "../components/TheWhy"
import Venue from "../components/Venue"
import WhoAreWe from "../components/WhoAreWe"

const index = () => {
  return (
    <>
      <NavBar />
      <HeaderVideo />
      <WhoAreWe />
      <TheWhy />
      <Venue />
      <MediaPartners />
    </>
  )
}

export default index