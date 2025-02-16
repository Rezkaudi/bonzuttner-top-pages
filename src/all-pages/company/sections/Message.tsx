import Container from "@/shared-components/Container";
import Image from "next/image";
import React from "react";

const Message = () => {
    const p1 = `私がこの会社を立ち上げた背景には、難民支援のボランティア活動を通じて目の当たりにした現実があります。シリアの内戦による経済危機の中、多くの人々が高いITスキルを持ちながらも、仕事を得る機会がなく、不当に低い報酬しか受け取れない状況にありました。\n しかし、彼らの持つ技術は世界に通用するものです。\n この才能を適正に評価し、彼らが誇りを持って働ける環境をつくること。そして、社会に貢献しながら、彼ら自身が次の世代の仲間を助けられる仕組みを生み出すこと。その想いから、2019年にBonZuttnerを設立しました。\n"難民"とは、ただのラベルに過ぎません。彼らは、私にとって友人であり、隣人であり、共に未来を創る仲間です。文化や国籍の違いは関係なく、互いに尊重し合いながら、一緒に成長できる場をつくりたい。\n BonZuttnerは、システム開発を軸に、社会問題の解決に挑戦する会社です。これからも、未来に向けて新たなサービスを生み出し、難民問題をはじめとする社会課題を解決する架け橋となる存在を目指します。\n 私たちの想いに共感し、新しい世界に飛び込みたい方。異文化を楽しみながら、一緒に挑戦したい方。ぜひ、BonZuttnerの仲間として、共に未来を創りましょう。`


    return (
        <section className="bg-white">
            <Container className="py-[110px]">
                <div className="w-full flex items-start justify-center gap-24">

                    <div className="flex items-start justify-center gap-5">
                        <span className=" text-3xl font-black" style={{ "writingMode": "vertical-lr" }}>MESSAGE</span>
                        <div className="relative w-[400px] h-[500px]">
                            <Image src="/images/ceo.png" className=" object-cover" fill alt="ceo" />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-medium">難民ではなく、仲間として。世界を変える挑戦を。</h2>
                        <div className=" space-y-5 text-base font-normal">
                            {
                                p1.split('\n').map((item, index) =>
                                    <p key={index}>{item}</p>
                                )
                            }
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Message;
