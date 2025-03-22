import { Button } from "~/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Card, CardContent } from "~/components/ui/card"


export function AboutSection() {
  return (
    <section className="relative">
      {/* Header with background */}
      <div className="relative bg-slate-800 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://pic.pikbest.com/01/98/19/8888piCt888piCMkn.jpg!bw700')] bg-cover bg-center"></div>
        <div className="container relative z-10 mx-auto px-4">
          <p className="text-white text-lg mb-2">Unicode Systems</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">About Us</h1>
        </div>

        {/* White diagonal shape */}
        <div className="absolute bottom-0 right-0 w-1/3 h-16 bg-white transform skew-y-6 translate-y-8"></div>
      </div>

      {/* Main content */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              {/* Section header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-red-500 mr-4"></div>
                  <p className="text-slate-700 text-lg">Our strategy</p>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                  About Unicode Systems
                </h2>

                <p className="text-slate-600 text-lg mb-8">
                  Unicode Systems, established in 2006, is a forward-thinking, technology-driven software development
                  company, serving businesses worldwide. We are one of the fastest-growing tech companies in our region,
                  providing comprehensive, end-to-end solutions powered by advanced, cutting-edge technologies, enabling
                  our clients to make complex business decisions with confidence and ease. Our strength lies in our
                  highly skilled, dedicated team of tech-savvy professionals, allowing us to deliver high-quality,
                  reliable, and scalable solutions.
                </p>

                <Button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-6 h-auto">
                  START TODAY
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[300px] md:h-[400px] mb-8">
                <img
                  src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346666.jpg?t=st=1742651077~exp=1742654677~hmac=05298b57b011df6c2c114ba9726dcfc437958b7edd00122682ea2e22b3446dac&w=996"
                  alt="Business professionals in a meeting"
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>

              <Card className="bg-white border-t-4 border-t-red-500 shadow-lg -mt-16 ml-8 max-w-md relative z-10">
                <CardContent className="p-6">
                  <blockquote className="text-slate-600 italic mb-4">
                    "It is rare to find Commerce Cloud development agencies that just understand your requirements from
                    the word go and Unicode systems is one of them."
                  </blockquote>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-red-500">
                      <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Akshay" />
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-bold text-red-500">Akshay</p>
                      <p className="text-sm text-slate-500">Project: Zinrelo</p>
                    </div>
                  </div>

                  <div className="mt-4 h-1 w-full bg-red-500 opacity-30"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

