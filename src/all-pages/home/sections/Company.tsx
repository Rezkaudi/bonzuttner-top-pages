"use client"

import Image from "next/image";

import Container from "@/shared-components/Container";

const Company = () => {
    return (
        <section className="bg-[#00A1E9]" id="company">
            <Container className="w-full pr-6 xl:pr-0">
                <div className="py-24 flex items-center xl:items-start justify-between gap-12 w-full flex-col xl:flex-row">
                    <div className="space-y-8 xl:w-1/3 w-full">
                        <h2 className="font-medium text-white text-4xl">COMPANY</h2>
                        <p className="font-normal text-white text-base">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
                    </div>

                    <div className="flex items-center justify-center sm:flex-row flex-col gap-y-3">
                        <div className="relative lg:rounded-s-lg lg:w-[450px] lg:h-[500px] w-[300px] h-[350px]">
                            <Image fill src="/images/about-us.png" alt="about-us" />
                            <div className="absolute bottom-0 p-11">
                                <h3 className="font-bold text-3xl text-white">ABOUT US</h3>
                                <p className="font-normal text-base text-white mt-2">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
                                <Image className="ml-auto" src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                            </div>
                        </div>
                        <div className="relative lg:rounded-s-lg lg:w-[450px] lg:h-[500px] w-[300px] h-[350px]">
                            <Image fill src="/images/recruit.png" alt="recruit" />
                            <div className="absolute bottom-0 p-11">
                                <h3 className="font-bold text-3xl text-white">RECRUIT</h3>
                                <p className="font-normal text-base text-white mt-2">この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
                                <Image className="ml-auto" src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Company;
