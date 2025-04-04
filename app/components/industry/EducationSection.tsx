import { BookOpen } from "lucide-react"
import IndustrySectionHeader from "./IndustrySectionHeader"
import SoftwareCard from "./SoftwareCard"
import { educationIndustory } from "~/constants"

export default function EducationSection() {
    
  
    return (
      <section id="education" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="education"
            title="Education Software Solutions"
            description="Transforming the learning experience with innovative software for schools, universities, and educational institutions."
            icon={<BookOpen className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {educationIndustory.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }