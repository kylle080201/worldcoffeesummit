import CountDown from "../../components/CountDown";
import FAQ from "../../components/FAQ";
import HeaderVideo from "../../components/HeaderVideo";
import Speakers from "../../components/Speakers";
import TheWhy from "../../components/TheWhy";
import Venue from "../../components/Venue";
import WhoAreWe from "../../components/WhoAreWe";

export default function HomePage() {
    return (
        <>
            <div>
                <HeaderVideo />
                <CountDown />
                <Speakers />
                <Venue />
                <FAQ />
            </div>
        </>
    )
}