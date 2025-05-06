"use client"

import { Button } from "@nextui-org/react";

import Container from "@/shared-components/Container";
import Image from "next/image";
import Link from "next/link";


const Contact = () => {
    return (
        <section className="py-24" id="contact">
            <Container className="w-full flex items-center justify-center">
                <div className="bg-[#F5F5F5] w-full max-w-4xl lg:px-32 py-14 flex items-center justify-between rounded-3xl flex-col lg:flex-row gap-y-3">
                    <div className=" space-y-3 lg:space-y-1">
                        <h2 className="font-normal text-xl lg:text-4xl text-center lg:text-left">CONTACT</h2>
                        <p className="font-normal text-xs lg:text-base">お気軽にお問い合わせください</p>
                    </div>
                    <Button as={Link} href="/contact" className="bg-[#00A1E9] text-white px-10 lg:py-4 mt-5 h-[60px] rounded-[30px]">
                        <span className="font-normal text-xs lg:text-base"> フォームでのお問い合わせ</span>
                        <Image src={'/images/arrow-left.svg'} alt="" width={10} height={20} />
                    </Button>
                </div>
            </Container>
        </section>
    )
};

export default Contact;
