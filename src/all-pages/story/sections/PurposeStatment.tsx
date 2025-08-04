import React from "react";
import Container from "@/shared-components/Container";
import { useTranslations } from 'next-intl';

const PurposeStatment = () => {
    const t = useTranslations('story.purposeStatement');
    return (
        <section className="bg-[#00A1E9]">
            <Container className="py-[75px] space-y-3">
                <h2 className="text-lg lg:text-4xl font-medium flex items-center justify-start gap-5 text-white">
                    <span className="bg-white w-12 h-[1px]"></span>
                    <span>{t('title')}</span>
                </h2>
                <div className="sm:px-[70px] space-y-10 w-full block ">
                    <h3 className="text-lg lg:text-3xl font-medium text-white">{t('heading')}</h3>
                    <div className="w-full bg-white mx-auto px-4 py-12 space-y-8 text-center">
                        <h3>{t('refugeeTitle')}</h3>
                        <div className="w-[300px] h-[300px] rounded-full flex flex-col gap-2 items-center justify-center bg-[#00A1E91A] mx-auto">
                            <p className="text-[#FFE300]">{t('restart')}</p>
                            <p className="text-[#FFE300]">{t('recreate')}</p>
                            <p className="text-[#FFE300]">{t('rebuild')}</p>
                        </div>

                        <div>
                            <p>{t('rebuildDesc')}</p>
                            <p>{t('recreateDesc')}</p>
                            <p>{t('restartDesc')}</p>
                        </div>
                        <p>{t('mission')}</p>
                    </div>

                    <div>
                        {t('description').split("\n").map((item, index) =>
                            <p key={index} className="text-xs lg:text-base font-normal text-white text-center">{item}</p>
                        )}
                    </div>

                </div>
            </Container>
        </section>
    )
};

export default PurposeStatment;