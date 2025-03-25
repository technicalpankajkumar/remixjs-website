import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"


const Index = () => {

    const faqs = [
        {
            question: "What is the typical development timeline for a custom application?",
            answer:
                "Development timelines vary based on the complexity and scope of the project. Simple applications may take 2-3 months, while more complex enterprise solutions can take 6-12 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
        },
        {
            question: "How do you ensure the security of custom applications?",
            answer:
                "Security is a top priority in all our development projects. We implement industry best practices including secure coding standards, encryption for sensitive data, regular security audits, penetration testing, and compliance with relevant regulations like GDPR or HIPAA depending on your industry.",
        },
        {
            question: "Can you provide examples of custom applications you've developed?",
            answer:
                "We've developed a wide range of custom applications across various industries, including healthcare management systems, e-commerce platforms with custom inventory management, financial services applications with complex reporting, and manufacturing process automation systems. We'd be happy to share relevant case studies during our consultation.",
        },
        {
            question: "Do you provide ongoing support after the application is launched?",
            answer:
                "Yes, we offer comprehensive support and maintenance packages to ensure your application continues to run smoothly. Our support includes bug fixes, security updates, performance optimization, and feature enhancements. We can tailor a support plan to meet your specific needs and budget.",
        },
        {
            question: "What technologies do you use for custom application development?",
            answer:
                "We work with a wide range of modern technologies based on project requirements. For web applications, we commonly use React, Angular, or Vue.js for frontend and Node.js, Python, or .NET for backend. For mobile, we develop native apps using Swift/Kotlin or cross-platform solutions with React Native or Flutter. Our technology recommendations are always based on your specific needs and long-term goals.",
        },
    ]

    return (<>
        {/* automation hero section start here*/}
        <section className="py-12 md:py-18 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                            Accelerate Your Business With Automation
                        </h2>
                        <p className="text-slate-600 mb-4">
                            Our expert team offers a range of automation services, including robotic process automation (RPA),
                            artificial intelligence (AI), and machine learning.
                        </p>
                        <p className="text-slate-600 mb-8">
                            We can help you automate workflows, data entry, and other time-consuming tasks, freeing up your team to
                            focus on higher-value activities.
                        </p>
                        <Button asChild className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-2 md:py-3 h-auto">
                            <Link to="#contact">SPEAK TO AN EXPERTS</Link>
                        </Button>
                    </div>

                    <div className="relative">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D12AQHaPsfnyVjbGw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690809574313?e=2147483647&v=beta&t=a9uAL7eSdtmrzlzYom1AozcKMMds5PWyh25pt8Oy4Ko"
                            alt="Business Automation"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-24">
                <div className="relative bg-slate-800 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-30 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"></div>
                    <div className="relative z-10 p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Automation Services</h2>
                        <div className="h-1 w-16 bg-red-500 mb-6"></div>
                        <p className="text-gray-300 text-lg max-w-3xl">
                            We specialize in delivering innovative automation solutions tailored to your unique needs. Our expert team
                            leverages cutting-edge technologies to automate repetitive tasks, optimize workflows, and drive digital
                            transformation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* automation hero section end here */}

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