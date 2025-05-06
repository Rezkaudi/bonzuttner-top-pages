"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import menuItems from "@/data/menuItems.json";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <header className="bg-[#00A1E9] h-24 px-[50px] w-full flex items-center justify-between sticky z-50 top-0">
            {/* Logo Centered */}
            <div className="flex justify-center" onClick={() => setIsMenuOpen(false)}>
                <Link href="/" className="flex items-center">
                    <Image src="/images/bonzuttner-logo.png" width={120} height={50} alt="BonZuttner" />
                </Link>
            </div>

            {/* Burger Button Right */}
            <div className="flex justify-end">
                <button onClick={toggleMenu} className="w-[50px] h-[50px]">
                    <Image src="/images/menu.svg" width={50} height={50} alt="menu" />
                </button>
            </div>

            {/* Mega Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full min-h-full h-full bg-cyan-400 text-white z-50 overflow-y-auto">
                    {/* Close Button */}
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-7 p-2 hover:bg-cyan-500 rounded-full"
                    >
                        <Image src="/images/close.svg" alt="close" width={50} height={50} />
                    </button>

                    <Link href="/" onClick={toggleMenu} className="block ml-7 xl:hidden">
                        <Image src="/images/bonzuttner-logo.png" width={140} height={58} alt="BonZuttner" />
                    </Link>

                    <div className="flex items-center justify-between w-full h-full">
                        {/* Left Image */}
                        <div className="flex-1 max-w-[600px] h-full relative bg-slate-500 hidden xl:block">
                            <Image src="/images/megaImage.png" fill className="rounded-none object-cover" alt="megaImage" />
                        </div>

                        {/* Right Content */}
                        <div className="h-full flex-1 flex items-center justify-center">
                            <div className="mx-auto w-full h-full xl:h-fit  max-w-[900px] flex items-start flex-col gap-12 justify-center px-10">
                                <Link href="/" onClick={toggleMenu} className=" hidden xl:block">
                                    <Image src="/images/bonzuttner-logo.png" width={140} height={58} alt="BonZuttner" />
                                </Link>

                                <div className="grid grid-cols-1 sm:grid-cols-2 h-full gap-8 sm:gap-24 w-full pt-10 xl:pt-0">
                                    <div className="space-y-8 ">
                                        {menuItems.slice(0, 5).map((item) => (
                                            <div key={item.title} className="border-b border-white pb-3">
                                                <Link href={item.href} onClick={toggleMenu} className="block">
                                                    <h2 className="text-2xl font-medium mb-1">{item.title}</h2>
                                                    <p className="text-[10px] font-normal">{item.subtitle}</p>
                                                </Link>
                                                {item.title === "OUR SERVICE" && item.items && (
                                                    <div className="xl:pl-8 pl-1 mt-4 space-y-2">
                                                        {item.items.map((subItem, index) => (
                                                            <Link href={subItem.href} onClick={toggleMenu} key={index} className="cursor-pointer block">― {subItem.title}</Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-8">
                                        {menuItems.slice(5).map((item) => (
                                            <div key={item.title} className="border-b border-white pb-3">
                                                <Link href={item.href} onClick={toggleMenu} className="block">
                                                    <h2 className="text-2xl font-medium mb-1">{item.title}</h2>
                                                    <p className="text-[10px] font-normal">{item.subtitle}</p>
                                                </Link>
                                            </div>
                                        ))}
                                        {/* Footer Links */}
                                        <div className="py-8 grid grid-cols-2 gap-8">
                                            <Link onClick={toggleMenu} href="/" className="text-sm">プライバシーポリシー</Link>
                                            <Link onClick={toggleMenu} href="/" className="text-sm">個人情報の取り扱いについて</Link>
                                            <Link onClick={toggleMenu} href="https://www.instagram.com/bonzuttner/" target="_blank">
                                                <Image src={"/images/insta.svg"} alt="insta" width={24} height={24} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
