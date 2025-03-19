"use client"

import { Image } from "@nextui-org/react";

import Container from "@/shared-components/Container";
import Line from "./components/Line";
import ReadMoreBtn from "@/shared-components/ReadMoreBtn";
import Link from "next/link";

const Topics = () => {
    return (
        <section id="topics">
            <Container className="py-20">
                <h2 className="font-medium text-4xl">TOPICS</h2>
                <div className="mt-10 max-w-5xl w-full mx-auto">
                    <Line />
                    <Link href={`/topics/${"1"}`} className="flex items-center justify-start py-7">
                        <span className="font-normal text-sm mr-8">2025.01.01</span>
                        <span className="font-normal text-xs mr-8 py-1 px-7 border border-[#00A1E9] rounded-3xl">MEDIA</span>
                        <div className="flex-1">
                            <p className="line-clamp-1 max-w-[525px]">こちらにタイトルが入ります。お読みにならないでください。こちらに こちらにタイトルが入ります。お読みにならないでください。こちらに.</p>
                        </div>
                        <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                    </Link>
                    <Line />

                    <Link href={`/topics/${"1"}`} className="flex items-center justify-start py-7">
                        <span className="font-normal text-sm mr-8">2025.01.01</span>
                        <span className="font-normal text-xs mr-8 py-1 px-7 border border-[#00A1E9] rounded-3xl">MEDIA</span>
                        <div className="flex-1">
                            <p className="line-clamp-1 max-w-[525px]">こちらにタイトルが入ります。お読みにならないでください。こちらに こちらにタイトルが入ります。お読みにならないでください。こちらに.</p>
                        </div>
                        <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                    </Link>
                    <Line />

                    <Link href={`/topics/${"1"}`} className="flex items-center justify-start py-7">
                        <span className="font-normal text-sm mr-8">2025.01.01</span>
                        <span className="font-normal text-xs mr-8 py-1 px-7 border border-[#00A1E9] rounded-3xl">MEDIA</span>
                        <div className="flex-1">
                            <p className="line-clamp-1 max-w-[525px]">こちらにタイトルが入ります。お読みにならないでください。こちらに こちらにタイトルが入ります。お読みにならないでください。こちらに.</p>
                        </div>
                        <Image src="/images/arrow.svg" width={23} height={23} alt="arrow" />
                    </Link>

                    <Line />

                    <div className="w-full mt-12 flex items-center justify-center">
                        <ReadMoreBtn href="/topics" />
                    </div>

                </div>

            </Container>
        </section>
    )
};

export default Topics;
