"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
// import Image from "next/image";
import Loading from "@/shared-components/Loading";
import {SeoInfo} from "@/types/SeoInfo";


const ArticleDetails: React.FC = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState<{
        Title: string;
        Body: string;
        publishedAt: string;
        category: { Name: string };
        seo_info: SeoInfo | null ;
    } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const response = await axios.get(`/api/articles/${slug}`);
                setArticle(response.data);
            } catch (error) {
                console.error("Error fetching article details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchArticleDetails();
        }
    }, [slug]);
    // console.log(article?.seo_info ,'seo outside the function');
    // console.log(article?.seo_info);

    // const renderHeader = () => (
    //     <div className="w-full bg-gray-100 pt-14 px-6 md:px-10 lg:px-24 h-[200px] lg:h-[300px] flex items-start">
    //         <div>
    //             <h1 className="text-3xl md:text-4xl font-semibold mb-2">ARTICLE</h1>
    //             <p className="text-base text-gray-600">記事</p>
    //         </div>
    //     </div>
    // );

    if (loading) {
        return (
            <section className="w-full">
                {/* {renderHeader()} */}
                <div className="px-6 md:px-10 lg:px-24 py-10 text-center">
                    <Loading className="" />
                </div>
            </section>
        );
    }

    if (!article) {
        return (
            <section className="w-full">
                {/* {renderHeader()} */}
                <div className="px-6 md:px-10 lg:px-24 py-10 text-center">
                    <p className="mb-4">Article not found</p>
                    <Link href="/topics" className="text-blue-500 hover:underline">
                        Back to Topics
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full">
            {/* {renderHeader()} */}

            <div className="px-6 md:px-10 lg:px-24 py-10">

                <div className="max-w-[1000px] mx-auto">
                    <div className="mb-10 flex justify-start items-center flex-wrap gap-10">
                        <span className="text-sm text-gray-600">
                            {article.publishedAt
                                ? new Date(article.publishedAt).toLocaleDateString()
                                : "N/A"}
                        </span>
                        <span className="text-xs font-medium border border-blue-500 rounded-full px-4 py-1 text-blue-500">
                            {article.category?.Name || "BZ News"}
                        </span>

                    </div>

                    <h2 className="text-2xl font-semibold mb-6">{article.Title}</h2>

                    <div
                        className="prose prose-blue max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: article.Body.replaceAll(
                                "http://213.165.93.245",
                                `https://bonzuttner.jp/api/proxy?url=213.165.93.245`
                            ),
                        }}
                    />
                </div>

                <div className="my-10  w-full flex items-center">
                    <Link href="/topics" className="mx-auto bg-blue-500 px-[25px] py-[10px]  rounded-lg text-white hover:bg-blue-300">
                        {/* <Image
                            src="/images/creative/arrow-left.svg"
                            alt="Back"
                            width={23}
                            height={23}
                            className="mr-2 rotate-180"
                        /> */}
                        一覧へ戻る
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ArticleDetails;
