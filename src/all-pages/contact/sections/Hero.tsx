import Container from "@/shared-components/Container";
import React from "react";

const Hero = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <Container>
                <div className="h-80 flex items-center justify-between w-full ">
                    <div className="space-y-3">
                        <h1 className="text-xl lg:text-[40px] font-medium">CONTACT</h1>
                        <span className="text-xs lg:text-base font-normal block">お問い合わせ</span>
                    </div>
                    <div className="text-xs font-normal">
                        <span className="text-[#ADADAD]">TOP - </span>
                        <span>CONTACT</span>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Hero;
