"use client"

import { Image } from "@nextui-org/react";
import Container from "@/shared-components/Container";
import ReadMoreBtn from "@/shared-components/ReadMoreBtn";
import Line from "./components/Line";
import Link from "next/link";

const Service = () => {
    return (
        <section className="bg-[#F5F5F5] lg:min-h-[500px]" id="service">
            <Container className="py-40">
                <div className="flex items-center justify-between w-full lg:flex-row flex-col gap-y-10">
                    <div className="lg:flex-1 w-full">
                        <h2 className="font-medium text-5xl">OUR SERVICE</h2>
                        <p className="mt-5 font-normal text-base max-w-xl">BonZuttnerは、最先端のテクノロジーと創造性で、お客様のビジネス課題を発見・解決すると共に、難民問題の解決にも寄与するサービスを提供しています。『Artificial Intelligence』『Internet of Things』『Creative』という3つの軸で、テクノロジーと想像力を活かして、社会とビジネスに新しい価値を生み出します。</p>
                        <ReadMoreBtn />
                    </div>
                    <div className="lg:flex-1 lg:ml-20 w-full">
                        <Line variant="two" />
                        <Link href={"/"} className="flex items-center justify-between py-5 pl-10">
                            <span className="font-medium text-xl">Artificial Intelligence</span>
                            <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                        </Link>
                        <Line variant="two" />

                        <Link href={"/"} className="flex items-center justify-between py-5 pl-10">
                            <span className="font-medium text-xl">Internet of Things</span>
                            <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                        </Link>
                        <Line variant="two" />

                        <Link href={"/"} className="flex items-center justify-between py-5 pl-10">
                            <span className="font-medium text-xl">Creative</span>
                            <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                        </Link>
                        <Line variant="two" />

                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Service;
