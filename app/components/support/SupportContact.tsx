import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Mail, MessageCircle, Twitter, FileText } from "lucide-react"

export default function SupportContact() {
  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email. We typically respond within 24 hours.",
      icon: <Mail className="h-8 w-8 text-indigo-500" />,
      action: "Email Us",
      href: "mailto:support@unicodesystems.com",
      color: "bg-indigo-100",
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time during business hours.",
      icon: <MessageCircle className="h-8 w-8 text-green-500" />,
      action: "Start Chat",
      href: "#chat",
      color: "bg-green-100",
    },
    {
      title: "Twitter Support",
      description: "Tweet us @UnicodeSupport for quick assistance with simple issues.",
      icon: <Twitter className="h-8 w-8 text-blue-500" />,
      action: "Tweet Us",
      href: "https://twitter.com/UnicodeSupport",
      color: "bg-blue-100",
    },
    {
      title: "Submit a Ticket",
      description: "Create a support ticket for complex issues requiring investigation.",
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      action: "Open Ticket",
      href: "/support/ticket",
      color: "bg-purple-100",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our support team is here to help. Choose the contact method that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className={`${method.color} p-3 rounded-full mb-4`}>{method.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{method.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={method.href}>{method.action}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Support hours: Monday-Friday, 9am-6pm EST</p>
          <p className="text-gray-600 mt-2">Average response time: &lt;24 hours</p>
        </div>
      </div>
    </section>
  )
}

