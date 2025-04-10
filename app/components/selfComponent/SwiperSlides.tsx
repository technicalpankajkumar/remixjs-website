import { ReactNode } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Define a type for the breakpoints
interface Breakpoints {
    [key: number]: {
        slidesPerView: number;
    };
}

interface SwiperSlidesProps {
    delay?: number; // Optional prop with a default value
    children: ReactNode;
    breakpoints?: Breakpoints; // Use the defined Breakpoints type
    slidesPerView?:number
}

const SwiperSlides: React.FC<SwiperSlidesProps> = ({ delay = 3000, children, breakpoints,slidesPerView }) => {
    return (
        <Swiper
            spaceBetween={10}
            modules={[Autoplay]}
            autoplay={{
                delay: delay, // Delay in milliseconds
                disableOnInteraction: false, // Continue autoplay after user interactions
            }}
            slidesPerView={slidesPerView}
            breakpoints={breakpoints || {
                1024: {
                    slidesPerView: 2,
                },
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {children}
        </Swiper>
    );
};

export default SwiperSlides;