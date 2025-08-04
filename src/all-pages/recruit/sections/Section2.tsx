import Container from "@/shared-components/Container";
import { useTranslations } from 'next-intl';

const Section2 = () => {
        const t = useTranslations('recruit.section2');

        return (
                <section className="bg-white">
                        <Container className="py-[50px] lg:py-[100px]">
                                <div className="max-w-3xl mx-auto space-y-8 lg:space-y-10">
                                        <h2 className="font-medium text-xl lg:text-4xl  lg:text-left text-center">{t('title')}</h2>
                                        <div className="space-y-5 text-xs lg:text-base">
                                                {t('content').split('\n').map((item, index) =>
                                                        <p key={index} className="font-normal text-base">{item}</p>
                                                )}
                                        </div>
                                </div>
                        </Container>
                </section>

        )

}
export default Section2;

