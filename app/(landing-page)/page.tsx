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
import WhoIsInTheRoom  from "../../components/WholsInTheRoom";
import Confirmedspeakers from "../../components/Confirmedspeakers";
import { HomePageLayout, HomeSection } from "../../components/HomeSection";


export default function HomePage() {
    return (
        <HomePageLayout>
            <Overview />
            <HomeSection><WhoIsInTheRoom /></HomeSection>
            {/* <SpeakerSlider /> */}
            {/* <ImageCarousel /> */}
            <HomeSection><Testimonials /></HomeSection>
            {/* <Attendees2023 /> */}
            <HomeSection><SummitInTheNews /></HomeSection>
            <HomeSection bare><WhyAttend /></HomeSection>
            <HomeSection><Partners /></HomeSection>
            {/* <Venue /> */}
        </HomePageLayout>
    )
}
