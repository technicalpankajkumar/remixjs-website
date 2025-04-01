
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Button } from "~/components/ui/button"

import { Building2, GraduationCap, HeartPulse, ShoppingCart, BarChart3, Users } from "lucide-react"
import { Link } from "@remix-run/react"

export default function SaasSolutions() {
  return (
    <section id="solutions" className="py-10 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Industry-Specific SaaS Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful software tailored to your industry's unique needs, delivered as a service.
          </p>
        </div>

        <Tabs defaultValue="erp" className="w-full">
          {/* <div className="flex justify-center mb-4"> */}
            <TabsList className="flex flex-wrap gap-4 justify-around">
              <TabsTrigger value="erp" className="flex gap-2 items-center py-1 px-4">
                <Building2 className="h-5 w-5 mb-1" />
                <span>ERP</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="flex gap-2 items-center py-1 px-4">
                <GraduationCap className="h-5 w-5 mb-1" />
                <span>Education</span>
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex gap-2 items-center py-1 px-4">
                <HeartPulse className="h-5 w-5 mb-1" />
                <span>Healthcare</span>
              </TabsTrigger>
              <TabsTrigger value="ecommerce" className="flex gap-2 items-center py-1 px-4">
                <ShoppingCart className="h-5 w-5 mb-1" />
                <span>E-Commerce</span>
              </TabsTrigger>
              <TabsTrigger value="transpotation" className="flex gap-2 items-center py-1 px-4">
                <Users className="h-5 w-5 mb-1" />
                <span>Transpotation</span>
              </TabsTrigger>
              <TabsTrigger value="fitness" className="flex gap-2 items-center py-1 px-4">
                <BarChart3 className="h-5 w-5 mb-1" />
                <span>Fitness</span>
              </TabsTrigger>
            </TabsList>
          {/* </div> */}

          <TabsContent value="erp" className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Resource Planning (ERP)</h3>
                <p className="text-slate-600 mb-6">
                  Our cloud-based ERP solution integrates all core business processes into a single system. Manage
                  finance, HR, inventory, supply chain, and more from one unified platform.
                </p>
                <ul className="space-y-3 mb-8 text-gray-900">
                  {[
                    "Comprehensive financial management",
                    "Inventory and supply chain optimization",
                    "Human resources and payroll integration",
                    "Production planning and scheduling",
                    "Real-time reporting and analytics",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="#pricing">View ERP Pricing</Link>
                </Button>
              </div>
              <div className="relative rounded-lg max-h-[300px] md:max-h-[400px] border-2 overflow-hidden shadow-xl">
                <img
                  src="/assets/erp.png"
                  alt="ERP Dashboard"
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Education Management System</h3>
                <p className="text-slate-600 mb-6">
                  A comprehensive platform for educational institutions to manage admissions, student information,
                  course scheduling, grading, and communication with students and parents.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Student information management",
                    "Course and curriculum planning",
                    "Attendance and grade tracking",
                    "Online learning and assessment tools",
                    "Parent-teacher communication portal",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="#pricing">View Education Pricing</Link>
                </Button>
              </div>
              <div className="relative border-2 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/education.png"
                  alt="Education Platform"
                  
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="healthcare" className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Hospital Management System (HMS)</h3>
                <p className="text-slate-600 mb-6">
                  A comprehensive healthcare solution that streamlines hospital operations, patient care, and
                  administrative tasks while ensuring compliance with healthcare regulations.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Electronic Health Records (EHR)",
                    "Patient registration and scheduling",
                    "Billing and insurance management",
                    "Pharmacy and inventory control",
                    "Laboratory information system",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="#pricing">View Healthcare Pricing</Link>
                </Button>
              </div>
              <div className="relative max-h-[300px] md:max-h-[400px] border-2 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/hms.png"
                  alt="Hospital Management System"
                
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ecommerce" className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">E-Commerce Platform</h3>
                <p className="text-slate-600 mb-6">
                  A complete e-commerce solution that helps businesses sell products online with powerful inventory
                  management, order processing, and customer engagement tools.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Product catalog and inventory management",
                    "Order processing and fulfillment",
                    "Payment gateway integration",
                    "Customer relationship management",
                    "Marketing and promotion tools",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="#pricing">View E-Commerce Pricing</Link>
                </Button>
              </div>
              <div className="relative max-h-[300px] md:max-h-[400px] border-2 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/retail.png"
                  alt="E-Commerce Platform"
                  
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="transpotation" className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Customer Relationship Management (CRM)</h3>
                <p className="text-slate-600 mb-6">
                  A powerful CRM solution that helps businesses manage customer interactions, sales pipelines, marketing
                  campaigns, and customer service from a single platform.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Contact and lead management",
                    "Sales pipeline and opportunity tracking",
                    "Marketing automation",
                    "Customer service and support ticketing",
                    "Analytics and reporting",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="#pricing">View CRM Pricing</Link>
                </Button>
              </div>
              <div className="relative max-h-[300px] md:max-h-[400px] border-2 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/transpotation.png"
                  alt="CRM Dashboard"
                  
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fitness" className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Fitness Analytics</h3>
                <p className="text-slate-600 mb-6">
                  Transform your data into actionable insights with our powerful analytics platform. Visualize trends,
                  create custom reports, and make data-driven decisions.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Interactive dashboards and visualizations",
                    "Custom report generation",
                    "Data integration from multiple sources",
                    "Predictive analytics and forecasting",
                    "Automated alerts and notifications",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="#pricing">View Analytics Pricing</Link>
                </Button>
              </div>
              <div className="relative max-h-[300px] md:max-h-[400px] border-2 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/fitnessdashboard.png"
                  alt="Analytics Dashboard"
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

