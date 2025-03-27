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
        "/services":{ description: 'Application Services'},
        "/services/customsoftware":{ description: 'Application Services'},
        "/services/saas": { description:'Automation Services' },
        "/services/supports": { description: "Support's Service" }
    }

    return (<>
        <CommonHeader title={'Our Service'} description={data[location.pathname].description} />
        <Outlet />
        {/* Faq section start here */}
        <section className="py-12 md:py-18 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">FAQ's</h2>
                        <p className="text-slate-600">Here are some frequently asked questions about Application services.</p>
                    </div>

                    <div className="lg:col-span-2">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs?.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-slate-950 text-lg font-medium">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
        {/* Faq section end here */}
    </>)
}

export default Index;