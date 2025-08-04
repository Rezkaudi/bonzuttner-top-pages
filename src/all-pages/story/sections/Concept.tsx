
import Container from "@/shared-components/Container";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Concept = () => {
    const t = useTranslations('story.concept');
    return (
        <section className="bg-[#F5F5F5]">
            <Container className="py-[75px] space-y-3">
                <h2 className="text-xl lg:text-4xl font-medium flex items-center justify-start gap-5">
                    <span className="bg-[#00A1E9] w-12 h-[1px]"></span>
                    <span>{t('title')}</span>
                </h2>
                <div className="lg:ml-[70px] space-y-3">
                    <p className="text-[#0092BE] text-sm lg:text-lg font-medium">{t('subtitle')}</p>

                    <h3 className="text-lg   lg:text-3xl font-medium">{t('heading')}</h3>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-11 pt-8">
                        <div className=" w-full lg:w-[650px] h-[400px] flex items-center justify-center">
                            <div className="lg:w-1/2 w-[165px] h-full relative">
                                <Image src="/images/maher.png" alt="" fill className=" object-cover" />
                            </div>
                            <div className="lg:w-1/2 w-[165px] h-full relative">
                                <Image src="/images/alex.png" alt="" fill className=" object-cover" />
                            </div>
                        </div>
                        <div className="w-full">
                            {t('description').split("\n").map((item, index) =>
                                <p key={index} className="text-xs lg:text-base font-normal">{item}</p>
                            )}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
};

export default Concept;
