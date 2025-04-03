import { Button } from "~/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Card, CardContent } from "~/components/ui/card"


export function AboutSection() {
  return (
    <section className="relative">
      {/* Main content */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              {/* Section header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-slate-900 mr-4"></div>
                  <p className="text-slate-700 text-lg">Our strategy</p>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                  About SG Tech Technology
                </h2>

                <p className="text-slate-600 text-lg mb-8">
                  SG Tech Technology, established in 2006, is a forward-thinking, technology-driven software development
                  company, serving businesses worldwide. We are one of the fastest-growing tech companies in our region,
                  providing comprehensive, end-to-end solutions powered by advanced, cutting-edge technologies, enabling
                  our clients to make complex business decisions with confidence and ease. Our strength lies in our
                  highly skilled, dedicated team of tech-savvy professionals, allowing us to deliver high-quality,
                  reliable, and scalable solutions.
                </p>

                <Button className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-2 h-auto">
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

              <Card className="bg-white border-t-4 border-t-slate-800 shadow-lg -mt-16 ml-8 max-w-md relative z-10">
                <CardContent className="p-6">
                  <blockquote className="text-slate-600 italic mb-4">
                    "It is rare to find Commerce Cloud development agencies that just understand your requirements from
                    the word go and SG Tech Technology is one of them."
                  </blockquote>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-slate-800">
                      <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Akshay" />
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-bold text-slate-800">Akshay</p>
                      <p className="text-sm text-slate-500">Project: Zinrelo</p>
                    </div>
                  </div>

                  <div className="mt-4 h-1 w-full bg-slate-800 opacity-30"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

