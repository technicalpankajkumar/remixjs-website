import { Dumbbell } from "lucide-react"
import IndustrySectionHeader from "./IndustrySectionHeader"
import SoftwareCard from "./SoftwareCard"
import { fitnessIndustry } from "~/constants"

export default function FitnessSection() {
   
  
    return (
      <section id="fitness" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="fitness"
            title="Fitness Software Solutions"
            description="Powering fitness businesses and personal wellness with technology that enhances training, tracking, and client engagement."
            icon={<Dumbbell className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {fitnessIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Dumbbell className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }