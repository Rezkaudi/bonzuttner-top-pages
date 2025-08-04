"use client"

import { Image } from "@nextui-org/react";
import Container from "@/shared-components/Container";
import ReadMoreBtn from "@/shared-components/ReadMoreBtn";
import Line from "./components/Line";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const Service = () => {
    const t = useTranslations('home');
    const nav = useTranslations('navigation');
    const locale = useLocale();

    return (
        <section className="bg-[#F5F5F5] lg:min-h-[500px]" id="service">
            <Container className="py-8 lg:py-40">
                <div className="flex items-center justify-between w-full lg:flex-row flex-col gap-y-10">
                    <div className="lg:flex-1 w-full">
                        <h2 className="font-medium text-xl lg:text-5xl">{t('serviceTitle')}</h2>
                        <p className="mt-5 font-normal text-xs lg:text-base max-w-xl">
                            {t('serviceDescription')}
                        </p>
                        <ReadMoreBtn className=" hidden lg:inline-block leading-3" href={`/${locale}/service`} />
                    </div>
                    <div className="lg:flex-1 lg:ml-20 w-full">
                        <Line variant="two" />
                        <Link href={"#"} className="flex items-center justify-between py-5 pl-10">
                            <span className="font-medium text-base lg:text-xl">{nav('productDev')}</span>
                            <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                        </Link>
                        <Line variant="two" />

                        <Link href={"#"} className="flex items-center justify-between py-5 pl-10">
                            <span className="font-medium text-base lg:text-xl">{nav('handsOnSupport')}</span>
                            <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                        </Link>
                        <Line variant="two" />

                        <Link href={`/${locale}/creative`} className="flex items-center justify-between py-5 pl-10">
                            <span className="font-medium text-base lg:text-xl">{nav('creative')}</span>
                            <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                        </Link>
                        <Line variant="two" />
                    </div>

                    <ReadMoreBtn className=" block lg:hidden leading-3 mt-0" href={`/${locale}/service`} />
                </div>
            </Container>
        </section>
    )
};

export default Service;