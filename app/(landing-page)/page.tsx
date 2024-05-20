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

export default function HomePage() {
    return (
        <>
            <div>
                <Overview />
                <SpeakerSlider />
                <ImageCarousel />
                <Testimonials />
                <SummitInTheNews />
                <WhyAttend />
                <Venue />
                <Partners />
                <FAQ />
            </div>
        </>
    )
}