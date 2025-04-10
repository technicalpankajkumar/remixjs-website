import { Card, CardContent } from "~/components/ui/card"
import Heading from "./selfComponent/Heading"
import { Separator } from "@radix-ui/react-separator"
import { SwiperSlide } from "swiper/react"
import SwiperSlides from "./selfComponent/SwiperSlides"
import { homeData } from "~/constants"

export function VisionSection() {
  return (<section className="py-6 md:py-12 bg-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-content-between">
        <div>
          {/* Section header */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <div>
                <Separator className="my-0 rounded-full mt-2 bg-slate-700 h-1 w-10" />
                <Separator className="mt-1 rounded-full bg-blue-700 h-1 w-10" />
              </div>
              <Heading level={7} className="">{homeData?.tag}</Heading>
            </div>
            <Heading level={3} className="">{homeData.title}</Heading>

            <p className="text-slate-600 text-lg mb-8">
              {homeData.description}
            </p>
            <div className="px-2 py-3 bg-gray-50">
              <SwiperSlides>
                {
                  homeData.cards?.map(res => (<SwiperSlide key={res.id} className="">
                    <Card className="h-48 relative bg-white overflow-hidden">
                      <div className="h-24 w-24 rounded-full bg-blue-700 absolute opacity-50 -left-10 -top-6 z-0"></div>
                      <div className="h-10 w-10 rounded-full bg-blue-700 absolute opacity-30 right-1 bottom-6 z-0"></div>
                      <CardContent className="pt-2">
                        <Heading level={6}>{res.title}</Heading>

                        <p className="text-slate-600 h-40 overflow-y-auto text-sm">
                          {res.description}
                        </p>
                        <div className="mt-6 h-2 w-full bg-blue-600 absolute bottom-3 left-0 right-0"></div>
                        <div className="mt-6 h-2 w-full bg-slate-300 absolute bottom-1 left-0 right-0"></div>
                      </CardContent>
                    </Card>
                  </SwiperSlide>)
                )}
              </SwiperSlides>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 hidden lg:block">
          <SwiperSlides slidesPerView={1} breakpoints={{}}>
           { homeData.images?.map(res =>( <SwiperSlide key={res.alt}>
              <img
                src={res.imgSrc}
                alt={res.alt}
                className="object-cover"
              />
            </SwiperSlide>))}
            </SwiperSlides>
        </div>
      </div>
    </div>
  </section>

  )
}

