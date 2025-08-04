"use client"


import Container from "@/shared-components/Container";
import ReadMoreBtn from "@/shared-components/ReadMoreBtn";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

const Member = () => {
    const t = useTranslations('home');
    const locale = useLocale();

    return (
        <section className=" bg-[#F5F5F5]" id="member">
            <Container className="w-full xl:pl-0 ">
                <div className="flex items-center justify-between xl:flex-row flex-col-reverse gap-16 py-14 lg:py-24 ">
                    <ReadMoreBtn href={`/${locale}/members`} className=" block xl:hidden leading-3 mt-0" />

                    <div className="flex items-start justify-start flex-1">
                        <Image width={200} height={450} className="w-[110px] lg:w-[200px] h-[250px] lg:h-[450px]" src="/images/members1.png" alt="members" />
                        <Image width={200} height={450} className="w-[110px] lg:w-[200px] h-[250px] lg:h-[450px]" src="/images/members2.png" alt="members" />
                        <Image width={200} height={450} className="w-[110px] lg:w-[200px] h-[250px] lg:h-[450px]" src="/images/members3.png" alt="members" />
                    </div>
                    <div className="flex-1">
                        <h2 className="font-medium text-xl xl:text-4xl">{t('memberTitle')}</h2>
                        <p className="font-normal text-xs xl:text-base pt-6">{t('memberDescription')}</p>
                        <ReadMoreBtn href={`/${locale}/members`} className=" hidden xl:inline-block leading-3" />
                    </div>
                </div>

            </Container>
        </section>
    )
};

export default Member;
