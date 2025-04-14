import { Card, CardContent } from "~/components/ui/card"
import SwiperSlides from "./selfComponent/SwiperSlides"
import { SwiperSlide } from "swiper/react"
import Heading from "./selfComponent/Heading"
import Paragraph from "./selfComponent/Paragraph"
import CommanSection from "./selfComponent/CommanSection"
import { coreValueData } from "~/constants"


export function FurtureVisionSection() {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <CommanSection
          tag="Vision For The Future"
          heading="What We Do?"
          description="At YGTW , we offer a broad spectrum of services, from custom website design to the development of
            sophisticated internet solutions. We base our approach on a profound comprehension of our clients' business
            requirements, guaranteeing the provision of dependable and high-quality solutions. By blending business
            domain expertise with technological proficiency and proven methodologies, we consistently deliver
            exceptional results in a cost-effective manner, helping our clients gain a competitive edge and enhance
            productivity."
          imgSrc="/assets/svg/development_language.svg"
        />

        {/* Core values */}
        <div className=" bg-gray-50 px-2 py-6">
          <Heading level={4} className="text-center mb-4">Our Core Values</Heading>
          <SwiperSlides
            slidesPerView={1} // Default to 1 slide
            breakpoints={{
              480: {
                slidesPerView: 1, // Show 1 slide on small devices
              },
              640: {
                slidesPerView: 2, // Show 2 slides on tablets
              },
              768: {
                slidesPerView: 2, // Show 3 slides on laptops
              },
              1024: {
                slidesPerView: 3, // Show 4 slides on desktops
              },
              1200: {
                slidesPerView: 4, // Show 5 slides on TVs or larger screens
              }
            }}
          >
            {coreValueData?.map(res => <SwiperSlide>
              <Card key={res.title} className="border-t-4 border-t-blue-900 min-h-full bg-white">
                <CardContent className="p-4">
                  <Heading level={6}>{res.title}</Heading>
                  <Paragraph level={3}>{res.description}</Paragraph>
                </CardContent>
              </Card>
            </SwiperSlide>
            )}
          </SwiperSlides>
        </div>

        {/* Future vision */}
        <CommanSection
          tag=""
          heading="Looking to the Future"
          description="As technology continues to evolve at a rapid pace, YGTW  Technology remains at the forefront of
                innovation. We are constantly investing in research and development to anticipate future trends and
                prepare our clients for the challenges and opportunities that lie ahead."
          newNode={<div className="grid grid-cols-2 gap-4">
            {[
              "Artificial Intelligence",
              "Blockchain Technology",
              "Cloud Computing",
              "Internet of Things",
              "Cybersecurity",
              "Big Data Analytics",
            ].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow flex items-center">
                <div className="h-3 w-3 rounded-full bg-slate-800 mr-3"></div>
                <p className="text-slate-700 font-medium">{tech}</p>
              </div>
            ))}
          </div>}
        />
      </div>
    </section>
  )
}

