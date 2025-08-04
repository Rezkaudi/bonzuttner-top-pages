import Loading from "@/shared-components/Loading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from 'next-intl';

interface IBlog {
    articles: Article[] | null | undefined
}

const Blog: React.FC<IBlog> = ({ articles }) => {
    const t = useTranslations('topics');
    const locale = useLocale();
    if (articles === null || articles === undefined) {
        return <Loading className="max-h-40" />;
    }

    if (articles.length === 0) {
        return (
            <div className="text-center py-16 text-gray-500 text-sm">
                {t('noTopicsFound')}
            </div>
        );
    }

    return (
        <div className="relative overflow-x-auto sm:rounded-lg mx-auto mb-4 ">
            <div className="w-full text-sm text-left rtl:text-right">
                {articles?.map((article, index) => (
                    <div
                        key={article.id}
                        className={`flex flex-col gap-4 lg:gap-0 lg:flex-row border-t border-black py-8 items-start ${articles.length === index + 1 ? "border-b" : ""}`}
                    >
                        <div className="flex">
                            <div className="pr-6 min-w-[80px]">
                                <p className="text-xs lg:text-sm font-normal leading-5">
                                    {article.publishedAt
                                        ? new Date(article.publishedAt).toLocaleDateString()
                                        : "N/A"}
                                </p>
                            </div>

                            <div className="px-6">
                                <p className="text-xs font-normal border-1 rounded-3xl border-[#00A1E9] py-1 px-6 text-center leading-5">
                                    {article.category?.Name || "BZ News"}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-1 w-full lg:w-fit">
                            <div className="lg:px-6 flex-1">
                                <p className="text-xs lg:text-base font-normal leading-5">
                                    {article.Title || "No Title"}
                                </p>
                            </div>

                            <div className="px-6">
                                <Link href={`/${locale}/topics/article/${encodeURIComponent(article.Title)}`}>
                                    <Image
                                        src="/images/creative/arrow-right.svg"
                                        alt="arrow-right"
                                        width={23}
                                        height={23}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
