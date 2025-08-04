"use client"
import Container from "@/shared-components/Container";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from 'next-intl';

const Story = () => {
    const router = useRouter();
    const t = useTranslations('home');
    const storyT = useTranslations('story.items');
    const commonT = useTranslations('common');
    const locale = useLocale();

    const stories = [
        {
            id: "01",
            title: storyT('story.title'),
            imageSrc: "/images/story01.png",
            describtion: storyT('story.description'),
            href: `/${locale}/story`,
            categoryId: "",
            name: ""
        },
        {
            id: "02",
            title: storyT('topics.title'),
            imageSrc: "/images/story02.png",
            describtion: storyT('topics.description'),
            href: `/${locale}/topics`,
            categoryId: "",
            name: ""

        },
        {
            id: "03",
            title: storyT('projects.title'),
            imageSrc: "/images/story03.png",
            describtion: storyT('projects.description'),
            href: `/${locale}/topics`,
            categoryId: "",
            name: ""
        }
    ]

    const handleGoTopic = (item: any) => {
        if (item.categoryId) {
            localStorage.setItem("selectedTopicId", item.categoryId)
        }

        if (item.name) {
            localStorage.setItem("selectedTopic", item.name);
        }

        router.push(item.href)
    }

    return (
        <section className="min-h-screen bg-gradient-to-b-from-transparent relative" id="story">
            <Container className="py-12 lg:pt-24">
                <h2 className="text-white font-medium text-xl lg:text-4xl">{t('storyTitle')}</h2>
                <p className="text-white font-normal text-xs lg:text-base mt-7 max-w-5xl ">
                    {t('storyDescription').split("\n").map((item, index) =>
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
                                                {item.href ?
                                                    <Button onClick={() => handleGoTopic(item)} className={`mt-10 bg-[#00A1E9] text-white font-medium text-sm p-3 rounded-lg`}>
                                                        {commonT('readMore')}
                                                    </Button>
                                                    : <span className="pt-16 block"></span>}
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