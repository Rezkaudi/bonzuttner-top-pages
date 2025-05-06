import Loading from "@/shared-components/Loading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBlog {
    articles: Article[] | null | undefined
}

const Blog: React.FC<IBlog> = ({ articles }) => {
    return (
        <div className="relative overflow-x-auto sm:rounded-lg xl:w-[70%] m-auto mb-4 ">
            {
                articles ?
                    <div className="w-full text-sm text-left rtl:text-right">
                        {articles.map((article, index) => (
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
                                        <Link href={`/topics/index/${index}`}>
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

                    : <Loading className="h-96" />
            }

        </div>
    )
};

export default Blog;
