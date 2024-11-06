"use client"

import { Button } from "@nextui-org/react";

import Container from "@/shared-components/Container";


const Contact = () => {
    return (
        <section className="py-24" id="contact">
            <Container className="w-full flex items-center justify-center">
                <div className="bg-[#F5F5F5] w-full max-w-4xl p-14 flex sm:items-center items-start justify-between rounded-3xl flex-col sm:flex-row gap-y-3">
                    <div className="space-y-1">
                        <h2 className="font-normal text-4xl">CONTACT</h2>
                        <p className="font-normal text-base">お気軽にお問い合わせください</p>
                    </div>
                    <Button className="bg-[#00A1E9] text-white">
                        フォームでのお問い合わせ  &#8250;
                    </Button>
                </div>
            </Container>
        </section>
    )
};

export default Contact;
