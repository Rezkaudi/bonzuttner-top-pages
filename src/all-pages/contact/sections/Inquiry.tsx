"use client"

import Container from "@/shared-components/Container";
import React, { ChangeEvent, useState } from "react";
import FormElement from "./components/FormElement";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

const Inquiry = () => {
    const t = useTranslations('contact.inquiry');
    const footerT = useTranslations('footer');
    const locale = useLocale();

    const [inquiryData, setInquiryData] = useState<InquiryDataType>({
        typeOfInquiry: "",
        name: "",
        furigana: "",
        email: "",
        agree: false,
        inquiryDetails: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        setInquiryData(prev => ({
            ...prev,
            [target.name]: target.type === 'checkbox'
                ? (target as HTMLInputElement).checked
                : target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate required fields
        const requiredFields = ['typeOfInquiry', 'name', 'furigana', 'email', 'inquiryDetails'];
        const isMissingField = requiredFields.some(field => !inquiryData[field as keyof InquiryDataType]);

        if (isMissingField || !inquiryData.agree) {
            alert(t('validation.requiredFields'));
            return;
        }

        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inquiryData)
            });

            const data = await res.json();

            if (res.ok) {
                alert(t('successMessage'));
                // Reset form
                setInquiryData({
                    typeOfInquiry: "",
                    name: "",
                    furigana: "",
                    email: "",
                    agree: false,
                    inquiryDetails: ""
                });
            } else {
                console.error("API Error:", data);
                alert(`${t('errorMessage')}: ${data.error || t('validation.unknownError')}`);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert(t('validation.networkError'));
        }
    };

    return (
        <section className="bg-white">
            <Container className="py-[50px] lg:py-[100px]">
                <form
                    className="lg:max-w-3xl mx-auto space-y-[100px] w-full"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-7 lg:space-y-8 w-full">
                        {/* Inquiry Type */}
                        <FormElement
                            elementType="select"
                            label={t('form.inquiryType.label')}
                            isRequired={true}
                            fieldName="typeOfInquiry"
                            value={inquiryData.typeOfInquiry}
                            onChange={handleChange}
                        >
                            <option value="">{t('form.inquiryType.placeholder')}</option>
                            <option value="media">{t('form.inquiryType.options.media')}</option>
                            <option value="service">{t('form.inquiryType.options.service')}</option>
                            <option value="other">{t('form.inquiryType.options.other')}</option>
                        </FormElement>

                        {/* Name */}
                        <FormElement
                            elementType="text"
                            label={t('form.name.label')}
                            isRequired={true}
                            placeholder={t('form.name.placeholder')}
                            fieldName="name"
                            value={inquiryData.name}
                            onChange={handleChange}
                        />

                        {/* Furigana */}
                        <FormElement
                            elementType="text"
                            label={t('form.furigana.label')}
                            isRequired={true}
                            placeholder={t('form.furigana.placeholder')}
                            fieldName="furigana"
                            value={inquiryData.furigana}
                            onChange={handleChange}
                        />

                        {/* Email */}
                        <FormElement
                            elementType="email"
                            label={t('form.email.label')}
                            isRequired={true}
                            placeholder={t('form.email.placeholder')}
                            fieldName="email"
                            value={inquiryData.email}
                            onChange={handleChange}
                        />

                        {/* Phone Number (Optional) */}
                        <FormElement
                            elementType="text"
                            label={t('form.number.label')}
                            isRequired={false}
                            placeholder={t('form.number.placeholder')}
                            fieldName="number"
                            value={inquiryData.number || ""}
                            onChange={handleChange}
                        />

                        {/* Company Name (Optional) */}
                        <FormElement
                            elementType="text"
                            label={t('form.companyName.label')}
                            isRequired={false}
                            placeholder={t('form.companyName.placeholder')}
                            fieldName="companyName"
                            value={inquiryData.companyName || ""}
                            onChange={handleChange}
                        />

                        {/* Address (Optional) */}
                        <FormElement
                            elementType="text"
                            label={t('form.address.label')}
                            isRequired={false}
                            placeholder={t('form.address.placeholder')}
                            fieldName="address"
                            value={inquiryData.address || ""}
                            onChange={handleChange}
                        />

                        {/* Inquiry Details */}
                        <FormElement
                            elementType="textarea"
                            label={t('form.inquiryDetails.label')}
                            isRequired={true}
                            placeholder={t('form.inquiryDetails.placeholder')}
                            fieldName="inquiryDetails"
                            value={inquiryData.inquiryDetails}
                            onChange={handleChange}
                        />

                        {/* Privacy Policy Agreement */}
                        <div className="text-center">
                            <span>
                                <Link
                                    href={`/${locale}/privacy-policy`}
                                    className="text-purple-500 hover:underline"
                                >
                                    {footerT('privacyPolicy')}
                                </Link> {t('form.agreementText')}{' '}
                                <Link
                                    href={`/${locale}/privacy-policy`}
                                    className="text-purple-500 hover:underline"
                                >
                                    {footerT('personalInfo')}
                                </Link>
                            </span>
                        </div>

                        {/* Agreement Checkbox */}
                        <FormElement
                            elementType="checkbox"
                            label={t('form.agree.label')}
                            isRequired={true}
                            fieldName="agree"
                            checked={inquiryData.agree}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <Button
                            type="submit"
                            className="bg-[#00A1E9] text-white flex gap-4 flex-row-reverse items-center justify-center py-4 w-[230px] h-[60px] rounded-[30px] hover:bg-[#0085C7] transition-colors"
                            radius="full"
                        >
                            {t('form.submitButton')}
                        </Button>
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default Inquiry;