import { Outlet, useLocation } from "@remix-run/react";
import { Activity, ArrowRightSquare, BookOpen, Dumbbell, Link, ShoppingCart } from "lucide-react";
import CommonHeader from "~/components/CommonHeader";
import BankingSection from "~/components/industry/BankingSection";
import EcommerceSection from "~/components/industry/EcommerceSection";
import EducationSection from "~/components/industry/EducationSection";
import ErpSection from "~/components/industry/ERPSection";
import FitnessSection from "~/components/industry/FitnessSection";
import HealthSection from "~/components/industry/HealthSection";
import OtherIndustriesSection from "~/components/industry/OtherIndustriesSection";
import TelecomSection from "~/components/industry/TelecomSection";
import TransportationSection from "~/components/industry/TransportationSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import { Button } from "~/components/ui/button";
import { bankAndFinanceIndustry, educationIndustory, erpIndustry, faqs, fitnessIndustry, healthIndustory } from "~/constants";

interface ServiceData {
    description: string;
}

interface Services {
    [key: string]: ServiceData;
}


const Index = () => {
    const location = useLocation();

    if(location.pathname != "/industries"){
        return (<Outlet/>)
    }

    return (<>
        <CommonHeader title={'Our Industry Area'} description={'Industry where we work.'} />
       <Outlet/>
        {/* <EducationSection /> */}
        {/* <HealthSection /> */}
        {/* <FitnessSection /> */}
        {/* <BankingSection /> */}
        {/* <EcommerceSection /> */}
        {/* <ErpSection /> */}
        {/* <TransportationSection /> */}
        {/* <TelecomSection /> */}
        {/* <OtherIndustriesSection /> */}
        </>)

    }

export default Index;