"use client"

import Container from "@/shared-components/Container";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompanyOrigin = () => {

    const p1 = "『Bon（フランス語でよい，優れた，よくできた）』 \n 『Zutt（⽇本語で、ずっと）』 \n 『Er（英語で〜する⼈）』"
    const p2 = "善き⼈になろうとし続け、 \n そのように⾏動する⼈"
    const p3 = "会社名は、『ベルタ‧フォン‧ズットナー』から由来している 彼⼥は⼥性として初めてノーベル平和賞を受賞し、「平和」という概念の象徴として彼⼥に尊敬の意を表し、彼⼥の名前を拝借し、『BonZutter (ボンズットナー)』という社名を命名しました。\n 実社会には様々な争いごとや障害がある中でも、私たちはソーシャルビジネス企業として「⼼の安寧」を⼤切にしており、難⺠や流⺠でも⼀⼈の⼈間として職業スキルや稼ぐ⼒を失ってはいけませんし、アイデンティティや⽣活の芯が破壊されることがあってはいけません。 \n 私たちは前向きな姿勢で道徳観や倫理観をしっかり育み、善き⼈間になろうとしていく姿勢を常に持ち続け、「社会問題」の解決を⽬指していきます。"

    return (
        <section>
            <Container className="my-[75px] space-y-3">
                <h2 className="text-4xl font-medium flex items-center justify-start gap-5">
                    <span className="bg-[#00A1E9] w-12 h-[1px]"></span>
                    <span>COMPANY ORIGIN</span>
                </h2>
                <div className="ml-[70px] space-y-3">
                    <div>
                        {p1.split("\n").map((item, index) =>
                            <p key={index} className="text-[#0092BE] text-lg font-medium">{item}</p>
                        )}
                    </div>
                    <div>
                        {p2.split("\n").map((item, index) =>
                            <h3 key={index} className="text-3xl font-medium">{item}</h3>
                        )}
                    </div>

                    <div className="flex flex-col lg:flex-row items-start justify-center gap-11 pt-8">
                        <div className="relative w-full lg:w-[650px] h-[400px] ">
                            <Image src="/images/company-origin.png" alt="" fill className=" object-cover" />
                        </div>
                        <div className="space-y-8 w-full">
                            {p3.split("\n").map((item, index) =>
                                <p key={index} className="text-base font-normal">{item}</p>
                            )}
                            <Button as={Link} href="/company" className="text-white bg-[#00A1E9] px-6">COMPANY</Button>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
};

export default CompanyOrigin;
