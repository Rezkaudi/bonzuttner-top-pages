"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const ImageSection = ({ images }) => {
    return (
        <section className="bg-[#F5F5F5]">
            {/* Desktop View - Side by side images */}
            <div className="hidden lg:flex items-center justify-center w-full">
                {images.map((image, index) => (
                    <div key={index} className="relative w-1/3 h-[320px]">
                        <Image
                            fill
                            src={image.src}
                            className="absolute inset-0 w-full h-full object-cover"
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile View - Swiper Carousel */}
            <div className="lg:hidden w-full">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="relative h-[320px] w-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className='h-[320px]'>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={100} height={320}
                                className="max-h-[320px] object-cover"
                            />
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>
        </section>
    );
};

export default ImageSection;