"use client"

import Image from "next/image";

import Container from "@/shared-components/Container";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const Company = () => {
    const t = useTranslations('home');
    const locale = useLocale();

    return (
        <section className="bg-[#00A1E9]" id="company">
            <Container className="w-full pr-6 xl:pr-0">
                <div className="py-12 lg:py-24 flex items-center xl:items-start justify-between gap-12 w-full flex-col xl:flex-row">
                    <div className="space-y-8 xl:w-1/3 w-full">
                        <h2 className="font-medium text-white text-xl lg:text-4xl">{t('aboutUsTitle')}</h2>
                        <p className="font-normal text-white text-xs lg:text-base">{t('aboutUsDescription')}</p>
                    </div>

                    <div className="flex items-center justify-center lg:flex-row flex-col lg:gap-y-3">
                        <Link href={`/${locale}/company`} className="relative rounded-b-none lg:rounded-s-lg lg:w-[450px] lg:h-[500px] w-[360px] h-[400px]">
                            <Image fill src="/images/about-us.png" alt="about-us" />
                            <div className="absolute bottom-0 p-11">
                                <h3 className="font-bold text-lg lg:text-3xl text-white">{t('companyTitle')}</h3>
                                <p className="font-normal text-xs lg:text-base text-white mt-2">{t('companyDescription')}</p>
                                <Image className="ml-auto" src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                            </div>
                        </Link>
                        <Link href={`/${locale}/recruit`} className="relative lg:rounded-s-lg lg:w-[450px] lg:h-[500px] w-[360px] h-[400px]">
                            <Image fill src="/images/recruit.png" className="rounded-bl-[20px] lg:rounded-none" alt="recruit" />
                            <div className="absolute bottom-0 p-11">
                                <h3 className="font-bold text-lg lg:text-3xl text-white">{t('recruitTitle')}</h3>
                                <p className="font-normal text-xs lg:text-base text-white mt-2">{t('recruitDescription')}</p>
                                <Image className="ml-auto" src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Company;
