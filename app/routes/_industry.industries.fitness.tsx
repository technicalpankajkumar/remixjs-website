import { Dumbbell } from "lucide-react";
import IndustryHeroSection from "~/components/industry/IndustryHeroSection";
import SoftwareCard from "~/components/industry/SoftwareCard";
import { fitnessIndustry } from "~/constants";



export default function Index(){

    return(<>
    <section id="fitness" className="w-full py-6 md:py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustryHeroSection
            id="fitness"
            title="Fitness Software Solutions"
            description="Powering fitness businesses and personal wellness with technology that enhances training, tracking, and client engagement."
            descriptionList={fitnessIndustry}
            imgSrc={"/assets/svg/fitness_yoga.svg"}
            icon={<Dumbbell className="h-6 w-6 text-primary" />}
          />
  
          <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {fitnessIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Dumbbell className="h-5 w-5 text-primary" />}
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