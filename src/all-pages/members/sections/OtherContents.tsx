import Container from "@/shared-components/Container";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const OtherContents = () => {
    return (
        <section>
            <Container className="flex items-center flex-col mt-[50px]">
                <h1 className="text-[20px] lg:text-[32px] font-medium leading-10 mb-6">
                    OTHER CONTENTS
                </h1>
                <div className="w-full max-w-4xl gap-5 flex flex-1 sm:items-center items-start justify-between rounded-3xl flex-col sm:flex-row mb-20">
                    <div className="sm:w-2/5 w-full">
                        <div className="flex">
                            <hr className="w-[10%] border-[#00A1E9] mr-4"></hr>
                            <hr className="w-[85%] border-[#666666]"></hr>
                        </div>
                        <Link href={"/story"} className="flex mt-4 justify-between sm:justify-end">
                            <span className="w-full text-left  text-lg lg:text-[20px] font-medium leading-7 ml-[15%]">
                                STORY
                            </span>
                            <Image
                                src="/images/creative/arrow-right.svg"
                                alt="arrow.right"
                                width={23}
                                height={23}
                            />
                        </Link>
                    </div>
                    <div className="sm:w-2/5 w-full">
                        <div className="flex">
                            <hr className="w-[10%] border-[#00A1E9] mr-4"></hr>
                            <hr className="w-[85%] border-[#666666]"></hr>
                        </div>
                        <Link href={"/company"} className="flex mt-4 justify-between sm:justify-end ">
                            <span className="w-full text-left  text-lg lg:text-[20px] font-medium leading-7 ml-[15%]">
                                COMPANY
                            </span>
                            <Image
                                src="/images/creative/arrow-right.svg"
                                alt="arrow.right"
                                width={23}
                                height={23}
                            />
                        </Link>
                    </div>
                </div>

            </Container>

        </section>
    )
};

export default OtherContents;
