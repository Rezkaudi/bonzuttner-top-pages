import Container from "@/shared-components/Container";
import React from "react";

const Hero = () => {
    const p1 = "BonZuttnerでは⽣まれた国や育った環境が異なっても、私たちはみな、夢を追い、生活を楽しみ、\n 社会に貢献したいという共通の想いを持つ人たちの集団です。\n さまざまな背景を持ちながらも、共に笑い、学び、成長し続ける仲間たちを紹介します。"
    return (
        <section className="bg-[#F5F5F5]">
            <Container>
                <div className="h-48 lg:h-80 flex items-start mt-8 lg:items-center justify-between w-full ">
                    <div className="space-y-3">
                        <h1 className="text-[26px] lg:text-[40px] font-medium">Members</h1>
                        <span className="text-xs lg:text-base font-normal block">メンバー紹介</span>
                    </div>
                    <div className="text-xs font-normal">
                        <span className="text-[#ADADAD]">TOP - </span>
                        <span>MEMBER</span>
                    </div>
                </div>
            </Container>
            <div className="bg-[#00A1E9] px-5 py-20 flex items-center justify-center flex-col text-white space-y-10 w-full text-center">
                <h2 className="max-w-[445px] text-xl lg:text-3xl font-medium">異なる背景が織りなす、新しい価値を創造するチームです。</h2>
                <div>
                    {p1.split("\n").map((item, index) =>
                        <p className="text-xs lg:text-base font-normal" key={index}>{item}</p>
                    )}
                </div>

            </div>

        </section>
    )
};

export default Hero;
