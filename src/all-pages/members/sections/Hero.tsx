import Container from "@/shared-components/Container";
import React from "react";
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations('members.hero');

    return (
        <section className="bg-[#F5F5F5]">
            <Container>
                <div className="h-48 lg:h-80 flex items-start mt-8 lg:items-center justify-between w-full ">
                    <div className="space-y-3">
                        <h1 className="text-[26px] lg:text-[40px] font-medium">{t('title')}</h1>
                        <span className="text-xs lg:text-base font-normal block">{t('subtitle')}</span>
                    </div>
                    <div className="text-xs font-normal">
                        <span className="text-[#ADADAD]">TOP - </span>
                        <span>MEMBER</span>
                    </div>
                </div>
            </Container>
            <div className="bg-[#00A1E9] px-5 py-20 flex items-center justify-center flex-col text-white space-y-10 w-full text-center">
                <h2 className="max-w-[445px] text-xl lg:text-3xl font-medium">{t('heading')}</h2>
                <div className="max-w-[750px]">
                    {t('description').split("\n").map((item, index) =>
                        <p className="text-xs lg:text-base font-normal" key={index}>{item}</p>
                    )}
                </div>

            </div>

        </section>
    )
};

export default Hero;
