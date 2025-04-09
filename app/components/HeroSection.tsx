import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/*  background pattern */}
      <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://images.alphacoders.com/924/924462.jpg')] bg-cover bg-center h-98"></div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="">
          <div className="flex items-center mb-4">
            <div className="h-1 w-12 bg-slate-800 mr-4"></div>
            <p className="text-white text-lg">Welcome to YGTW  Technology</p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Business And Technology Consulting
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-slate-900">
              <Link to="#industries">INDUSTRIES</Link>
            </Button>

            <Button
              asChild
              variant="outline"
            >
              <Link to="#contact">SPEAK TO OUR EXPERT</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

