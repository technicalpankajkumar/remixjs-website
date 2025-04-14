import { Separator } from "@radix-ui/react-separator";
import Heading from "./Heading";
import { FC, ReactNode } from "react";
import Paragraph from "./Paragraph";

interface CommanSectionProps {
    tag: string,
    heading: string,
    description: string,
    children?: ReactNode,
    imgSrc?: string,
    newNode?:ReactNode,
    className?:string,
}

const CommanSection: FC<CommanSectionProps> = ({ tag, heading, description, children, imgSrc,newNode,className }) => {

    return (<section className={`py-10 md:py-16 ${className || ""}`}>
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-content-between">
                <div>
                    {/* Section header */}
                    <div className="mb-8">
                        {tag && <div className="flex items-baseline gap-2">
                            <div>
                                <Separator className="my-0 rounded-full mt-2 bg-slate-700 h-1 w-10" />
                                <Separator className="mt-1 rounded-full bg-blue-700 h-1 w-10" />
                            </div>
                            <Heading level={7} className="">{tag}</Heading>
                        </div>}
                        <Heading level={3} className="">{heading}</Heading>

                        <Paragraph level={2} className="ps-2">
                            {description}
                        </Paragraph>

                        <div className="flex flex-wrap gap-4">
                            {children}
                        </div>
                    </div>
                </div>

               {
                 newNode ? <div className=" hidden lg:block relative p-4">{newNode}</div>  :
                <div className="flex justify-end relative">
                    <img
                        src={imgSrc}
                        alt={heading}
                        className="object-cover md:max-w-[500px]"
                    />
                </div>
                }
            </div>
        </div>
    </section>)
}

export default CommanSection;