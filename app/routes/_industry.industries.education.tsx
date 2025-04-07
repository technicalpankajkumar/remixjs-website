import { BookOpen } from "lucide-react";
import IndustryHeroSection from "~/components/industry/IndustryHeroSection";
import SoftwareCard from "~/components/industry/SoftwareCard";
import { educationIndustory } from "~/constants";



export default function Index(){

    return(<>
    <section id="education" className="w-full py-6 md:py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustryHeroSection
            id="education"
            title="Education Software Solutions"
            description="Transforming the learning experience with innovative software for schools, universities, and educational institutions."
            descriptionList={educationIndustory}
            imgSrc={"/assets/svg/education_educator.svg"}
            icon={<BookOpen className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {educationIndustory.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<BookOpen className="h-6 w-6 text-primary" />}
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