import Container from "@/shared-components/Container";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

const OtherContents = () => {
    const t = useTranslations('company.otherContents');

    return (
        <section>
            <Container className="flex items-center flex-col mt-[50px] lg:mt-[100px]">
                <h1 className="text-xl lg:text-[32px] font-medium leading-10 mb-6">
                    {t('sectionTitle')}
                </h1>
                <div className="w-full max-w-4xl gap-5 flex flex-1 sm:items-center items-start justify-between rounded-3xl flex-col sm:flex-row mb-[50px] lg:mb-20">
                    <div className="sm:w-2/5 w-full">
                        <div className="flex">
                            <hr className="w-[10%] border-[#00A1E9] mr-4"></hr>
                            <hr className="w-[85%] border-[#666666]"></hr>
                        </div>
                        <Link href="/story" className="flex mt-4 justify-between sm:justify-end">
                            <span className="w-full text-left text-lg lg:text-[20px] font-medium leading-7 ml-[15%]">
                                {t('story')}
                            </span>
                            <Image
                                src="/images/creative/arrow-right.svg"
                                alt={t('arrowAlt')}
                                width={23}
                                height={23}
                            />
                        </Link>
                    </div>
                    <div className="sm:w-2/5 w-full">
                        <div className="flex">
                            <hr className="w-[10%] border-[#00A1E9] mr-4"></hr>
                            <hr className="w-[85%] border-[#666666]"></hr>
                        </div>
                        <Link href="/members" className="flex mt-4 justify-between sm:justify-end">
                            <span className="w-full text-left text-lg lg:text-[20px] font-medium leading-7 ml-[15%]">
                                {t('member')}
                            </span>
                            <Image
                                src="/images/creative/arrow-right.svg"
                                alt={t('arrowAlt')}
                                width={23}
                                height={23}
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default OtherContents;