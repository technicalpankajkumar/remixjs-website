

import { Layers } from "lucide-react";
import IndustryHeroSection from "~/components/industry/IndustryHeroSection";
import SoftwareCard from "~/components/industry/SoftwareCard";
import { otherIndustry } from "~/constants";

export default function Index(){

    return(<>
    <section id="other" className="w-full py-6 md:py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustryHeroSection
            id="other"
            title="Other Industry Solutions"
            description="Specialized software solutions for diverse industries including real estate, hospitality, and agriculture."
            descriptionList={otherIndustry}
            imgSrc={"/assets/svg/other.svg"}
            icon={<Layers className="h-6 w-6 text-primary" />}
          />
  
          <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {otherIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Layers className="h-5 w-5 text-primary" />}
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