import Container from "@/shared-components/Container";
import React from "react";
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations('contact.hero');

    return (
        <section className="bg-[#F5F5F5]">
            <Container>
                <div className="h-[200px] lg:h-80 flex items-start mt-8 lg:mt-16 justify-between w-full">
                    <div className="space-y-3">
                        <h1 className="text-[26px] lg:text-[40px] font-medium">{t('title')}</h1>
                        <span className="text-xs lg:text-base font-normal block">{t('subtitle')}</span>
                        <div className="text-xs lg:text-base font-normal mt-5">
                            {t('description.line1')}<br />
                            {t('description.line2')}
                        </div>
                    </div>
                    <div className="text-xs font-normal">
                        <span className="text-[#ADADAD]">{t('breadcrumb1')} - </span>
                        <span>{t('breadcrumb2')}</span>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Hero;