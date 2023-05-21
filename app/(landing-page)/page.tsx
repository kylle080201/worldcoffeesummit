import Agenda from "../../components/Agenda";
import CountDown from "../../components/CountDown";
import FAQ from "../../components/FAQ";
import HeaderVideo from "../../components/HeaderVideo";
import Overview from "../../components/Overview";
import Speakers from "../../components/Speakers";
import Venue from "../../components/Venue";

export default function HomePage() {
    return (
        <>
            <div>
                <CountDown />
                <Overview />
                <Speakers />
                <Agenda />
                <Venue />
                <FAQ />
            </div>
        </>
    )
}