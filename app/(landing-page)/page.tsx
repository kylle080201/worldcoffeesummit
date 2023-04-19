import CountDown from "../../components/CountDown";
import HeaderVideo from "../../components/HeaderVideo";
import TheWhy from "../../components/TheWhy";
import Venue from "../../components/Venue";
import WhoAreWe from "../../components/WhoAreWe";

export default function HomePage() {
    return (
        <>
            <div>
                <HeaderVideo />
                <CountDown />
                <WhoAreWe />
                <TheWhy />
                <Venue />
            </div>
        </>
    )
}