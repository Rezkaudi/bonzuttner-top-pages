"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

interface ReadMoreBtnProps {
    className?: string
    href?: string
}

const ReadMoreBtn: React.FC<ReadMoreBtnProps> = ({ className = "", href = "" }) => {
    const t = useTranslations('common');

    return (
        <Button as={Link} href={href} className={`mt-10 bg-[#00A1E9] text-white font-medium text-sm p-3 rounded-lg ${className}`}>
            {t('readMore')}
        </Button>
    )
};

export default ReadMoreBtn;