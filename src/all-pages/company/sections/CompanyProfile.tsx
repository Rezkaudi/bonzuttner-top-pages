import Container from "@/shared-components/Container";
import React from "react";

const CompanyProfile = () => {

    const data = [
        {
            id: "1",
            title: "会社名",
            content: "株式会社BonZuttner"
        },
        {
            id: "2",
            title: "住所",
            content: "東京都渋谷区恵比寿４丁目２０－３恵比寿ガーデンプレイスタワー27F COEBI内"
        },
        {
            id: "3",
            title: "設立年月日",
            content: "2019年7月8日"
        },
        {
            id: "4",
            title: "代表取締役",
            content: "坂下 裕基"
        },
        {
            id: "5",
            title: "事業内容",
            content: "システム開発"
        },
        {
            id: "6",
            title: "取引銀行",
            content: "三井住友銀行"
        },
        {
            id: "7",
            title: "賛助団体",
            content: "一般社団法人Welcome Japan 特定非営利活動法人WELgee"
        }
    ]
    return (
        <section className="bg-[#F5F5F5]">
            <Container className="py-[110px]">
                <div className="w-full space-y-12">
                    <h2 className="flex items-center justify-start">
                        <hr className="w-[50px] border-[#00A1E9] mr-4"></hr>
                        <span className="font-medium text-4xl">COMPANY PROFILE</span>
                    </h2>
                    <div className="max-w-3xl mx-auto text-sm font-medium space-y-5">
                        {
                            data.map(item =>
                                <div key={item.id} className="space-y-5">
                                    <div className="flex items-center justify-center">
                                        <h3 className="w-1/3">{item.title}</h3>
                                        <p className="w-2/3">{item.content}</p>
                                    </div>
                                    <hr className="w-full border-[#C4C4C4]"></hr>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default CompanyProfile;
