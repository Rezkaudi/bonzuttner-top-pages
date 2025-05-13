import Container from "@/shared-components/Container";
import React from "react";

const Mission = () => {

    const data = [
        {
            id: "1",
            title: "MISSION",
            subTitle: "「避難民問題」を「社会資産」に。",
            content: "避難民を「助ける対象」ではなく、社会の貴重な資産として活かすことです。BonZuttnerは、難民と共に働き、学び、成長することで、持続可能な未来を創る架け橋となります。"
        },
        {
            id: "2",
            title: "VISION",
            subTitle: "才能に国境はない。世界中の可能性を解き放つ。",
            content: "BonZuttnerは、テクノロジーと人の力で、国や文化を超えた新しい未来を創造します。難民というラベルに縛られず、多様な才能が活躍できる社会を実現し、世界をもっと豊かで面白くすることを目指します。"
        },
        {
            id: "3",
            title: "VALUE",
            subTitle: "「共創」・「挑戦」・「信頼」・「革新」",
            content: "多様なバックグラウンドを持つ仲間と共に、新しい価値を生み出し、社会課題に真正面から向き合い、常に新たな解決策を模索し続けます。また、互いを尊重し合い、フラットな関係の中で成長できる環境を築き、テクノロジーの力を最大限に活かした未来づくりと多様性を受け入れたグローバルマインドで未来を切り拓いていきます。"
        }
    ]
    return (
        <section className="bg-[#00A1E9]">
            <Container className="py-[50px] lg:py-[110px]">
                <div className="w-full space-y-7 lg:space-y-12">
                    <h2 className="flex items-center text-white justify-start">
                        <hr className="w-[50px] border-white mr-4"></hr>
                        <span className="font-medium text-xl lg:text-4xl">MISSION・VISION・VALUE</span>
                    </h2>
                    <div className="max-w-5xl mx-auto text-base text-black font-normal bg-white py-6 lg:py-12 px-2 text-center space-y-8">
                        {data.map(item =>
                            <div key={item.id} className="space-y-3">
                                <h3 className="text-lg lg:text-3xl font-medium text-[#00A1E9]">{item.title}</h3>
                                <h4 className="text-base lg:text-xl font-medium">{item.subTitle}</h4>
                                <p className="text-left max-w-2xl mx-auto text-xs lg:text-base">{item.content}</p>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Mission;
