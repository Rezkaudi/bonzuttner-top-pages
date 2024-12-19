"use client";
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Image } from "@nextui-org/react";

const Header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 1, name: "STORY", href: "/story" },
        { id: 2, name: "SERVICE", href: "#service" },
        { id: 3, name: "WORKS", href: "#works" },
        { id: 4, name: "RECRUIT", href: "#recruit" },
        { id: 5, name: "MEMBER", href: "/members" },
        { id: 6, name: "COMPANY", href: "#company" },
        { id: 7, name: "CONTACT", href: "#contact" },
    ];

    return (
        <Navbar
            isBordered
            maxWidth="full"
            className="bg-[#00A1E9] h-24 px-6"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >

            {/* logo */}
            <NavbarContent justify="center" onClick={() => { setIsMenuOpen(false) }}>
                <NavbarBrand className="flex items-center justify-center">
                    <Link href="/" className="flex items-center">
                        <Image src="/images/bonzuttner-logo.png" alt="BonZuttner" />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* nav items */}
            <NavbarContent className="hidden lg:flex gap-7" justify="center">
                {navItems.map(item => (
                    <NavbarItem key={item.id}>
                        <Link
                            color="foreground"
                            href={item.href}
                            className="flex items-center text-white font-bold text-base"
                        >
                            <motion.span
                                key={item.id}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.span>

                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* burger */}
            <NavbarContent className="lg:hidden" justify="end">
                <NavbarMenuToggle />
            </NavbarContent>

            {/* mobile menu*/}
            <NavbarMenu className="pt-28 overflow-hidden">
                {navItems.map(item => (
                    <NavbarMenuItem key={item.id} onClick={() => { setIsMenuOpen(prev => !prev) }}>
                        <Link
                            className="w-full flex items-center text-lg font-semibold text-[#00A1E9] py-4"
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
}

export default Header;






