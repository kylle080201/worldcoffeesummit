"use client"
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
import ImageCarousel from "../../components/ImageCarousel";
import Testimonials from "../../components/LoopedTestimonials";
import Speakers2024 from "../../components/2024Speakers";
import KeyThemes from "../../components/KeyThemes";
import Attendees2023 from "../../components/2023Attendees";
import WhoYoullMeet from "../../components/WhoYoullMeet";
import WhoIsInTheRoom  from "../../components/WholsInTheRoom";
import Confirmedspeakers from "../../components/Confirmedspeakers";


export default function HomePage() {
    return (
        <>
            <div>
                <Overview />
                <WhoIsInTheRoom />



                <WhoYoullMeet />

                {/* <SpeakerSlider /> */}
                {/* <ImageCarousel /> */}
                <Testimonials />
                {/* <Attendees2023 /> */}
                <SummitInTheNews />
                <WhyAttend />
                {/* <Venue /> */}
                <Partners />
            </div>
        </>
    )
}