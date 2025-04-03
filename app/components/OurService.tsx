import { Card, CardContent, CardFooter } from "~/components/ui/card"
import { ChevronLeft, ChevronRight, ShoppingCart, FileText, BookOpen, DollarSign } from "lucide-react"

import { useState } from "react"
import { Link } from "@remix-run/react"

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      icon: <ShoppingCart className="h-16 w-16 text-slate-700" />,
      title: "E-commerce",
      description:
        "With years of experience in the industry, we understand the complexities of building and managing successful online stores.",
    },
    {
      icon: <FileText className="h-16 w-16 text-slate-700" />,
      title: "Reg-Tech Consulting",
      description:
        "At SG Tech Technology, we specialize in RegTech solutions that simplify and streamline compliance processes",
    },
    {
      icon: <BookOpen className="h-16 w-16 text-slate-700" />,
      title: "Ed-Tech Consulting",
      description:
        "At SG Tech Technology, we're at the forefront of this transformation, offering innovative Ed-Tech solutions",
    },
    {
      icon: <DollarSign className="h-16 w-16 text-slate-700" />,
      title: "Fin-Tech Consulting",
      description:
        "At SG Tech Technology, we are driving the future of finance with our cutting-edge Fin-Tech solutions(Financial Services)",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  return (
    <section className="relative bg-slate-900 overflow-hidden py-16 md:py-24">
      {/* Tech background pattern */}
      <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://pic.pikbest.com/02/07/05/12A888piCPVj.jpg!bw700')] bg-cover bg-center"></div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="h-1 w-12 bg-slate-800 mr-4"></div>
            <p className="text-white text-lg">Our Services</p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Custom Services For Your Business
          </h2>

          <p className="text-gray-300 max-w-3xl text-lg">
            Tailored consulting services are designed to elevate your business to new heights.
          </p>
        </div>

        {/* Services cards - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white rounded-lg overflow-hidden">
              <CardContent className="pt-8 px-6 flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Link to="#" className="text-slate-800 hover:text-slate-700 font-medium">
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Services cards - Mobile Carousel */}
        <div className="md:hidden relative">
          <Card className="bg-white rounded-lg overflow-hidden">
            <CardContent className="pt-8 px-6 flex flex-col items-center text-center">
              <div className="mb-4">{services[currentSlide].icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{services[currentSlide].title}</h3>
              <p className="text-slate-600 text-sm">{services[currentSlide].description}</p>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Link to="#" className="text-slate-800 hover:text-slate-700 font-medium">
                Read More
              </Link>
            </CardFooter>
          </Card>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-800 text-white p-2 rounded-full"
            aria-label="Previous service"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-slate-800 text-white p-2 rounded-full"
            aria-label="Next service"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-slate-800" : "bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

