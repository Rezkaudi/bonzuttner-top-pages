import Container from "@/shared-components/Container";
import Image from "next/image";
import React from "react";

const TheFuture = () => {
    const p1 = "To be able to hold hands,\n look forward,\n and gaze into the light."
    const p2 = "私たちボンズットナーが⽬指す先は、「⼿を携え、前を向き、光を⾒つめられる存在」となることです。\n それは難⺠だろうが⽇本⼈だろうが⼈間存在として、⼈々が等しく、そして最低限の権利や⽣活を享受する社会を作り上げ、苦しみの渦中にある⼈を救うことを⽬的とした企業です。私たちは常に成⻑し続け、当事者意識とプロ意識を持ち、スタッフやお客様、⾒ていただける⽅等、全てに関わる⼈たちに寄り添い、皆さまで幸せになれる企業を⽬指していきます。"

    return (
        <section className=" my-[50px] lg:my-20">
            <Container>
                <div className="flex items-start lg:items-center justify-center flex-col lg:flex-row h-[400px]">
                    <div className="relative flex-1 lg:w-1/3 flex items-start justify-start flex-col h-full space-y-12">
                        <h2 className="text-xl lg:text-4xl font-medium flex items-center justify-start gap-5">
                            <span className="bg-[#00A1E9] w-12 h-[1px]"></span>
                            <span>THE FUTURE</span>
                        </h2>
                        <p className="text-lg lg:text-3xl font-normal z-10 lg:pl-[70px]">
                            {p1.split("\n").map((item, index) =>
                                <span className="block" key={index}>{item}</span>
                            )}
                        </p>
                        <Image src="/images/syria.svg" alt="syria" fill className="absolute top-1/2 left-0 -z-10" />
                    </div>
                    <div className="flex-1 lg:w-2/3 flex items-center">
                        {p2.split("\n").map((item, index) =>
                            <p className="text-xs lg:text-base" key={index}>{item}</p>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default TheFuture;
