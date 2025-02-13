"use client"

import { Image } from "@nextui-org/react";
import Container from "@/shared-components/Container";
import ReadMoreBtn from "@/shared-components/ReadMoreBtn";
import Line from "./components/Line";

const Service = () => {
    return (
        <section className="bg-[#F5F5F5] lg:min-h-[500px]" id="service">
            <Container className="py-40">
                <div className="flex items-center justify-between w-full lg:flex-row flex-col gap-y-10">
                    <div className="lg:flex-1 w-full">
                        <h2 className="font-medium text-5xl">OUR SERVICE</h2>
                        <p className="mt-5 font-normal text-base max-w-xl">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
                        <ReadMoreBtn />
                    </div>
                    <div className="lg:flex-1 lg:ml-20 w-full">
                        <Line />
                        <div className="flex items-center justify-between py-5 pl-10">
                            <span className="font-medium text-xl">こちらにサービス名が入ります。</span>
                            <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                        </div>
                        <Line />

                        <div className="flex items-center justify-between py-5 pl-10">
                            <span className="font-medium text-xl">こちらにサービス名が入ります。</span>
                            <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                        </div>
                        <Line />

                        <div className="flex items-center justify-between py-5 pl-10">
                            <span className="font-medium text-xl">こちらにサービス名が入ります。</span>
                            <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                        </div>
                        <Line />

                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Service;
