import { Outlet } from "@remix-run/react";
import React from "react";
import { AboutSection } from "~/components/AboutSection";
import CommonHeader from "~/components/CommonHeader";
import { ExperienceSection } from "~/components/ExperienceSection";
import { FurtureVisionSection } from "~/components/FurtureVisionSection";


const Index =() => {
    return <>
        <CommonHeader />
        <AboutSection/>
        <ExperienceSection/>
        <Outlet/>
        <FurtureVisionSection/>
    </>
}

export default Index;