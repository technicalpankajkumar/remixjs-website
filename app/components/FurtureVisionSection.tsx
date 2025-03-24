import { Card, CardContent } from "~/components/ui/card"


export function FurtureVisionSection() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="h-1 w-12 bg-red-500 mr-4"></div>
            <p className="text-slate-700 text-lg">Vision For The Future</p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-6">What We Do?</h2>

          <p className="text-slate-600 max-w-4xl text-lg">
            At SG Tech, we offer a broad spectrum of services, from custom website design to the development of
            sophisticated internet solutions. We base our approach on a profound comprehension of our clients' business
            requirements, guaranteeing the provision of dependable and high-quality solutions. By blending business
            domain expertise with technological proficiency and proven methodologies, we consistently deliver
            exceptional results in a cost-effective manner, helping our clients gain a competitive edge and enhance
            productivity.
          </p>
        </div>

        {/* Commitment section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10 ">
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346666.jpg?t=st=1742651077~exp=1742654677~hmac=05298b57b011df6c2c114ba9726dcfc437958b7edd00122682ea2e22b3446dac&w=996"
              alt="Commitment"
              className="object-cover rounded-lg shadow-xl"
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Our Commitment</h3>

            <p className="text-slate-600 text-lg mb-8">
              At SG Tech Technology, we are committed to delivering maximum value to our clients. Our belief in the
              intricate link between our success and our clients' success drives our actions. In a constantly changing
              and challenging market, we strive to be your trusted partner, helping you navigate the complexities and
              achieve sustainable growth.
            </p>

            <div className="h-1 w-full bg-red-500"></div>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Our Core Values</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, ensuring the highest quality in our deliverables.",
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical standards.",
              },
              {
                title: "Client-Centric",
                description:
                  "Our clients' success is our priority, and we tailor our solutions to meet their specific needs.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-t-4 border-t-red-500">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h4>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future vision */}
        <div className="mt-20 bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Looking to the Future</h3>

              <p className="text-slate-600 text-lg mb-4">
                As technology continues to evolve at a rapid pace, SG Tech Technology remains at the forefront of
                innovation. We are constantly investing in research and development to anticipate future trends and
                prepare our clients for the challenges and opportunities that lie ahead.
              </p>

              <p className="text-slate-600 text-lg">
                Our vision is to be the global leader in providing transformative technology solutions that empower
                businesses to thrive in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Artificial Intelligence",
                "Blockchain Technology",
                "Cloud Computing",
                "Internet of Things",
                "Cybersecurity",
                "Big Data Analytics",
              ].map((tech, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-3"></div>
                  <p className="text-slate-700 font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

