"use client"

import { Button } from "@nextui-org/react";

import Container from "@/shared-components/Container";
import Image from "next/image";
import Link from "next/link";


const Contact = () => {
    return (
        <section className="py-24" id="contact">
            <Container className="w-full flex items-center justify-center">
                <div className="bg-[#F5F5F5] w-full max-w-4xl px-32 py-14 flex sm:items-center items-start justify-between rounded-3xl flex-col sm:flex-row gap-y-3">
                    <div className="space-y-1">
                        <h2 className="font-normal text-4xl">CONTACT</h2>
                        <p className="font-normal text-base">お気軽にお問い合わせください</p>
                    </div>
                    <Button as={Link} href="/contact" className="bg-[#00A1E9] text-white py-4 h-[60px] rounded-[30px]">
                        <span> フォームでのお問い合わせ</span>
                        <Image src={'/images/arrow-left.svg'} alt="" width={10} height={20} />
                    </Button>
                </div>
            </Container>
        </section>
    )
};

export default Contact;
