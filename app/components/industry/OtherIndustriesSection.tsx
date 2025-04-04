import { Layers } from "lucide-react"
import IndustrySectionHeader from "./IndustrySectionHeader"
import SoftwareCard from "./SoftwareCard"

export default function OtherIndustriesSection() {
    const solutions = [
      {
        title: "Real Estate Management",
        description: "Software for managing property listings, tenant relationships, and real estate operations.",
        features: [
          "Property listing and marketing",
          "Tenant and lease management",
          "Maintenance request tracking",
          "Financial reporting and analytics",
          "Document management and e-signatures",
          "Property inspection and reporting",
        ],
      },
      {
        title: "Hospitality Management",
        description:
          "Comprehensive solution for hotels and resorts to manage reservations, guest services, and operations.",
        features: [
          "Reservation and booking management",
          "Front desk and guest services",
          "Housekeeping and maintenance",
          "Revenue management and forecasting",
          "Point of sale integration",
          "Guest relationship management",
        ],
      },
      {
        title: "Agriculture Management",
        description: "Software for farm management, crop planning, livestock tracking, and agricultural operations.",
        features: [
          "Crop planning and field management",
          "Livestock tracking and health monitoring",
          "Equipment maintenance and scheduling",
          "Weather data integration and forecasting",
          "Supply chain and inventory management",
          "Financial management and reporting",
        ],
      },
    ]
  
    return (
      <section id="other" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="other"
            title="Other Industry Solutions"
            description="Specialized software solutions for diverse industries including real estate, hospitality, and agriculture."
            icon={<Layers className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {solutions.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Layers className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }