import { Card, CardContent, CardFooter } from "~/components/ui/card"
import { ChevronLeft, ChevronRight, ShoppingCart, FileText, BookOpen, DollarSign, LayoutDashboard, CarIcon } from "lucide-react"

import { useState } from "react"
import { Link } from "@remix-run/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import Heading from "./selfComponent/Heading"
import Paragraph from "./selfComponent/Paragraph"

export function ServicesSection() {
  const services = [
    {
      id:"1",
      icon: <ShoppingCart className="h-4 w-4 text-slate-700" />,
      title: "E-commerce",
      description:
        "With years of experience in the industry, we understand the complexities of building and managing successful online stores.",
      imgSrc:"/assets/svg/ecom_shopping.svg",
      link:"/industries/ecommerce"
    },
    {
      id:"2",
      imgSrc:"/assets/svg/hospital.svg",
      icon: <FileText className="h-4 w-4 text-slate-700" />,
      title: "Reg- Hospitality",
      description:
        "At YGTW  Technology, we specialize in Reg-Hospitality solutions that simplify and streamline compliance processes",
      link:"/industries/healthcare"
    },
    {
      id:"3",
      imgSrc:"/assets/svg/education_programing.svg",
      icon: <BookOpen className="h-4 w-4 text-slate-700" />,
      title: "Education",
      description:
        "At YGTW  Technology, we're at the forefront of this transformation, offering innovative Education application- solutions",
      link:"/industries/education"
    },
    {
      id:"4",
      imgSrc:"/assets/svg/erp_desk.svg",
      icon: <LayoutDashboard className="h-4 w-4 text-slate-700" />,
      title: "ERP- Consulting",
      description:
        "At YGTW  Technology, we are driving the future of ERP with our cutting-edge ERP- solutions(Enterprises Resource Planning Services)",
      link:"/industries/erp"
    },
    {
      id:"5",
      imgSrc:"/assets/svg/travel_with_partner.svg",
      icon: <CarIcon className="h-4 w-4 text-slate-700" />,
      title: "Traveling - Solution",
      description:
        "At YGTW  Technology, Your Journey, Simplified: Explore, Plan, and Travel with Ease!",
      link:"/industries/transportation"
    },

  ]

  return (
    <section className="relative overflow-hidden ">
      <div className="container mx-auto relative z-10  py-6 md:py-10 bg-gray-50 px-4">
        <div className="mx-auto text-center mb-8">
            <Heading level={4}>Our Solutions</Heading>
            <Heading level={7} className="text-center">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</Heading>
        </div> 
        <Swiper
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000, // Delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
          breakpoints={{
            480: {
              slidesPerView: 1, // Show 1 slide on small devices
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="flex gap-3"

        >
          {
            services?.map(res => {
              return <SwiperSlide>
              <article className="flex flex-col justify-between relative p-6 bg-white rounded-lg border border-blue-400 shadow-lg dark:bg-gray-800 dark:border-gray-700 h-96">
                <div>
                <div className="flex justify-between items-center mb-5 ">
                 <div className="flex items-center gap-2">
                  {res.icon}
                  <span className="text-sm">{res.title}</span>
                  </div>
                  <span className="text-sm">YGTW</span>
                </div>
                <div className="flex flex-col items-center p-2">
                <img src={res.imgSrc} className="object-cover w-52"/>
                </div>
                <Paragraph level={3}>{res.description}</Paragraph>
                </div>
                <div className="flex justify-between items-between ">
                  <Link to={res.link} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline absolute left-6 bottom-2">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
                </div>
              </article>
            </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

