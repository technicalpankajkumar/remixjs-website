
import { Activity } from "lucide-react";
import IndustryHeroSection from "~/components/industry/IndustryHeroSection";
import SoftwareCard from "~/components/industry/SoftwareCard";
import { healthIndustory } from "~/constants";



export default function Index(){

    return(<>
    <section id="health" className="w-full py-6 md:py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustryHeroSection
            id="health"
            title="Health Care Software Solutions"
            description="Empowering healthcare providers with advanced software to improve patient care, streamline operations, and enhance medical decision-making."
            descriptionList={healthIndustory}
            imgSrc={"/assets/svg/hospital.svg"}
            icon={<Activity className="h-6 w-6 text-primary" />}
          />
  
          <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {healthIndustory.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Activity className="h-5 w-5 text-primary" />}
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