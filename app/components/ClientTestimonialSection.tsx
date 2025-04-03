import { Card, CardContent } from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Quote } from "lucide-react"
import { useState } from "react"

export function ClientTestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "SG Tech Technology transformed our business operations with their innovative tech solutions. Their team's expertise and dedication made all the difference.",
      author: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "Working with SG Tech Technology has been a game-changer for our company. Their strategic approach and cutting-edge solutions helped us stay ahead of the competition.",
      author: "Michael Chen",
      position: "CTO, Global Innovations",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      quote:
        "The team at SG Tech Technology provided exceptional service and delivered results beyond our expectations. Their insights into our industry were invaluable.",
      author: "Emily Rodriguez",
      position: "Operations Director, NextGen Solutions",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with SG Tech Technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop testimonial */}
          <div className="hidden md:block">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 px-8">
                <div className="flex flex-col items-center text-center">
                  <Quote className="h-12 w-12 text-slate-800 mb-6" />
                  <p className="text-xl text-slate-700 italic mb-8">"{testimonials[activeIndex].quote}"</p>
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} />
                    <AvatarFallback>
                      {testimonials[activeIndex].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonials[activeIndex].author}</h4>
                    <p className="text-slate-600">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile testimonials */}
          <div className="md:hidden">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6 px-6">
                <div className="flex flex-col items-center text-center">
                  <Quote className="h-8 w-8 text-slate-800 mb-4" />
                  <p className="text-lg text-slate-700 italic mb-6">"{testimonials[activeIndex].quote}"</p>
                  <Avatar className="h-12 w-12 mb-3">
                    <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} />
                    <AvatarFallback>
                      {testimonials[activeIndex].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonials[activeIndex].author}</h4>
                    <p className="text-sm text-slate-600">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-slate-800 w-6" : "bg-gray-300"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

