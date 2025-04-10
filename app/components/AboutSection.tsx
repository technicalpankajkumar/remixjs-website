import { Button } from "~/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Card, CardContent } from "~/components/ui/card"
import CommanSection from "./selfComponent/CommanSection"
import { Link } from "@remix-run/react"
import SwiperSlides from "./selfComponent/SwiperSlides"
import { SwiperSlide } from "swiper/react"

const data = {
  id: "1",
  tag: "About us",
  heading: "About YGTW  Technology",
  description: "YGTW Technology, established in 2006, is a forward-thinking, technology-driven software development company, serving businesses worldwide. We are one of the fastest-growing tech companies in our region, providing comprehensive, end-to-end solutions powered by advanced, cutting-edge technologies, enabling our clients to make complex business decisions with confidence and ease. Our strength lies in our highly skilled, dedicated team of tech-savvy professionals, allowing us to deliver high-quality, reliable, and scalable solutions.",
  cards: [
    {
      id: "1",
      auther: "Pankaj Kumar",
      imgSrc: "/assets/svg/man_with_coffe_laptop.svg",
      role: "MD & Software Developer",
      visit: "https://www.instagram.com/technicalpankajkumar7/#",
      description: "It is rare to find Commerce Cloud development agencies that just understand your requirements from the word go and YGTW  Technology is one of them."
    },
    {
      id: "2",
      auther: "Shailesh Verma",
      imgSrc: "/assets/svg/man_with_laptop.svg",
      role: "Software Developer",
      visit: "https://www.instagram.com/technicalpankajkumar7/#",
      description: "It is rare to find Commerce Cloud development agencies that just understand your requirements from the word go and YGTW  Technology is one of them."
    }
  ]
}

export function AboutSection() {
  return (<CommanSection
    tag={data.tag}
    heading={data.heading}
    description={data.description}
    newNode={<SwiperSlides slidesPerView={1} breakpoints={{}}>
      {
        data.cards?.map(res => (<SwiperSlide key={res.id}>
          <img
            src={res.imgSrc}
            alt={res.role}
            className="object-cover max-h-[400px] text-end"
          />
          <Card className="bg-white border-t-4 border-t-slate-800 -mt-16 ml-8 max-w-md z-10 absolute -bottom-1 -right-2 hover:scale-90 scale-75 shadow-sm duration-300 cursor-pointer">
            <CardContent className="p-4 text-sm">
              <blockquote className="text-slate-600 italic mb-2">
                "{res.description}"
              </blockquote>
              <div className="mt-4 h-1 w-full bg-slate-800 opacity-30"></div>
            </CardContent>
          </Card>
          <Link to={res.visit}>
            <Card className="flex items-center bg-indigo-500 dark:bg-slate-800 absolute top-0 -left-2 p-2 text-sm scale-75 hover:scale-90 duration-300 cursor-pointer shadow-lg">
              <Avatar className="h-10 w-10 mr-6 border-2 border-white">
                <AvatarImage src={res.imgSrc} alt={res.auther} />
                <AvatarFallback>{res.auther}</AvatarFallback>
              </Avatar>

              <div>
                <p className="font-bold text-white">{res.auther}</p>
                <p className="text-sm text-white">{res.role}</p>
              </div>
            </Card>
          </Link>
        </SwiperSlide>))
      }
    </SwiperSlides>
    }
  >
    <Button asChild className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6">
      <Link to="https://www.instagram.com/technicalpankajkumar7/#">Visit Instagram</Link>
    </Button>
  </CommanSection>)
}

