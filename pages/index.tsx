import HeaderVideo from "../components/HeaderVideo"
import NavBar from "../components/NavBar"
import { TheWhy } from "../components/TheWhy"
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
    </>
  )
}

export default index