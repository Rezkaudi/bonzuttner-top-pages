import Container from "@/shared-components/Container";
import Image from "next/image";
import React from "react";
import { useTranslations } from 'next-intl';

const TheFuture = () => {
    const t = useTranslations('story.theFuture');

    return (
        <section className=" my-[50px] lg:my-20">
            <Container>
                <div className="flex items-start lg:items-center justify-center flex-col lg:flex-row h-[400px]">
                    <div className="relative flex-1 lg:w-1/3 flex items-start justify-start flex-col h-full space-y-12">
                        <h2 className="text-xl lg:text-4xl font-medium flex items-center justify-start gap-5">
                            <span className="bg-[#00A1E9] w-12 h-[1px]"></span>
                            <span>{t('title')}</span>
                        </h2>
                        <p className="text-lg lg:text-3xl font-normal z-10 lg:pl-[70px]">
                            {t('motto').split("\n").map((item, index) =>
                                <span className="block" key={index}>{item}</span>
                            )}
                        </p>
                        <Image src="/images/syria.svg" alt="syria" fill className="absolute top-1/2 left-0 -z-10" />
                    </div>
                    <div className="flex-1 lg:w-2/3 flex items-center">
                        {t('description').split("\n").map((item, index) =>
                            <p className="text-xs lg:text-base" key={index}>{item}</p>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default TheFuture;
