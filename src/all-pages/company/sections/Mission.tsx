import Container from "@/shared-components/Container";
import React from "react";
import { useTranslations } from 'next-intl';

const Mission = () => {
    const t = useTranslations('company.mission');

    const data = [
        {
            id: "1",
            title: t('mission.title'),
            subTitle: t('mission.subTitle'),
            content: t('mission.content')
        },
        {
            id: "2",
            title: t('vision.title'),
            subTitle: t('vision.subTitle'),
            content: t('vision.content')
        },
        {
            id: "3",
            title: t('value.title'),
            subTitle: t('value.subTitle'),
            content: t('value.content')
        }
    ];

    return (
        <section className="bg-[#00A1E9]">
            <Container className="py-[50px] lg:py-[110px]">
                <div className="w-full space-y-7 lg:space-y-12">
                    <h2 className="flex items-center text-white justify-start">
                        <hr className="w-[50px] border-white mr-4"></hr>
                        <span className="font-medium text-xl lg:text-4xl">
                            {t('sectionTitle')}
                        </span>
                    </h2>
                    <div className="max-w-5xl mx-auto text-base text-black font-normal bg-white py-6 lg:py-12 px-2 text-center space-y-8">
                        {data.map(item =>
                            <div key={item.id} className="space-y-3">
                                <h3 className="text-lg lg:text-3xl font-medium text-[#00A1E9]">{item.title}</h3>
                                <h4 className="text-base lg:text-xl font-medium">{item.subTitle}</h4>
                                <p className="text-left max-w-2xl mx-auto text-xs lg:text-base">{item.content}</p>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Mission;