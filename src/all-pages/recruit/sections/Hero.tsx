import Container from "@/shared-components/Container";
import React from "react";
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations('recruit.hero');

    return (
        <section className="bg-[#F5F5F5]">
            <Container>
                <div className="h-[200px] lg:h-[300px] flex items-start mt-[50px]  justify-between w-full ">
                    <div className="space-y-3">
                        <h1 className="text-xl lg:text-[40px] font-medium">{t('title')}</h1>
                        <span className="text-xs lg:text-base font-normal block">{t('subtitle')}</span>
                    </div>
                    <div className="text-xs font-normal">
                        <span className="text-[#ADADAD]">TOP - </span>
                        <span>RECRUIT</span>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Hero;
