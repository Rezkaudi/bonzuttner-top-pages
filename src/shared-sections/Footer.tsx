
import Container from '@/shared-components/Container';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {

    return (
        <footer className='bg-[#252D3E] py-[60px]'>
            <Container className='w-full flex flex-col items-center justify-center text-white'>
                <div className='w-full flex items-center xl:items-start justify-center'>
                    <div className="mb-8 lg:w-1/2 space-y-5 flex items-center xl:items-start justify-center flex-col">
                        <div className=" ">
                            <Image src={"/images/logo-white.png"} width={178} height={40} alt='logo' />
                        </div>
                        <div className="text-sm text-white space-y-1">
                            <p>株式会社 ボンズットナー</p>
                            <p>東京都渋谷区恵比寿４丁目２０－３</p>
                            <p>恵比寿ガーデンプレイスタワー27F COEBI内</p>
                        </div>
                        <a href="https://www.instagram.com/bonzuttner/" className="inline-block" target='_blank'>
                            <Image src={'/images/insta.svg'} width={24} height={24} alt='' />
                        </a>
                    </div>

                    {/* Navigation Grid */}
                    <div className=" hidden xl:grid grid-cols-3 w-1/2 justify-start">
                        <div className='w-[200px] space-y-5'>
                            <Link href={'/'} className="font-medium block">TOP</Link>
                            <Link href={'/story'} className="font-medium block">STORY</Link>
                        </div>


                        <div className='w-[200px] space-y-5'>
                            <div>
                                <Link href={'/#service'} className="font-medium block mb-2">SERVICE</Link>
                                <ul className="text-sm text-white space-y-1 ml-1">
                                    <li>
                                        <Link href={"#"}>-Product Development</Link>
                                    </li>
                                    <li>
                                        <Link href={"#"}>-Hands-on Support</Link>
                                    </li>
                                    <li>
                                        <Link href={"/creative"}>-Creative</Link>
                                    </li>
                                </ul>
                            </div>
                            <Link href={'/recruit'} className="font-medium block">RECRUIT</Link>
                        </div>

                        <div className='w-[200px] space-y-5'>
                            <Link href={'/topics'} className="font-medium block">TOPICS</Link>
                            <Link href={'/members'} className="font-medium block">MEMBER</Link>
                            <Link href={'/company'} className="font-medium block">COMPANY</Link>
                            <Link href={'/contact'} className="font-medium block">CONTACT</Link>
                        </div>

                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="w-full border-t border-white flex flex-col-reverse md:flex-row justify-between items-center text-xs text-white">
                    <p className='mt-5'>Copyright © BonZuttner, Inc. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-5">
                        <Link href="/" className="hover:text-white">プライバシーポリシー</Link>
                        <Link href="/" className="hover:text-white">個人情報の取り扱いについて</Link>
                    </div>
                </div>
            </Container>
        </footer>

    );
};

export default Footer;