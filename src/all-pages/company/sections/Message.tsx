import Container from "@/shared-components/Container";
import Image from "next/image";
import React from "react";
import { useTranslations } from 'next-intl';

const Message = () => {
    const t = useTranslations('company.message');

    return (
        <section className="bg-white">
            <Container className="py-[50px] xl:py-[110px]">
                <div className="w-full flex items-start justify-center gap-24 xl:flex-row flex-col">

                    <div className="flex items-center xl:items-start xl:flex-row flex-col justify-center gap-5 xl:w-fit w-full">
                        <span className="text-3xl font-black xl:block hidden" style={{ "writingMode": "vertical-lr" }}>
                            {t('sectionTitle')}
                        </span>

                        <span className="text-3xl font-black xl:hidden block">
                            {t('sectionTitle')}
                        </span>

                        <div className="relative w-[330px] xl:w-[400px] h-[415px] lg:h-[500px]">
                            <Image src="/images/ceo.png" className="object-cover" fill alt={t('ceoImageAlt')} />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-lg xl:text-3xl font-medium">
                            {t('title')}
                        </h2>
                        <div className="space-y-5 text-xs xl:text-base font-normal">
                            {t.rich('content', {
                                p: (chunks) => <p className="mb-5">{chunks}</p>
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Message;