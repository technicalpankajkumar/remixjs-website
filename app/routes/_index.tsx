import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Outlet } from "@remix-run/react";
import { HeroSection } from "~/components/HeroSection";
import { VisionSection } from "~/components/OurVision";
import { ServicesSection } from "~/components/OurService";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
       <HeroSection/>
       <VisionSection/>
       <ServicesSection/>
    </div>
  );
}
