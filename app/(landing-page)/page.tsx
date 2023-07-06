import Agenda from "../../components/Agenda";
import FAQ from "../../components/FAQ";
import Venue from "../../components/Venue";
import Overview from "../../components/Overview";
import Speakers from "../../components/Speakers";
import Exhibition from "../../components/Exhibition";
import Partners from "../../components/Partners";
import WhyAttend from "../../components/WhyAttend";

export default function HomePage() {
    return (
        <>
            <div>
                <Overview />
                <Speakers />
                <Agenda />
                <WhyAttend />
                <Venue />
                <Partners />
                <Exhibition />
                <FAQ />
            </div>
        </>
    )
}