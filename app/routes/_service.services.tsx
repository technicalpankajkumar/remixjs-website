import { Link, Outlet, useLocation } from "@remix-run/react";
import { CheckSquare, ChevronRight, Globe, Link2, Server, Smartphone } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"
import { Button } from "~/components/ui/button";

const Index = () => {
    const location = useLocation()
    const [activeService, setActiveService] = useState("web");

    const services = [
        {
            id: "web",
            title: "Web Applications",
            description: "Develop dynamic web-based applications to reach a global audience.",
            icon: <Globe className="h-6 w-6" />,
        },
        {
            id: "mobile",
            title: "Mobile Apps",
            description: "Create native and cross-platform mobile applications for iOS and Android.",
            icon: <Smartphone className="h-6 w-6" />,
        },
        {
            id: "enterprise",
            title: "Enterprise Software",
            description: "Build robust enterprise solutions that scale with your business needs.",
            icon: <Server className="h-6 w-6" />,
        },
        {
            id: "api",
            title: "API Integration",
            description: "Connect your systems and applications for seamless data flow and functionality.",
            icon: <Link2 className="h-6 w-6" />,
        },
    ]


    if(location.pathname != "/services"){
        return (<>
        <Outlet/>
        <div className="container mx-auto px-4 mt-4">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden" >
                    <div 
                       className="absolute inset-0 z-0 opacity-40 bg-cover bg-center object-bottom" 
                       style={{ backgroundImage: `url('/assets/customerservice1.webp')`,backgroundPosition:"top"}}>
                    </div>
                    <div className="relative z-10 p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Book Demo For Custom Applications</h2>
                        <div className="h-1 w-24 bg-red-500 mb-4"></div>
                        <p className="text-gray-300 text-lg max-w-3xl">
                            We specialize in delivering innovative automation solutions tailored to your unique needs. Our expert team
                            leverages cutting-edge technologies to automate repetitive tasks, optimize workflows, and drive digital
                            transformation.
                        </p>
                        <Button asChild className="bg-red-600 hover:bg-red-600 text-white font-medium px-8 py-2 md:py-2 h-auto mt-2">
                            <Link to="/contactus">Book Demo</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>)
    }
    return (<>
        {/* hero section start here */}
        <section className="py-12 md:py-18 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="h-1 w-12 bg-red-500 mr-4"></div>
                            <p className="text-slate-700 text-lg">Our Services</p>
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-slate-800 mb-6">
                            Power Your Business With Our Custom Applications
                        </h1>

                        <p className="text-slate-600 text-lg mb-8">
                            In today's competitive landscape, businesses need innovative solutions to stay ahead. Custom applications,
                            tailored to your specific needs, can revolutionize your operations and drive growth.
                        </p>

                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-2 md:py-3 h-auto">
                            <Link to="#contact">SPEAK TO OUR EXPERTS</Link>
                        </Button>
                    </div>

                    <div className="relative p-4">
                        <img
                            src="/assets/customsoftware.png"
                            alt="Custom Applications Services"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">
                <div className="relative p-4">
                        <img
                            src="/assets/saasimg.jpg"
                            alt="Custom Applications Services"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="h-1 w-12 bg-red-500 mr-4"></div>
                            <p className="text-slate-700 text-lg">Our Services</p>
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-slate-800 mb-6">
                            Power Your Business With Our Custom Applications
                        </h1>

                        <p className="text-slate-600 text-lg mb-8">
                            In today's competitive landscape, businesses need innovative solutions to stay ahead. Custom applications,
                            tailored to your specific needs, can revolutionize your operations and drive growth.
                        </p>

                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-2 md:py-3 h-auto">
                            <Link to="#contact">SPEAK TO OUR EXPERTS</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        {/* hero section end here */}
        {/* Service Offering Section start */}
        <section className="relative bg-slate-800 py-12 md:py-18 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center"></div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Service Offering</h2>
                        <div className="h-1 w-16 bg-red-500 mb-6"></div>
                        <p className="text-gray-300 text-lg mb-8">
                            Our application services help you achieve your business goals. We design and develop custom applications
                            that streamline operations, improve decision-making, and enhance customer experiences.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Desktop view */}
                        <div className="hidden md:block">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className={`flex items-center justify-between p-4 border-b cursor-pointer transition-colors ${activeService === service.id ? "bg-gray-50" : ""
                                        }`}
                                    onClick={() => setActiveService(service.id)}
                                >
                                    <div className="flex items-center">
                                        <div className={`mr-3 text-slate-700 ${activeService === service.id ? "text-red-500" : ""}`}>
                                            {service.icon}
                                        </div>
                                        <h3 className={`font-medium ${activeService === service.id ? "text-red-500" : "text-slate-800"}`}>
                                            {service.title}
                                        </h3>
                                    </div>
                                    <ChevronRight
                                        className={`h-5 w-5 transition-transform ${activeService === service.id ? "rotate-90 text-red-500" : "text-slate-400"
                                            }`}
                                    />
                                </div>
                            ))}

                            <div className="p-6">{services.find((s) => s.id === activeService)?.description}</div>
                        </div>

                        {/* Mobile view */}
                        <Accordion type="single" collapsible className="md:hidden">
                            {services.map((service) => (
                                <AccordionItem key={service.id} value={service.id}>
                                    <AccordionTrigger className="px-4 py-3">
                                        <div className="flex items-center">
                                            <div className="mr-3 text-slate-700">{service.icon}</div>
                                            <span className="text-slate-950">{service.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4 pb-4 pt-1 text-slate-950">{service?.description}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
        {/* Service Offering Section end */}

    </>)
}

export default Index;