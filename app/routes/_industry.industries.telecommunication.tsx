
import { Phone } from "lucide-react";
import IndustryHeroSection from "~/components/industry/IndustryHeroSection";
import SoftwareCard from "~/components/industry/SoftwareCard";
import { telecomIndustry } from "~/constants";

export default function Index(){

    return(<>
    <section id="telecommunication" className="w-full py-6 md:py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustryHeroSection
            id="telecommunication"
            title="Telecommunication Software Solutions"
            description="Enabling communication service providers with software for network management, billing, and customer service."
            descriptionList={telecomIndustry}
            imgSrc={"/assets/svg/telecom_customer.svg"}
            icon={<Phone className="h-6 w-6 text-primary" />}
          />
  
          <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {telecomIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Phone className="h-5 w-5 text-primary" />}
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