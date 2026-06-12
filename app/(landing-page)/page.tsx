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
            <HomeSection className="bg-gray-100">
                <Speakers2026 />
                <div className="-mt-12 mb-12 w-full flex justify-center sm:mb-16">
                    <Link
                        href="/speakers#speakers-2025"
                        className="rounded-lg bg-lime-700 px-6 py-3 text-lg font-bold text-white transition-colors duration-300 hover:bg-lime-800"
                    >
                        2025 SPEAKERS
                    </Link>
                </div>
            </HomeSection>
            <HomeSection className="bg-white">
                <KeyThemes />
            </HomeSection>
            <HomeSection className="bg-gray-100"><WhoIsInTheRoom /></HomeSection>
            <HomeSection className="bg-white"><WhoAttends /></HomeSection>
            <HomeSection className="bg-gray-100"><Testimonials /></HomeSection>
            {/* <Attendees2023 /> */}
            <HomeSection className="bg-white"><SummitInTheNews /></HomeSection>
            {/* <Venue /> */}
        </HomePageLayout>
    )
}
