import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Outlet } from "@remix-run/react";
import { HeroSection } from "~/components/HeroSection";
import { VisionSection } from "~/components/OurVision";
import { ServicesSection } from "~/components/OurService";
import { StrategySection } from "~/components/OurStrategySection";
import { ClientTestimonialSection } from "~/components/ClientTestimonialSection";
import { TechnologySection } from "~/components/TechnologySection";
import PartnerSection from "~/components/PartnerSection";
export const meta: MetaFunction = () => {
  return [
    { title: "home" },
    { name: "YGTWTech Technology", content: "YGTW  Technology Private Limited" },
  ];
};

export default function Index() {
  return (
    <div>
       <HeroSection/>
       <VisionSection/>
       <StrategySection/>
       <ServicesSection/>
       <TechnologySection/>
       <PartnerSection/>
       <ClientTestimonialSection/>
    </div>
  );
}
