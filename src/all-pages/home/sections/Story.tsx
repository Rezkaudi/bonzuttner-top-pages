"use client"
import Container from "@/shared-components/Container";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import ReadMoreBtn from "@/shared-components/ReadMoreBtn";
import Image from "next/image";

const Story = () => {

    const p1 = "ここで会社の全てがわかる！？\n なぜBonZuttnerが誕生したのか？、BonZuttnerの理念・未来へのビジョン、私たちの歴史や社会課題解決への取り組みを深く知ることができます。\n スライドして是非他のページもご覧ください。"

    const stories = [
        {
            id: "01",
            title: "STORY",
            imageSrc: "/images/story01.png",
            describtion: "BonZuttnerは2019年に誕生し、難民問題や社会問題の解決を目指してきました。これからもそれらの問題を解決していくためにどのような未来を描いているのか。BonZuttnerの全てを知ることができます。",
            href: "/story"
        },
        {
            id: "02",
            title: "TOPICS",
            imageSrc: "/images/story02.png",
            describtion: "BonZuttnerの最新情報はこちらで発信しております。イベントやメディア情報の他にもニュースやコラム等、様々な情報を発信しております。",
            href: "/topics"

        },
        {
            id: "03",
            title: "COMING SOON!!",
            imageSrc: "/images/story03.png",
            describtion: "現在BonZuttnerではお客様に喜んでいただける新サービスを開発しております。BonZuttnerらしいユニークなサービスとなっておりますので、乞うご期待！！",
        }
    ]

    return (
        <section className="min-h-screen bg-gradient-to-b-from-transparent relative" id="story">
            <Container className="py-12 lg:pt-24">
                <h2 className="text-white font-medium text-xl lg:text-4xl">BonZuttnerの物語を巡りながら、未来をつくる旅へ</h2>
                <p className="text-white font-normal text-xs lg:text-base mt-7 max-w-5xl ">
                    {p1.split("\n").map((item, index) =>
                        <span className="block" key={index}>{item}</span>
                    )}
                </p>
                <span className="w-60 h-60 absolute top-60 left-0 bg-white blur-custom z-0 rounded-full"></span>
                <span className="w-[465px] h-[465px] absolute top-80 right-0 bg-white blur-custom z-0 rounded-full"></span>
                <div className="mt-16 flex items-center justify-center w-full ">
                    <div className="max-w-[900px] w-full lg:h-[480px] h-fit">
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination, Autoplay]}
                            spaceBetween={50}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                        >
                            {stories.map(item =>
                                <SwiperSlide key={item.id}>
                                    <div className="w-full h-full flex items-center justify-start px-4 flex-col-reverse lg:flex-row">
                                        <div className="flex flex-col lg:h-[430px] h-full pb-10 items-start px-5 sm:px-12 mr-0 bg-white w-full">
                                            <div className=" absolute left-0 w-full top-4 h-[400px] lg:hidden">


                                                <div className="relative hidden w-full h-full sm:flex items-center justify-center ">
                                                    <Image src={item.imageSrc} alt={item.title} fill />
                                                </div>

                                                <div className="relative w-full h-full flex items-center justify-center sm:hidden ">
                                                    <Image src={item.imageSrc} alt={item.title} fill objectFit="cover" />
                                                </div>
                                            </div>

                                            <div className="mt-[450px] lg:mt-10 mb-10">
                                                <div className="font-medium text-base lg:text-xl text-[#878787] w-full text-right underline  ">
                                                    Vol.
                                                    <span className="text-[22px] lg:text-3xl italic">{item.id}</span>
                                                </div>
                                                <h2 className="font-bold text-lg lg:text-2xl mt-8">{item.title}</h2>
                                                <p className="text-start mt-2 font-normal text-xs lg:text-base lg:max-w-[366px] w-full">{item.describtion}</p>
                                                {item.href ? <ReadMoreBtn href={item.href} /> : <span className="pt-16 block"></span>}
                                            </div>

                                        </div>
                                        <div className="lg:right lg:absolute lg:right-7 lg:top-0 lg:w-[400px] lg:h-[480px] z-10 lg:block hidden">
                                            <Image src={item.imageSrc} className=" object-cover" alt={item.title} fill />
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