import Agenda from "../../components/Agenda";
import FAQ from "../../components/FAQ";
import Venue from "../../components/Venue";
import Overview from "../../components/Overview";
import Speakers from "../../components/Speakers";
import Exhibition from "../../components/Exhibition";
import Partners from "../../components/Partners";

export default function HomePage() {
    return (
        <>
            <div>
                <Overview />
                <Speakers />
                <Agenda />
                <Venue />
                <Partners />
                <Exhibition />
                <FAQ />
            </div>
        </>
    )
}