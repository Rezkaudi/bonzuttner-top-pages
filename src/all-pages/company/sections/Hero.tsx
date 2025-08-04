import Container from "@/shared-components/Container";
import React from "react";
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations('company');

    return (
        <section className="bg-[#F5F5F5]">
            <Container>
                <div className="h-[200px] lg:h-[300px] flex items-start mt-[50px] lg:items-start justify-between w-full ">
                    <div className="space-y-3">
                        <h1 className="text-[26px] lg:text-[40px] font-medium">{t('hero.title')}</h1>
                        <span className="text-xs lg:text-base font-normal block">{t('hero.subtitle')}</span>
                    </div>
                    <div className="text-xs font-normal">
                        <span className="text-[#ADADAD]">{t('hero.breadcrumb1')} - </span>
                        <span>{t('hero.breadcrumb2')}</span>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Hero;