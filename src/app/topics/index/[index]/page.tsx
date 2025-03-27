"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ArticleDetailsByIndex: React.FC = () => {
  const { index } = useParams();
  // const [articles, setArticles] = useState<any[]>([]);
  const [article, setArticle] = useState<{
    Title: string;
    Body: string;
    publishedAt: string;
    category: { Name: string };
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles');
        const articlesData = response.data.data;
        // setArticles(articlesData);

        // Get the article at the specified index
        const articleIndex = parseInt(index as string);
        if (!isNaN(articleIndex) && articleIndex >= 0 && articleIndex < articlesData.length) {
          setArticle(articlesData[articleIndex]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [index]);

  if (loading) {
    return (
      <section className="relative w-full">
        <div className="w-full flex justify-between bg-[#F5F5F5] pt-14 pl-24 pr-14 lg:h-[300px]">
          <div className="relative">
            <h1 className="text-[40px] font-medium leading-10 mb-2">ARTICLE</h1>
            <p className="text-base font-medium leading-6">記事</p>
          </div>
        </div>
        <div className="px-24 py-10 text-center">
          <p>Loading article...</p>
        </div>
      </section>
    );
  }

  if (!article) {
    return (
      <section className="relative w-full">
        <div className="w-full flex justify-between bg-[#F5F5F5] pt-14 pl-24 pr-14 lg:h-[300px]">
          <div className="relative">
            <h1 className="text-[40px] font-medium leading-10 mb-2">ARTICLE</h1>
            <p className="text-base font-medium leading-6">記事</p>
          </div>
        </div>
        <div className="px-24 py-10 text-center">
          <p>Article not found</p>
          <Link href="/topics" className="text-[#00A1E9] mt-4 inline-block">
            Back to Topics
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full">
      <div className="w-full flex justify-between bg-[#F5F5F5] pt-14 pl-24 pr-14 lg:h-[300px]">
        <div className="relative">
          <h1 className="text-[40px] font-medium leading-10 mb-2">ARTICLE</h1>
          <p className="text-base font-medium leading-6">記事</p>
        </div>
      </div>
      <div className="px-24 py-10">
        <div className="mb-8">
          <Link href="/topics" className="flex items-center text-[#00A1E9]">
            <Image
              src="/images/creative/arrow-right.svg"
              alt="arrow-left"
              width={23}
              height={23}
              className="transform rotate-180 mr-2"
            />
            Back to Topics
          </Link>
        </div>

        <div className="w-[70%] m-auto">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-xs font-normal border-1 rounded-3xl border-[#00A1E9] py-1 px-6 text-center leading-5 inline-block">
              {article.category?.Name || "BZ News"}
            </p>
            <p className="text-sm font-normal">
              {article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          <h2 className="text-2xl font-medium mb-6">{article.Title}</h2>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.Body }}
          />
        </div>
      </div>
    </section>
  );
};

export default ArticleDetailsByIndex;