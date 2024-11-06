"use client"
import Container from "@/shared-components/Container";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import ReadMoreBtn from "@/shared-components/ReadMoreBtn";
import Image from "next/image";

const Story = () => {


    const stories = [
        {
            id: "01",
            title: "STORY",
            describtion: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。"
        },
        {
            id: "02",
            title: "STORY",
            describtion: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。"
        },
        {
            id: "03",
            title: "STORY",
            describtion: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。"
        }
    ]

    return (
        <section className="min-h-screen bg-gradient-to-b-from-transparent relative" id="story">
            <Container className="pt-24">
                <h2 className="text-white font-medium text-4xl">こちらにタイトルが入ります。</h2>
                <p className="text-white font-normal text-base mt-5 max-w-5xl ">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、</p>
                <span className="w-60 h-60 absolute top-60 left-0 bg-white blur-custom z-0 rounded-full"></span>
                <span className="w-[465px] h-[465px] absolute top-80 right-0 bg-white blur-custom z-0 rounded-full"></span>
                <div className="mt-16 flex items-center justify-center w-full ">
                    <div className="max-w-[900px] w-full lg:h-[480px] h-fit">
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            spaceBetween={50}
                        >
                            {stories.map(item =>
                                <SwiperSlide key={item.id}>
                                    <div className="w-full h-full flex items-center justify-start flex-col lg:flex-row">
                                        <div className="flex flex-col lg:h-[430px] h-fit items-start px-5 sm:px-12 py-14 mr-0 bg-white w-full">
                                            <div className="font-medium text-xl text-[#878787] lg:w-1/2 w-full text-center lg:text-end">
                                                Vol.
                                                <span className="text-3xl italic">{item.id}</span>
                                            </div>
                                            <h2 className="font-bold text-2xl mt-8">{item.title}</h2>
                                            <p className="text-start mt-2 font-normal text-base lg:max-w-[366px] w-full">{item.describtion}</p>
                                            <ReadMoreBtn />
                                            <div className="relative w-[300px] h-[400px] lg:hidden inline mx-auto mt-5">
                                                <Image src="/images/story01.png" alt="story1" fill />
                                            </div>
                                        </div>
                                        <div className="lg:right lg:absolute lg:right-7 lg:top-0 lg:w-[300px] lg:h-[480px] z-10 lg:block hidden">
                                            <Image src="/images/story01.png" alt="story1" fill />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}

                        </Swiper>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Story;
