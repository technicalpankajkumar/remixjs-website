
import { ShoppingCart } from "lucide-react";
import IndustryHeroSection from "~/components/industry/IndustryHeroSection";
import SoftwareCard from "~/components/industry/SoftwareCard";
import { ecommerceIndustry } from "~/constants";



export default function Index(){

    return(<>
    <section id="ecommerce" className="w-full py-6 md:py-10">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustryHeroSection
            id="ecommerce"
            title="E-Commerce Software Solutions"
            description="Driving online retail success with powerful software for product management, sales, and customer engagement."
            descriptionList={ecommerceIndustry}
            imgSrc={"/assets/svg/ecom_shopping.svg"}
            icon={<ShoppingCart className="h-6 w-6 text-primary" />}
          />
  
          <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {ecommerceIndustry.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<ShoppingCart className="h-5 w-5 text-primary" />}
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