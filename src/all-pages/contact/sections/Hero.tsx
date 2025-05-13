import Container from "@/shared-components/Container";
import React from "react";

const Hero = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <Container>
                <div className="h-[200px] lg:h-80 flex items-start mt-8 lg:mt-16 justify-between w-full ">
                    <div className="space-y-3">
                        <h1 className="text-[26px] lg:text-[40px] font-medium">CONTACT</h1>
                        <span className="text-xs lg:text-base font-normal block">お問い合わせ</span>

                        <p className="text-xs lg:text-base font-normal mt-5">必須事項をご記入の上、<br /> 最下部の「確認画面へ」ボタンを押してください。</p>

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
