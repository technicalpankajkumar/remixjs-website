import { Building2 } from "lucide-react"
import IndustrySectionHeader from "./IndustryHeroSection"
import SoftwareCard from "./SoftwareCard"
import { bankAndFinanceIndustry } from "~/constants"

export default function BankingSection() {
   
    return (
      <section id="banking" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="banking"
            title="Banking & Finance Software Solutions"
            description="Securing and optimizing financial operations with robust software for banks, credit unions, and financial institutions."
            icon={<Building2 className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {bankAndFinanceIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Building2 className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }