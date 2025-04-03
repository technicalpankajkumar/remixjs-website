import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"

export function ExperienceSection() {
  return (
    <section className="relative bg-slate-800 py-6 md:py-8 overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://pic.pikbest.com/02/10/87/58G888piCXPh.jpg!bw700')] bg-cover bg-center"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="h-1 w-12 bg-white mr-4"></div>
                <p className="text-white text-lg">Experience</p>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Who We Are</h2>

              <p className="text-gray-300 text-lg mb-8">
                Our passion for technology and commitment to excellence fuel us. Our team of skilled, dedicated, and
                forward-thinking professionals drives our success. Backed by a strong, techno-savvy workforce, we
                deliver high-quality, reliable, and scalable solutions that meet the unique needs of our diverse
                clientele.
              </p>

              <Button className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-2 h-auto shadow-md ">
                CONTACT US TODAY
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-white border-2 border-slate-800 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-5xl font-bold text-slate-800 mb-2">+120</h3>
                <p className="text-slate-600">Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-slate-800 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-5xl font-bold text-slate-800 mb-2">+5</h3>
                <p className="text-slate-600">Countries</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-slate-800 shadow-lg ">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-5xl font-bold text-slate-800 mb-2">17+</h3>
                <p className="text-slate-600">Years of Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional stats in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { number: "100+", label: "Clients" },
            { number: "50+", label: "Team Members" },
            { number: "24/7", label: "Support" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</h4>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

