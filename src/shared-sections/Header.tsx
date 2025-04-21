"use client";
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
// import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import menuItems from "@/data/menuItems.json"

const Header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev)


    return (
        <Navbar
            isBordered
            maxWidth="full"
            className="bg-[#00A1E9] h-24 px-6"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >

            {/* logo */}
            <NavbarContent justify="center" onClick={() => setIsMenuOpen(false)}>
                <NavbarBrand className="flex items-center justify-center">
                    <Link href="/" className="flex items-center">
                        <Image src="/images/bonzuttner-logo.png" width={120} height={50} alt="BonZuttner" />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* burger */}
            <NavbarContent justify="end">
                <NavbarMenuToggle className="w-[50px] h-[50px]" icon={<Image src="/images/menu.svg" width={50} height={50} alt="menu" />} />
            </NavbarContent>

            {/* mega menu*/}
            <NavbarMenu className="overflow-hidden fixed top-0 left-0 inset-0 bottom-0 bg-cyan-400 text-white w-full z-50 h-screen menu">
                <div className="w-full h-full">
                    {/* Close Button */}
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-10 p-2 hover:bg-cyan-500 rounded-full"
                    >
                        <Image src="/images/close.svg" alt="close" width={50} height={50} />
                    </button>

                    {/*mega Menu  */}
                    <div className="flex items-center justify-between w-full h-full">
                        <div className="flex-1 max-w-[600px] h-full relative bg-slate-500">
                            <Image src="/images/megaImage.png" fill className="rounded-none object-cover" alt="megaImage" />
                        </div>

                        <div className="h-full flex-1 flex items-center justify-center">

                            <div className="mx-auto w-full h-full max-w-[900px] flex items-start flex-col gap-12 justify-center pl-[5%]">
                                <Link href="/" onClick={toggleMenu}>
                                    <Image src="/images/bonzuttner-logo.png" width={140} height={58} alt="BonZuttner" />
                                </Link>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                                    <div className="space-y-8">
                                        {menuItems.slice(0, 5).map((item) => (
                                            <NavbarMenuItem key={item.title} className="border-b border-white pb-3">
                                                <Link href={item.href} onClick={toggleMenu} className="block">
                                                    <h2 className="text-2xl font-medium mb-1">
                                                        {item.title}
                                                    </h2>
                                                    <p className="text-[10px] font-normal">{item.subtitle}</p>
                                                </Link>
                                                {item.title === "OUR SERVICE" && (
                                                    <div className="pl-8 mt-4 space-y-2">
                                                        {item.items?.map((subItem, index) => (
                                                            <Link href={subItem.href} onClick={toggleMenu} key={index} className="cursor-pointer block">― {subItem.title}</Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </NavbarMenuItem>
                                        ))}
                                    </div>
                                    <div className="space-y-8">
                                        {menuItems.slice(5).map((item) => (
                                            <NavbarMenuItem key={item.title} className="border-b border-white pb-3">
                                                <Link href={item.href} onClick={toggleMenu} className="block">
                                                    <h2 className="text-2xl font-medium mb-1">
                                                        {item.title}
                                                    </h2>
                                                    <p className="text-[10px] font-normal">{item.subtitle}</p>
                                                </Link>
                                            </NavbarMenuItem>
                                        ))}
                                        {/* Footer Links */}
                                        <div className="pt-8 grid grid-cols-2  gap-8">
                                            <Link onClick={toggleMenu} href="/" className="text-sm ">
                                                プライバシーポリシー
                                            </Link>
                                            <Link onClick={toggleMenu} href="/" className="text-sm ">
                                                個人情報の取り扱いについて
                                            </Link>
                                            <Link onClick={toggleMenu} href="https://www.instagram.com/bonzuttner/" target='_blank' className="">
                                                <Image src={"/images/insta.svg"} alt="insta" width={24} height={24} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </NavbarMenu>

        </Navbar>
    );
}

export default Header;

