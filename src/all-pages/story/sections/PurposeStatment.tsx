import React from "react";
import Container from "@/shared-components/Container";

const PurposeStatment = () => {
    const p1 = "We are not refugees, but Returnees, Rebui lders, Recreators and Restar ters. \n 和訳にすると”「再構築」「再創造」「再出発」をめざし「旅」をする者”という形で表現をしています。 \n 世界では常に変化があり、新陳代謝が⾏われているのは⾃分たちの社会だけではありません。 \n 難⺠だってそれは同じ。 \n 私たちボンズットナーはこの想いを胸に秘め、 \n 誠⼼誠意お客様と向き合っていきます。"
    return (
        <section className="bg-[#00A1E9]">
            <Container className="py-[75px] space-y-3">
                <h2 className="text-lg lg:text-4xl font-medium flex items-center justify-start gap-5 text-white">
                    <span className="bg-white w-12 h-[1px]"></span>
                    <span>PURPOSE STATMENT</span>
                </h2>
                <div className="sm:px-[70px] space-y-10 w-full block ">
                    <h3 className="text-lg lg:text-3xl font-medium text-white">3つの「Re.」</h3>
                    <div className="w-full bg-white mx-auto px-4 py-12 space-y-8 text-center">
                        <h3>Refugee</h3>
                        <div className="w-[300px] h-[300px] rounded-full flex flex-col gap-2 items-center justify-center bg-[#00A1E91A] mx-auto">
                            <p className="text-[#FFE300]">Restart</p>
                            <p className="text-[#FFE300]">Recreate</p>
                            <p className="text-[#FFE300]">Rebuild</p>
                        </div>

                        <div>
                            <p>Rebuild : 新しい⽣活や環境、ご縁を再構築</p>
                            <p>Recreate : 新しい未来を創造</p>
                            <p>Restart : Rebuild・Recreateの後、新たなスタートへ。</p>
                        </div>
                        <p>社会の多様性を引き出すために、「難⺠」というラベルを剥がし、皆が認め合える企業を。</p>
                    </div>

                    <div>
                        {p1.split("\n").map((item, index) =>
                            <p key={index} className="text-xs lg:text-base font-normal text-white text-center">{item}</p>
                        )}
                    </div>

                </div>
            </Container>
        </section>
    )
};

export default PurposeStatment;
