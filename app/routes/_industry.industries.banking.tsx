
import { Building2 } from "lucide-react";
import IndustryHeroSection from "~/components/industry/IndustryHeroSection";
import SoftwareCard from "~/components/industry/SoftwareCard";
import { bankAndFinanceIndustry } from "~/constants";

export default function Index(){

    return(<>
    <section id="banking" className="w-full py-6 md:py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustryHeroSection
            id="banking"
            title="Banking & Finance Software Solutions"
            description="Securing and optimizing financial operations with robust software for banks, credit unions, and financial institutions."
            descriptionList={bankAndFinanceIndustry}
            imgSrc={"/assets/svg/banking_md.svg"}
            icon={<Building2 className="h-6 w-6 text-primary" />}
          />
  
          <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {bankAndFinanceIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Building2 className="h-5 w-5 text-primary" />}
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