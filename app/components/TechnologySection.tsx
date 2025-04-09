import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Heading from "./selfComponent/Heading";
import CommanSection from "./selfComponent/CommanSection";

export function TechnologySection() {
  return (
    <>
      <CommanSection
        tag="Technology"
        heading="Investing In Technology"
        description=" Investing in cutting-edge technology is at the heart of what we do. We harness the latest innovations to
          deliver solutions that drive your business forward. Let's build a future-proof strategy together."
        imgSrc="/assets/svg/development_language.svg"
      >
        <Button asChild className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6">
          <Link to="#solutions">Our Solutions</Link>
        </Button>

        <Button asChild variant="outline" className="border-slate-300 text-slate-800">
          <Link to="#case-studies">Case Studies</Link>
        </Button>
      </CommanSection>
    </>
  )
}

