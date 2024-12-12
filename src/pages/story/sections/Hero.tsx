import Container from "@/shared-components/Container";
import Image from "next/image";
import React from "react";

const Hero = () => {
    const p = "難⺠という⾔葉から連想されるイメージは何でしょうか？\n「惨め」‧「可哀想」‧「⼤変」などネガティブなワードが思い浮かぶ⽇本⼈は多いと思います。\n しかし、私たちBonZutterはポジティブに考えており、\n 私たちと同じようにそれぞれ異なる名前や性格、趣味や特技を持つ「⼀⼈の⼈間」です。\n ⼈は⽣まれる国も育つ環境も選ぶことができません。\n ⽣まれた国や育った環境が違うだけで、私たちと同じように⽣活をしなければならない⼈間なのです。\n 私たちBonZutterはその固定観念を振り払い、難⺠でも楽しく⽣活し仕事ができる\n 「ソーシャルビジネス」企業です。\n 私たちのビジネスモデルは収益性と社会性が相反するビジネスは取り組まず、\n 社会問題の解決を優先的に考えたビジネスモデルです。\n 「世界を駆け回れるエネルギッシュさから新しい価値を作る」 \n ロゴに秘めた想いからこの先も難⺠でも楽しく⽣活できる世界観を \n このBonZutterから皆様へお届けします。"
    return (
        <section>
            <div className="flex flex-col h-fit  lg:flex-row items-start justify-center">
                <div className="flex-1 w-full relative aspect-video">
                    <Image src="/images/hero-story-1.png" className=" object-cover" alt="" fill />
                </div>
                <div className="flex-1 w-full relative aspect-video">
                    <Image src="/images/hero-story-2.png" className=" object-cover" alt="" fill />
                    <span className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl lg:text-[40px] font-medium text-white">Story</span>
                </div>
                <div className="flex-1 w-full relative aspect-video">
                    <Image src="/images/hero-story-3.png" className=" object-cover" alt="" fill />
                </div>
            </div>

            <div className="bg-gradient-to-b-from-transparent">
                <Container>
                    <div className="rounded-3xl bg-white w-full my-20 shadow-[0px_0px_8px_3px] shadow-[#0000001A]">
                        <div className="max-w-[750px]  mx-auto text-center p-5 text-base font-normal space-y-5">
                            <div className="w-full relative h-[100px] md:h-[280px]">
                                <Image src="/images/LOGO.png" className=" object-cover" alt="" fill />
                            </div>

                            <p className="font-medium text-2xl">〜難⺠でも楽しく⽣活できる世界観がこの会社にはある〜</p>
                            <p className="font-bold">This company has a worldview that even refugees can enjoy l iving in.</p>

                            <div>
                                {
                                    p.split("\n").map((item, index) =>
                                        <p key={index}>{item}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
};

export default Hero;
