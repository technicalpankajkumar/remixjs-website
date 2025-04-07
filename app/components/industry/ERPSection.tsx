import { LayoutDashboard } from "lucide-react"
import IndustrySectionHeader from "./IndustryHeroSection"
import SoftwareCard from "./SoftwareCard"
import { erpIndustry } from "~/constants"

export default function ErpSection() {
    
    return (
      <section id="erp" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="erp"
            title="ERP Software Solutions"
            description="Streamlining business operations with integrated software that connects all departments and functions."
            icon={<LayoutDashboard className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {erpIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<LayoutDashboard className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }