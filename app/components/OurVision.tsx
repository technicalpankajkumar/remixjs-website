import { Card, CardContent } from "~/components/ui/card"
import { Button } from "./ui/button"

export function VisionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="h-1 w-12 bg-slate-800 mr-4"></div>
            <p className="text-slate-700 text-lg">Vision For The Future</p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Why Choose SG Tech Technology?
          </h2>

          <p className="text-slate-600 max-w-4xl text-lg">
            At SG Tech Technology, we specialize in bridging the gap between technology and business. Our mission is to
            provide tailored solutions that enhance your operations and fuel your growth. Join us to transform your
            business with our expert guidance and innovative strategies.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 place-items-center">
          <div className="lg:col-span-1">
            <img
              src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346666.jpg?t=st=1742651077~exp=1742654677~hmac=05298b57b011df6c2c114ba9726dcfc437958b7edd00122682ea2e22b3446dac&w=996"
              alt="Business professionals collaborating"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-slate-800">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">Dedicated Support</h3>
                <p className="text-slate-600">
                  At every stage of your journey, our team provides personalized support and expertise to ensure your
                  success.
                </p>
                <div className="mt-6 h-1 w-full bg-slate-800"></div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-slate-800">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">Expert Advisors</h3>
                <p className="text-slate-600">
                  Gain access to industry leaders who offer customized solutions in IT, marketing, finance, and more to
                  keep you ahead of the curve.
                </p>
                <div className="mt-6 h-1 w-full bg-slate-800"></div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-slate-800">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">Market Research</h3>
                <p className="text-slate-600">
                  Our in-depth market research and insights equip you with the knowledge to seize opportunities and make
                  informed decisions.
                </p>
                <div className="mt-6 h-1 w-full bg-slate-800"></div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-8 py-2 h-auto">ABOUT US</Button>
        </div>
      </div>
    </section>
  )
}

