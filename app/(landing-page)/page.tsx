"use client"
import FAQ from "../../components/FAQ";
import Venue from "../../components/Venue";
import Overview from "../../components/Overview";
import Speakers from "../../components/Speakers";
import Exhibition from "../../components/Exhibition";
import Agenda from "../../components/Agenda";
import SpeakerSlider from "../../components/LoopedSpeakers";
import SummitInTheNews from "../../components/SummitInTheNews";
import ImageCarousel from "../../components/ImageCarousel";
import Testimonials from "../../components/LoopedTestimonials";
import Speakers2024 from "../../components/2024Speakers";
import KeyThemes from "../../components/KeyThemes";
import Attendees2023 from "../../components/2023Attendees";
import WhoIsInTheRoom, { WhoAttends } from "../../components/WholsInTheRoom";
import WcisInAction from "../../components/WcisInAction";
import Confirmedspeakers from "../../components/Confirmedspeakers";
import Speakers2026 from "../../components/Speakers2026";
import Link from "next/link";
import { HomePageLayout, HomeSection } from "../../components/HomeSection";


export default function HomePage() {
    return (
        <HomePageLayout>
            <Overview />
            <HomeSection>
                <Speakers2026 />
            </HomeSection>
            <HomeSection>
                <KeyThemes />
            </HomeSection>
            <HomeSection><WhoIsInTheRoom /></HomeSection>
            <HomeSection><WhoAttends /></HomeSection>
            <HomeSection><Testimonials /></HomeSection>
            {/* <Attendees2023 /> */}
            <HomeSection><SummitInTheNews /></HomeSection>
            {/* <Venue /> */}
        </HomePageLayout>
    )
}
