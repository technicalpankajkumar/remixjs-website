import { Layers } from "lucide-react"
import IndustrySectionHeader from "./IndustryHeroSection"
import SoftwareCard from "./SoftwareCard"
import { otherIndustry } from "~/constants"

export default function OtherIndustriesSection() {
   
  
    return (
      <section id="other" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="other"
            title="Other Industry Solutions"
            description="Specialized software solutions for diverse industries including real estate, hospitality, and agriculture."
            icon={<Layers className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {otherIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Layers className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }