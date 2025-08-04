"use client"

import Container from "@/shared-components/Container";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from 'next-intl';

const CompanyOrigin = () => {
    const t = useTranslations('story.companyOrigin');
    const locale = useLocale();

    return (
        <section>
            <Container className="my-[50px] lg:my-[75px] space-y-3">
                <h2 className="text-xl lg:text-4xl font-medium flex items-center justify-start gap-5">
                    <span className="bg-[#00A1E9] w-12 h-[1px]"></span>
                    <span>{t('title')}</span>
                </h2>
                <div className="lg:ml-[70px] space-y-3">
                    <div>
                        {t('nameOrigin').split("\n").map((item, index) =>
                            <p key={index} className="text-[#0092BE] text-sm lg:text-lg font-medium">{item}</p>
                        )}
                    </div>
                    <div>
                        {t('meaning').split("\n").map((item, index) =>
                            <h3 key={index} className="text-lg lg:text-3xl font-medium">{item}</h3>
                        )}
                    </div>

                    <div className="flex flex-col lg:flex-row items-start justify-center gap-11 pt-8">
                        <div className="relative w-full lg:w-[650px] h-[400px] ">
                            <Image src="/images/company-origin.png" alt="" fill className=" object-cover" />
                        </div>
                        <div className="space-y-8 w-full">
                            {t('description').split("\n").map((item, index) =>
                                <p key={index} className="text-xs lg:text-base font-normal">{item}</p>
                            )}
                            <Button as={Link} href={`/${locale}/company`} className="text-white bg-[#00A1E9] px-6">{t('companyButton')}</Button>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
};

export default CompanyOrigin;
