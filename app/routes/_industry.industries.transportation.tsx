
import { Truck } from "lucide-react";
import IndustryHeroSection from "~/components/industry/IndustryHeroSection";
import SoftwareCard from "~/components/industry/SoftwareCard";
import { transportationIndustry } from "~/constants";



export default function Index(){

    return(<>
    <section id="transportation" className="w-full py-6 md:py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustryHeroSection
            id="transportation"
            title="Transportation Software Solutions"
            description="Driving online retail success with powerful software for product management, sales, and customer engagement."
            descriptionList={transportationIndustry}
            imgSrc={"/assets/svg/transportation_truck.svg"}
            icon={<Truck className="h-6 w-6 text-primary" />}
          />
  
          <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {transportationIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Truck className="h-5 w-5 text-primary" />}
                description={solution.description}
                features={solution.features}
                imgSrc={solution.imgSrc}
              />
            ))}
          </div>
        </div>
      </section>
    </>)
}