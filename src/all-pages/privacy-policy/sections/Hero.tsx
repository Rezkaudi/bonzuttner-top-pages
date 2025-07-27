import Container from "@/shared-components/Container";
import React from "react";

const Hero = () => {
    return (
        <section className="bg-[#F5F5F5]">
            <Container>
                <div className="h-[200px] lg:h-60 flex items-start mt-8 lg:mt-16 justify-between w-full ">
                    <div className="space-y-3">
                        <h1 className="text-[26px] lg:text-[40px] font-medium">Privacy Policy</h1>
                        <span className="text-xs lg:text-base font-normal block">個人情報保護の取り扱いについて</span>


                    </div>
                    <div className="text-xs font-normal">
                        <span className="text-[#ADADAD]">TOP -  </span>
                        <span>PRIVACY POLICY</span>
                    </div>

                </div>

            </Container>
        </section>
    )
};

export default Hero;
