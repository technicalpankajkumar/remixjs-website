import { Truck } from "lucide-react"
import IndustrySectionHeader from "./IndustrySectionHeader"
import SoftwareCard from "./SoftwareCard"

export default function TransportationSection() {
    const solutions = [
      {
        title: "Fleet Management System",
        description:
          "Comprehensive solution for managing vehicle fleets, drivers, maintenance, and logistics operations.",
        features: [
          "Real-time vehicle tracking and telematics",
          "Driver management and compliance",
          "Fuel monitoring and expense tracking",
          "Preventive maintenance scheduling",
          "Route optimization and dispatch",
          "Safety monitoring and incident reporting",
        ],
      },
      {
        title: "Logistics Management System",
        description: "End-to-end solution for managing the movement of goods, warehousing, and supply chain operations.",
        features: [
          "Route optimization and planning",
          "Shipment tracking and delivery management",
          "Warehouse management and inventory control",
          "Cross-docking and freight forwarding",
          "Carrier management and rate comparison",
          "International shipping documentation",
        ],
      },
      {
        title: "Public Transport Management",
        description:
          "System for managing public transportation networks, schedules, ticketing, and passenger information.",
        features: [
          "Route and schedule management",
          "Electronic ticketing and fare collection",
          "Real-time passenger information systems",
          "Transit analytics and performance monitoring",
          "Fleet maintenance and management",
          "Driver scheduling and management",
        ],
      },
    ]
  
    return (
      <section id="transportation" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="transportation"
            title="Transportation Software Solutions"
            description="Optimizing movement of people and goods with intelligent software for fleet management, logistics, and public transit."
            icon={<Truck className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {solutions.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Truck className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }