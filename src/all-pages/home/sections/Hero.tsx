"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations('home');

    return (
        <section className="relative w-full h-[650px] bg-[url('/images/427360.png')] overflow-hidden" >
            <div className="relative w-[340px] lg:w-[950px] h-[300px] lg:h-[570px] ml-auto">
                <Image src={"/images/group.png"} alt="groub" fill className=" z-10 object-contain" />
                <div className="w-full h-full absolute right-[40px] top-[40px] -z-0 bg-[#F1F1F1]"></div>
            </div>

            <p className="font-normal text-[20px] lg:text-2xl absolute top-[246px] lg:top-[155px] -rotate-6 left-[24px] lg:left-[200px] text-[#252D3E] z-20">
                {t('heroTagline')} <br /> {t('heroTagline2')}
            </p>
            <p className="font-normal text-[24px] lg:text-4xl bg-white p-2 absolute top-[350px] lg:top-[255px] left-[24px] lg:left-[200px] text-[#252D3E] z-20">
                {t('heroTitle1')}
            </p>
            <p className="font-normal text-[24px] lg:text-4xl bg-white p-2 absolute top-[405px] lg:top-[335px] left-[24px] lg:left-[200px] text-[#252D3E] z-20">
                {t('heroTitle2')}
            </p>
            <p className="font-normal text-[14px] lg:text-2xl bg-white absolute top-[470px] lg:top-[421px] left-[24px] lg:left-[200px] text-[#252D3E] z-20">
                {t('heroDescription1')}
            </p>
            <p className="font-normal text-[14px] lg:text-2xl bg-white  absolute top-[550px] lg:top-[466px] left-[24px] lg:left-[200px] text-[#252D3E] z-20">
                {t('heroDescription2')}
            </p>
        </section>
    )
};

export default Hero;