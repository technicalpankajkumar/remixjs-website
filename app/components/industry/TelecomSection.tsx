import { Phone } from "lucide-react"
import IndustrySectionHeader from "./IndustryHeroSection"
import SoftwareCard from "./SoftwareCard"

export default function TelecomSection() {
    const solutions = [
      {
        title: "Billing and Revenue Management",
        description: "System for managing telecom service billing, revenue collection, and subscription management.",
        features: [
          "Usage-based billing and rating",
          "Subscription and plan management",
          "Payment processing and collections",
          "Revenue assurance and fraud detection",
          "Billing cycle management",
          "Customer self-service billing portal",
        ],
      },
      {
        title: "Network Management System",
        description: "Platform for monitoring, managing, and optimizing telecommunications network infrastructure.",
        features: [
          "Network performance monitoring",
          "Fault detection and management",
          "Configuration and change management",
          "Capacity planning and optimization",
          "Security monitoring and management",
          "Service quality monitoring",
        ],
      },
      {
        title: "Customer Service Platform",
        description:
          "Omnichannel customer service solution for telecom providers to manage customer interactions and support.",
        features: [
          "Customer self-service portal",
          "Trouble ticket management",
          "Service activation and provisioning",
          "Customer experience analytics",
          "Knowledge base and FAQ management",
          "Chatbot and AI-powered support",
        ],
      },
    ]
  
    return (
      <section id="telecom" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="telecom"
            title="Telecommunication Software Solutions"
            description="Enabling communication service providers with software for network management, billing, and customer service."
            icon={<Phone className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {solutions.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Phone className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }