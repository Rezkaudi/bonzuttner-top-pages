
import Container from "@/shared-components/Container";
import Image from "next/image";

const Concept = () => {
    const p1 = "私たちボンズットナーはWEB/ ITの⼒でお客様のビジネス課題を発⾒‧解決すると共に難⺠問題の解決にも寄与することを⽬的としております。 \n プログラミングを含めたWEB/ ITやブロックチェーン等の技術は世界共通⾔語であり、 \n 難⺠性を持つ私たちのエンジニアでも世界に通⽤する技術を有していることをお客様には肌で感じていただきたいです。 \n 私たちの仲間にはシリア復興にビジネスを通して貢献していきたいと考えていることから、 \n シリア⼈を筆頭とし、中東ITエンジニアに特化した企業として、お客様と誠⼼誠意向き合い、お客様のより良い未来を齎していきます。 \n 実際に⽇本側のクライアント様との打ち合わせやミーティングにも同席し、上流⼯程から下流⼯程まで多岐に渡る業務を⾏っていることから、WEB/ ITの技術の他にも難⺠性やエンパワーメントに触れていただき、「⼀⼈の⼈間」として是⾮コミュニケーションを取っていただきたいと考えております。"
    return (
        <section className="bg-[#F5F5F5]">
            <Container className="py-[75px] space-y-3">
                <h2 className="text-4xl font-medium flex items-center justify-start gap-5">
                    <span className="bg-[#00A1E9] w-12 h-[1px]"></span>
                    <span>CONCEPT</span>
                </h2>
                <div className="ml-[70px] space-y-3">
                    <p className="text-[#0092BE] text-lg font-medium">世界共通⾔語から難⺠の壁を取り払う</p>

                    <h3 className="text-3xl font-medium">⽇本から世界に誇れる⼈財を。</h3>

                    <div className="flex flex-col lg:flex-row items-start justify-center gap-11 pt-8">
                        <div className=" w-full lg:w-[650px] h-[400px] flex">
                            <div className="w-1/2 h-full relative">
                                <Image src="/images/maher.png" alt="" fill className=" object-cover" />
                            </div>
                            <div className="w-1/2 h-full relative">
                                <Image src="/images/alex.png" alt="" fill className=" object-cover" />
                            </div>
                        </div>
                        <div className="w-full">
                            {p1.split("\n").map((item, index) =>
                                <p key={index} className="text-base font-normal">{item}</p>
                            )}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
};

export default Concept;
