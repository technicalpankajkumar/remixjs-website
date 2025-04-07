import { ShoppingCart } from "lucide-react"
import SoftwareCard from "./SoftwareCard"
import IndustrySectionHeader from "./IndustryHeroSection"
import { ecommerceIndustry } from "~/constants"

export default function EcommerceSection() {

  
    return (
      <section id="ecommerce" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="ecommerce"
            title="E-commerce Software Solutions"
            description="Driving online retail success with powerful software for product management, sales, and customer engagement."
            icon={<ShoppingCart className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {ecommerceIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<ShoppingCart className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }