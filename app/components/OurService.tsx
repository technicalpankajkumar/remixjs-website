import { Card, CardContent, CardFooter } from "~/components/ui/card"
import { ChevronLeft, ChevronRight, ShoppingCart, FileText, BookOpen, DollarSign } from "lucide-react"

import { useState } from "react"
import { Link } from "@remix-run/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

export function ServicesSection() {
  const services = [
    {
      id:"1",
      icon: <ShoppingCart className="h-4 w-4 text-slate-700" />,
      title: "E-commerce",
      description:
        "With years of experience in the industry, we understand the complexities of building and managing successful online stores.",
      imgSrc:"/assets/svg/ecom_shopping.svg"
    },
    {
      id:"2",
      imgSrc:"/assets/svg/ecom_shopping.svg",
      icon: <FileText className="h-4 w-4 text-slate-700" />,
      title: "Reg- Consulting",
      description:
        "At YGTW  Technology, we specialize in RegTech solutions that simplify and streamline compliance processes",
    },
    {
      id:"3",
      imgSrc:"/assets/svg/ecom_shopping.svg",
      icon: <BookOpen className="h-4 w-4 text-slate-700" />,
      title: "Ed- Consulting",
      description:
        "At YGTW  Technology, we're at the forefront of this transformation, offering innovative Ed- solutions",
    },
    {
      id:"4",
      imgSrc:"/assets/svg/ecom_shopping.svg",
      icon: <DollarSign className="h-4 w-4 text-slate-700" />,
      title: "Fin- Consulting",
      description:
        "At YGTW  Technology, we are driving the future of finance with our cutting-edge Fin- solutions(Financial Services)",
    },
  ]

  return (
    <section className="relative bg-slate-900 overflow-hidden py-16 md:py-24">
      {/*  background pattern */}
      <div className="absolute inset-0 z-0 opacity-50 bg-[url('https://pic.pikbest.com/02/07/05/12A888piCPVj.jpg!bw700')] bg-cover bg-center"></div>

      <div className="container relative z-10 mx-auto px-4">
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
              <article className="flex flex-col justify-between p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96">
                <div>
                <div className="flex justify-between items-center mb-5 text-gray-500">
                 <div className="flex items-center gap-2">
                  {res.icon}
                  <span className="text-sm">{res.title}</span></div>
                  <span className="text-sm">YGTW</span>
                </div>
                <div className="flex flex-col items-center">
                <img src={res.imgSrc} className="object-cover w-52"/>
                </div>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400 overflow-auto">{res.description}</p>
                </div>
                <div className="flex justify-between items-between">
                  {/* <div className="flex items-center space-x-4">
                    <img className="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                    <span className="font-medium dark:text-white">
                      Jese Leos
                    </span>
                  </div> */}
                  <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
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

