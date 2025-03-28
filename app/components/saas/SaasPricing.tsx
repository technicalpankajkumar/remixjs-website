import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Switch } from "~/components/ui/switch"
import { Check, X } from "lucide-react"

export function SaasPricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const solutions = [
    {
      id: "erp",
      name: "ERP System",
      plans: [
        {
          name: "Starter",
          monthlyPrice: 99,
          annualPrice: 79,
          description: "For small businesses just getting started",
          features: [
            { name: "Financial Management", included: true },
            { name: "Inventory Management", included: true },
            { name: "Up to 5 users", included: true },
            { name: "Basic Reporting", included: true },
            { name: "Email Support", included: true },
            { name: "Advanced Analytics", included: false },
            { name: "API Access", included: false },
            { name: "Custom Integrations", included: false },
          ],
        },
        {
          name: "Professional",
          monthlyPrice: 199,
          annualPrice: 159,
          description: "For growing businesses with more complex needs",
          features: [
            { name: "Financial Management", included: true },
            { name: "Inventory Management", included: true },
            { name: "Up to 20 users", included: true },
            { name: "Advanced Reporting", included: true },
            { name: "Priority Support", included: true },
            { name: "Advanced Analytics", included: true },
            { name: "API Access", included: true },
            { name: "Custom Integrations", included: false },
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          monthlyPrice: 399,
          annualPrice: 319,
          description: "For large organizations with complex requirements",
          features: [
            { name: "Financial Management", included: true },
            { name: "Inventory Management", included: true },
            { name: "Unlimited users", included: true },
            { name: "Advanced Reporting", included: true },
            { name: "24/7 Priority Support", included: true },
            { name: "Advanced Analytics", included: true },
            { name: "API Access", included: true },
            { name: "Custom Integrations", included: true },
          ],
        },
      ],
    },
    {
      id: "education",
      name: "Education Management",
      plans: [
        {
          name: "Basic",
          monthlyPrice: 79,
          annualPrice: 63,
          description: "For small educational institutions",
          features: [
            { name: "Student Management", included: true },
            { name: "Course Management", included: true },
            { name: "Up to 500 students", included: true },
            { name: "Basic Reporting", included: true },
            { name: "Email Support", included: true },
            { name: "Learning Management", included: false },
            { name: "Parent Portal", included: false },
            { name: "API Access", included: false },
          ],
        },
        {
          name: "Standard",
          monthlyPrice: 149,
          annualPrice: 119,
          description: "For medium-sized schools and colleges",
          features: [
            { name: "Student Management", included: true },
            { name: "Course Management", included: true },
            { name: "Up to 2,000 students", included: true },
            { name: "Advanced Reporting", included: true },
            { name: "Priority Support", included: true },
            { name: "Learning Management", included: true },
            { name: "Parent Portal", included: true },
            { name: "API Access", included: false },
          ],
          popular: true,
        },
        {
          name: "Premium",
          monthlyPrice: 299,
          annualPrice: 239,
          description: "For large educational institutions",
          features: [
            { name: "Student Management", included: true },
            { name: "Course Management", included: true },
            { name: "Unlimited students", included: true },
            { name: "Advanced Reporting", included: true },
            { name: "24/7 Priority Support", included: true },
            { name: "Learning Management", included: true },
            { name: "Parent Portal", included: true },
            { name: "API Access", included: true },
          ],
        },
      ],
    },
    {
      id: "healthcare",
      name: "Hospital Management",
      plans: [
        {
          name: "Clinic",
          monthlyPrice: 149,
          annualPrice: 119,
          description: "For small clinics and medical practices",
          features: [
            { name: "Patient Records", included: true },
            { name: "Appointment Scheduling", included: true },
            { name: "Up to 5 practitioners", included: true },
            { name: "Basic Billing", included: true },
            { name: "Email Support", included: true },
            { name: "Lab Integration", included: false },
            { name: "Pharmacy Management", included: false },
            { name: "Advanced Analytics", included: false },
          ],
        },
        {
          name: "Hospital",
          monthlyPrice: 299,
          annualPrice: 239,
          description: "For mid-sized hospitals and healthcare facilities",
          features: [
            { name: "Patient Records", included: true },
            { name: "Appointment Scheduling", included: true },
            { name: "Up to 50 practitioners", included: true },
            { name: "Advanced Billing", included: true },
            { name: "Priority Support", included: true },
            { name: "Lab Integration", included: true },
            { name: "Pharmacy Management", included: true },
            { name: "Advanced Analytics", included: false },
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          monthlyPrice: 599,
          annualPrice: 479,
          description: "For large hospitals and healthcare networks",
          features: [
            { name: "Patient Records", included: true },
            { name: "Appointment Scheduling", included: true },
            { name: "Unlimited practitioners", included: true },
            { name: "Advanced Billing", included: true },
            { name: "24/7 Priority Support", included: true },
            { name: "Lab Integration", included: true },
            { name: "Pharmacy Management", included: true },
            { name: "Advanced Analytics", included: true },
          ],
        },
      ],
    },
    {
      id: "ecommerce",
      name: "E-Commerce Platform",
      plans: [
        {
          name: "Starter",
          monthlyPrice: 49,
          annualPrice: 39,
          description: "For small online stores",
          features: [
            { name: "Product Management", included: true },
            { name: "Order Processing", included: true },
            { name: "Up to 500 products", included: true },
            { name: "Basic Analytics", included: true },
            { name: "Email Support", included: true },
            { name: "Marketing Tools", included: false },
            { name: "Multi-channel Selling", included: false },
            { name: "API Access", included: false },
          ],
        },
        {
          name: "Business",
          monthlyPrice: 99,
          annualPrice: 79,
          description: "For growing online businesses",
          features: [
            { name: "Product Management", included: true },
            { name: "Order Processing", included: true },
            { name: "Up to 10,000 products", included: true },
            { name: "Advanced Analytics", included: true },
            { name: "Priority Support", included: true },
            { name: "Marketing Tools", included: true },
            { name: "Multi-channel Selling", included: true },
            { name: "API Access", included: false },
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          monthlyPrice: 199,
          annualPrice: 159,
          description: "For large e-commerce operations",
          features: [
            { name: "Product Management", included: true },
            { name: "Order Processing", included: true },
            { name: "Unlimited products", included: true },
            { name: "Advanced Analytics", included: true },
            { name: "24/7 Priority Support", included: true },
            { name: "Marketing Tools", included: true },
            { name: "Multi-channel Selling", included: true },
            { name: "API Access", included: true },
          ],
        },
      ],
    },
    {
      id: "crm",
      name: "CRM System",
      plans: [
        {
          name: "Basic",
          monthlyPrice: 29,
          annualPrice: 23,
          description: "For small teams and startups",
          features: [
            { name: "Contact Management", included: true },
            { name: "Lead Tracking", included: true },
            { name: "Up to 5 users", included: true },
            { name: "Basic Reporting", included: true },
            { name: "Email Support", included: true },
            { name: "Marketing Automation", included: false },
            { name: "Sales Forecasting", included: false },
            { name: "API Access", included: false },
          ],
        },
        {
          name: "Professional",
          monthlyPrice: 79,
          annualPrice: 63,
          description: "For growing sales teams",
          features: [
            { name: "Contact Management", included: true },
            { name: "Lead Tracking", included: true },
            { name: "Up to 25 users", included: true },
            { name: "Advanced Reporting", included: true },
            { name: "Priority Support", included: true },
            { name: "Marketing Automation", included: true },
            { name: "Sales Forecasting", included: true },
            { name: "API Access", included: false },
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          monthlyPrice: 149,
          annualPrice: 119,
          description: "For large sales organizations",
          features: [
            { name: "Contact Management", included: true },
            { name: "Lead Tracking", included: true },
            { name: "Unlimited users", included: true },
            { name: "Advanced Reporting", included: true },
            { name: "24/7 Priority Support", included: true },
            { name: "Marketing Automation", included: true },
            { name: "Sales Forecasting", included: true },
            { name: "API Access", included: true },
          ],
        },
      ],
    },
  ]

  return (
    <section id="pricing" className="py-10 bg-white text-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent, Flexible Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the plan that works best for your business needs. All plans include core features, updates, and
            support.
          </p>

          <div className="flex items-center justify-center mb-8">
            <span
              className={`mr-2 text-sm ${billingCycle === "monthly" ? "text-slate-900 font-medium" : "text-slate-500"}`}
            >
              Monthly
            </span>
            <Switch
              checked={billingCycle === "annual"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
              className="mx-2"
            />
            <span
              className={`ml-2 text-sm ${billingCycle === "annual" ? "text-slate-900 font-medium" : "text-slate-500"}`}
            >
              Annual <span className="text-green-600 font-medium">Save 20%</span>
            </span>
          </div>
        </div>

        <Tabs defaultValue="erp" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
            {solutions.map((solution) => (
              <TabsTrigger key={solution.id} value={solution.id}>
                {solution.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solution.plans.map((plan, index) => (
                  <Card key={index} className={`overflow-hidden ${plan.popular ? "border-blue-500 border-2" : ""}`}>
                    {plan.popular && (
                      <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
                    )}
                    <CardHeader className={`${plan.popular ? "pt-4" : "pt-6"}`}>
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <div className="mt-2 text-slate-600">{plan.description}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <span className="text-4xl font-bold">
                          ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-slate-600 ml-1">/ month</span>
                        {billingCycle === "annual" && (
                          <div className="text-green-600 text-sm mt-1">
                            Billed annually (${plan.annualPrice * 12}/year)
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-slate-300 mr-2 flex-shrink-0" />
                            )}
                            <span className={feature.included ? "text-slate-700" : "text-slate-500"}>
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Need a custom solution? Contact our sales team for a tailored quote.</p>
          <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

