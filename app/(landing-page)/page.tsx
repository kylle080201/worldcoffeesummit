import FAQ from "../../components/FAQ";
import Venue from "../../components/Venue";
import Overview from "../../components/Overview";
import Speakers from "../../components/Speakers";
import Exhibition from "../../components/Exhibition";
import Partners from "../../components/Partners";
import WhyAttend from "../../components/WhyAttend";
import Agenda from "../../components/Agenda";
import SpeakerSlider from "../../components/LoopedSpeakers";
import SummitInTheNews from "../../components/SummitInTheNews";

export default function HomePage() {
    return (
        <>
            <div>
                <Overview />
                <SpeakerSlider />
                {/* <Agenda /> */}
                <WhyAttend />
                <Venue />
                <Partners />
                {/* <Exhibition /> */}
                <SummitInTheNews />
                <FAQ />
            </div>
        </>
    )
}