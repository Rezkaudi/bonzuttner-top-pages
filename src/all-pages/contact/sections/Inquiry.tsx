"use client"

import Container from "@/shared-components/Container";
import React, { ChangeEvent, useState } from "react";
import FormElement from "./components/FormElement";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Inquiry = () => {
    const [inquiryData, setInquiryData] = useState<InquiryDataType>({
        typeOfInquiry: "",
        name: "",
        furigana: "",
        email: "",
        agree: false,
        inquiryDetails: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

        setInquiryData(prev => ({
            ...prev,
            [target.name]: target.value === "on" ? (target as HTMLInputElement).checked : target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(inquiryData)
    }

    return (
        <section className="bg-white">
            <Container className="py-[100px]">
                <form className="max-w-3xl mx-auto space-y-[100px] w-full" onSubmit={handleSubmit}>
                    <div className="space-y-8 w-full">
                        <FormElement elementType="select" label={"お問い合わせの種類"} isRequired={true} fieldName={"typeOfInquiry"} value={inquiryData.typeOfInquiry} onChange={handleChange} >
                            <option value="">選択してください </option>
                            <option value="a1">A1</option>
                            <option value="a2">A2</option>
                            <option value="a3">A3</option>
                        </FormElement>
                        <FormElement elementType="text" label={"お名前"} isRequired={true} placeholder={" お名前を入力してください"} fieldName={"name"} value={inquiryData.name} onChange={handleChange} />
                        <FormElement elementType="text" label={"フリガナ"} isRequired={true} placeholder={" フリガナを入力してください"} fieldName={"furigana"} value={inquiryData.furigana} onChange={handleChange} />
                        <FormElement elementType="email" label={"メールアドレス"} isRequired={true} placeholder={" メールアドレスを入力してください"} fieldName={"email"} value={inquiryData.email} onChange={handleChange} />
                        <FormElement elementType="number" label={"電話番号"} isRequired={false} placeholder={" 電話番号を入力してください"} fieldName={"number"} value={inquiryData.number || ""} onChange={handleChange} />
                        <FormElement elementType="text" label={"会社名/屋号"} isRequired={false} placeholder={" 会社名/屋号を入力してください"} fieldName={"companyName"} value={inquiryData.companyName || ""} onChange={handleChange} />
                        <FormElement elementType="text" label={"住所"} isRequired={false} placeholder={" 住所を入力してください"} fieldName={"address"} value={inquiryData.address || ""} onChange={handleChange} />
                        <FormElement elementType="textarea" label={"お問い合わせ内容"} isRequired={true} placeholder={" お問い合わせ内容を入力してください"} fieldName={"inquiryDetails"} value={inquiryData.inquiryDetails || ""} onChange={handleChange} />

                        <span className="text-center block"><Link href={"/"} className="text-purple-500">プライバシーポリシー</Link> 及び <Link href={"/"} className="text-purple-500">個人情報の取り扱い</Link> について</span>
                        <FormElement elementType="checkbox" label={"同意する"} isRequired={true} placeholder={" 同意する"} fieldName={"agree"} checked={inquiryData.agree} onChange={handleChange} />
                    </div>
                    <Button type="submit" isLoading={false} className="bg-[#00A1E9] text-white flex gap-4 flex-row-reverse items-center justify-center py-4 w-[230px] mx-auto  h-[60px] rounded-[30px]">
                        送信する
                    </Button>
                </form>

            </Container>
        </section>
    )
};

export default Inquiry;
