import Container from "@/shared-components/Container";
import Image from "next/image";
import React from "react";
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations('story.hero');

    return (
        <section>
            <div className="flex flex-col h-fit  lg:flex-row items-start justify-center">
                <div className="flex-1 w-full relative aspect-video lg:block hidden">
                    <Image src="/images/hero-story-1.png" className=" object-cover" alt="" fill />
                </div>
                <div className="flex-1 w-full relative aspect-video">
                    <Image src="/images/hero-story-2.png" className=" object-cover" alt="" fill />
                    <span className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl lg:text-[40px] font-medium text-white">{t('title')}</span>
                </div>
                <div className="flex-1 w-full relative aspect-video lg:block hidden">
                    <Image src="/images/hero-story-3.png" className=" object-cover" alt="" fill />
                </div>
            </div>

            <div className="bg-gradient-to-b-from-transparent">
                <Container>
                    <div className="rounded-3xl bg-white w-full my-20 shadow-[0px_0px_8px_3px] shadow-[#0000001A]">
                        <div className="max-w-[750px]  mx-auto text-center p-5 text-base font-normal space-y-5 mt-20">
                            <div className="w-full relative h-[100px] md:h-[280px]">
                                <Image src="/images/LOGO.png" className=" object-cover" alt="" fill />
                            </div>

                            <p className="font-medium text-lg lg:text-2xl">{t('subtitle')}</p>
                            <p className="font-bold text-[#A8A8A8] text-xs lg:text-base font-Figma-Hand">{t('subtitleEn')}</p>

                            <div>
                                {
                                    t('content').split("\n").map((item, index) =>
                                        <p key={index}>{item}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
};

export default Hero;
