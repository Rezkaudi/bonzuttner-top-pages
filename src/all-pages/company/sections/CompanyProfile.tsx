import Container from "@/shared-components/Container";
import React from "react";
import { useTranslations } from 'next-intl';

const CompanyProfile = () => {
    const t = useTranslations('company.profile');

    const data = [
        { id: "1", title: t('companyName.title'), content: t('companyName.content') },
        { id: "2", title: t('address.title'), content: t('address.content') },
        { id: "3", title: t('establishmentDate.title'), content: t('establishmentDate.content') },
        { id: "4", title: t('ceo.title'), content: t('ceo.content') },
        { id: "5", title: t('businessContent.title'), content: t('businessContent.content') },
        { id: "6", title: t('bank.title'), content: t('bank.content') },
        { id: "7", title: t('supportingOrganizations.title'), content: t('supportingOrganizations.content') }
    ];

    return (
        <section className="bg-[#F5F5F5]">
            <Container className="py-[50px] lg:py-[110px]">
                <div className="w-full space-y-8 lg:space-y-12">
                    <h2 className="flex items-center justify-start">
                        <hr className="w-[50px] border-[#00A1E9] mr-4"></hr>
                        <span className="font-medium text-xl lg:text-4xl">{t('sectionTitle')}</span>
                    </h2>
                    <div className="max-w-3xl mx-auto text-sm font-medium space-y-5">
                        {data.map(item => (
                            <div key={item.id} className="space-y-5">
                                <div className="flex items-center justify-center">
                                    <h3 className="w-1/3 text-xs lg:text-base">{item.title}</h3>
                                    <p className="w-2/3 text-xs lg:text-base">{item.content}</p>
                                </div>
                                <hr className="w-full border-[#C4C4C4]"></hr>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default CompanyProfile;