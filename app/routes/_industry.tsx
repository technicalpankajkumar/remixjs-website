import { Outlet, useLocation } from "@remix-run/react";
import CommonHeader from "~/components/CommonHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import { faqs } from "~/constants";

interface ServiceData {
    description: string;
}

interface Services {
    [key: string]: ServiceData;
}


const Index = () => {
    const location = useLocation();

    const data:Services = {
        "/industries":{ description: 'Industry where we work.'},
        "/industries/ecommerce":{ description: 'Application Services'},
        "/industries/erp": { description:'Automation Services' },
        "/industries/fitness": { description: "Support's Service" },
        "/industries/healthcare": { description: "Support's Service" },
        "/industries/others": { description: "Support's Service" },
    }

    return (<>
        <CommonHeader title={'Our Industry Area'} description={data[location.pathname].description} />
        <Outlet />
        </>)

    }

export default Index;