
import Container from '@/shared-components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const Footer: React.FC = () => {
    const t = useTranslations('navigation');
    const footerT = useTranslations('footer');
    const locale = useLocale();

    return (
        <footer className='bg-[#252D3E] py-[60px]'>
            <Container className='w-full flex flex-col items-center justify-center text-white'>
                <div className='w-full flex items-center xl:items-start justify-center'>
                    <div className="mb-8 lg:w-1/2 space-y-5 flex items-center xl:items-start justify-center flex-col">
                        <div className=" ">
                            <Image src={"/images/logo-white.png"} width={178} height={40} alt='logo' />
                        </div>
                        <div className="text-sm text-white space-y-1">
                            <p>{footerT('companyName')}</p>
                            <p>{footerT('address1')}</p>
                            <p>{footerT('address2')}</p>
                        </div>
                        <a href="https://www.instagram.com/bonzuttner/" className="inline-block" target='_blank'>
                            <Image src={'/images/insta.svg'} width={24} height={24} alt='' />
                        </a>
                    </div>

                    {/* Navigation Grid */}
                    <div className=" hidden xl:grid grid-cols-3 w-1/2 justify-start">
                        <div className='w-[200px] space-y-5'>
                            <Link href={`/${locale}`} className="font-medium block">{t('top')}</Link>
                            <Link href={`/${locale}/story`} className="font-medium block">{t('story')}</Link>
                        </div>


                        <div className='w-[200px] space-y-5'>
                            <div>
                                <Link href={`/${locale}/#service`} className="font-medium block mb-2">{t('service')}</Link>
                                <ul className="text-sm text-white space-y-1 ml-1">
                                    <li>
                                        <Link href={"#"}>-{t('productDev')}</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>-{t('handsOnSupport')}</Link>
                                    </li>
                                    <li>
                                        <Link href={`/${locale}/creative`}>-{t('creative')}</Link>
                                    </li>
                                </ul>
                            </div>
                            <Link href={`/${locale}/recruit`} className="font-medium block">{t('recruit')}</Link>
                        </div>

                        <div className='w-[200px] space-y-5'>
                            <Link href={`/${locale}/topics`} className="font-medium block">{t('topics')}</Link>
                            <Link href={`/${locale}/members`} className="font-medium block">{t('member')}</Link>
                            <Link href={`/${locale}/company`} className="font-medium block">{t('company')}</Link>
                            <Link href={`/${locale}/contact`} className="font-medium block">{t('contact')}</Link>
                        </div>

                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="w-full border-t border-white flex flex-col-reverse md:flex-row justify-between items-center text-xs text-white">
                    <p className='mt-5'>{footerT('copyright')}</p>
                    <div className="flex space-x-4 mt-5">
                        <Link href={`/${locale}/privacy-policy`} className="hover:text-white">{footerT('privacyPolicy')}</Link>
                        <Link href={`/${locale}/privacy-policy`} className="hover:text-white">{footerT('personalInfo')}</Link>
                    </div>
                </div>
            </Container>
        </footer>

    );
};

export default Footer;