import { Activity } from "lucide-react"
import IndustrySectionHeader from "./IndustrySectionHeader"
import SoftwareCard from "./SoftwareCard"

export default function HealthSection() {
    const solutions = [
      {
        title: "Hospital Management System",
        description:
          "Comprehensive solution for hospitals to manage patient care, administrative tasks, and operational workflows.",
        features: [
          "Electronic Medical Records (EMR) management",
          "Patient appointment scheduling and reminders",
          "Billing and insurance claim processing",
          "Pharmacy and inventory management",
          "Laboratory information system integration",
          "Staff scheduling and management",
        ],
      },
      {
        title: "Telemedicine Platform",
        description:
          "Virtual healthcare delivery platform connecting patients with healthcare providers for remote consultations.",
        features: [
          "Secure video consultations with end-to-end encryption",
          "Digital prescription generation and delivery",
          "Patient health monitoring and data sharing",
          "Integration with wearable health devices",
          "Appointment scheduling and payment processing",
          "Medical record access and sharing",
        ],
      },
      {
        title: "Clinical Decision Support System",
        description:
          "AI-powered system that assists healthcare providers in making informed clinical decisions based on patient data.",
        features: [
          "Diagnostic assistance with symptom analysis",
          "Treatment recommendation based on clinical guidelines",
          "Drug interaction and allergy alerts",
          "Predictive analytics for patient outcomes",
          "Evidence-based medicine integration",
          "Continuous learning from new medical research",
        ],
      },
    ]
  
    return (
      <section id="health" className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <IndustrySectionHeader
            id="health"
            title="Healthcare Software Solutions"
            description="Empowering healthcare providers with advanced software to improve patient care, streamline operations, and enhance medical decision-making."
            icon={<Activity className="h-10 w-10 text-primary" />}
          />
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {solutions.map((solution, index) => (
              <SoftwareCard
                key={index}
                title={solution.title}
                icon={<Activity className="h-8 w-8 text-primary" />}
                description={solution.description}
                features={solution.features}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }