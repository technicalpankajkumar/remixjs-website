import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion"

export default function SupportFaq() {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. Enter the email address associated with your account, and we'll send you instructions to reset your password. If you don't receive the email, check your spam folder or contact our support team.",
    },
    {
      question: "How do I change my username?",
      answer:
        "You can change your username in your Account Settings. Go to User Settings > My Account, and you'll find the option to edit your username. Remember that you can only change your username once every 7 days.",
    },
    {
      question: "Why can't I send messages in a channel?",
      answer:
        "There could be several reasons: 1) You might not have permission to send messages in that channel. 2) The channel might be in slow mode, requiring you to wait between messages. 3) The server might have verification requirements you haven't completed yet. Check with a server administrator if you're unsure.",
    },
    {
      question: "How do I create a new server?",
      answer:
        "To create a new server, click the '+' icon in the server list on the left side of the app. Then select 'Create a Server' and follow the setup wizard. You can choose a template or start from scratch, customize your server name, and upload an icon.",
    },
    {
      question: "How do I report a user who is breaking the rules?",
      answer:
        "You can report a user by right-clicking their username or avatar and selecting 'Report'. Provide details about the violation and any relevant evidence. Our Trust & Safety team will review the report and take appropriate action according to our Community Guidelines.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "To cancel your subscription, go to User Settings > Billing > Subscriptions. Find the subscription you want to cancel and click 'Cancel'. Follow the prompts to complete the cancellation. Note that you'll continue to have access to premium features until the end of your current billing period.",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions. If you can't find what you're looking for, feel free to contact our
            support team.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left  lg:text-lg font-medium text-gray-900">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

