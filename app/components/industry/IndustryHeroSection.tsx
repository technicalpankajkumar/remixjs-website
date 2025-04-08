import { BookOpen, ChevronsRight } from "lucide-react";
import { Separator } from "../ui/separator";

export default function IndustryHeroSection({ id, title,description, descriptionList, icon , imgSrc}: any) {
    return (
        <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center px-4 mb-4">
            <div>
                <div className="flex items-center ">
                    <div className="mr-2">{icon || <BookOpen size={18} />}</div>
                    <p className="text-slate-900 text-2xl font-bold">{title || "Education Software Solutions"}</p>
                </div>
                <div className="mb-2">
                    <p className="text-slate-800">"{description}"</p>
                </div>
                {
                    descriptionList?.map((res:any )=> <div key={res.title}>
                        <h4 className="text-base  text-gray-600 mb-1 font-medium flex gap-1 items-center">
                        <ChevronsRight /> {res.title}
                        </h4>
                        <p className="text-slate-600 text-sm mb-2 ps-7">
                            {res.description}
                        </p></div>
                    )}
                <div className="flex gap-2 pt-2">
                </div>
            </div>
            <div className="p-4  w-full flex items-center justify-center">
                <img
                    src={imgSrc || "/assets/svg/education_educator.svg"}
                    alt="Custom Applications Services"
                    className="max-w-96 object-cover rounded-lg" // Adjust width and height here
                />
            </div>
        </div>
        <Separator className="my-1 mt-2 bg-slate-700 h-1" />
        <Separator className="my-1 bg-blue-700 h-1" />
        
    </div>
    )
}
