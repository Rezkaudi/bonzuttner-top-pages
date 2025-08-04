
import Container from "@/shared-components/Container";
import { useTranslations } from 'next-intl';

const Inquiry = () => {
    const t = useTranslations('privacy');

    return (
        <section className="bg-white">
            <Container className="py-[50px] lg:py-[100px] max-w-[1200px] space-y-12">
                <p>{t('introduction')}</p>

                <div className=" space-y-2">
                    <p className="text-[24px]">{t('article1.title')}</p>
                    <p className="text-[16px]">{t('article1.content')}</p>
                </div>

                <div className=" space-y-2">
                    <p className="text-[24px]">{t('article2.title')}</p>
                    <p className="text-[16px]">{t('article2.content')}</p>
                </div>

                <div className=" space-y-2">
                    <p className="text-[24px]">{t('article3.title')}</p>
                    <p className="text-[16px]">{t('article3.intro')}</p>
                    {t('article3.items').split('\n').map((item, index) => (
                        <p key={index} className="text-[16px]">{item}</p>
                    ))}
                </div>

                <div className=" space-y-2">
                    <p className="text-[24px]">{t('article4.title')}</p>
                    {t('article4.content').split('\n').map((item, index) => (
                        <p key={index} className="text-[16px]">{item}</p>
                    ))}
                </div>

                <div className=" space-y-2">
                    <p className="text-[24px]">{t('article5.title')}</p>
                    <p className="text-[16px]">{t('article5.intro')}</p>
                    {t('article5.items').split('\n').map((item, index) => (
                        <div key={index} className="pl-10">
                            <p className="text-[16px]">{item}</p>
                        </div>
                    ))}
                    <p className="text-[16px]">{t('article5.conclusion')}</p>
                    {t('article5.exceptions').split('\n').map((item, index) => (
                        <div key={index} className="pl-10">
                            <p className="text-[16px]">{item}</p>
                        </div>
                    ))}
                </div>

                {[6, 7, 8, 9, 10].map((articleNum) => (
                    <div key={articleNum} className=" space-y-2">
                        <p className="text-[24px]">{t(`article${articleNum}.title`)}</p>
                        {t(`article${articleNum}.content`).split('\n').map((item, index) => (
                            <p key={index} className="text-[16px]">{item}</p>
                        ))}
                    </div>
                ))}


            </Container>
        </section>
    )
};

export default Inquiry;
