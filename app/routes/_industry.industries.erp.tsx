
import { LayoutDashboard } from "lucide-react";
import IndustryHeroSection from "~/components/industry/IndustryHeroSection";
import SoftwareCard from "~/components/industry/SoftwareCard";
import { erpIndustry } from "~/constants";

export default function Index(){

    return(<>
    <section id="erp" className="w-full py-6 md:py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustryHeroSection
            id="erp"
            title="ERP Software Solutions"
            description="Streamlining business operations with integrated software that connects all departments and functions."
            descriptionList={erpIndustry}
            imgSrc={"/assets/svg/erp_record.svg"}
            icon={<LayoutDashboard className="h-6 w-6 text-primary" />}
          />
  
          <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {erpIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<LayoutDashboard className="h-5 w-5 text-primary" />}
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