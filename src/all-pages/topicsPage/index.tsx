"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

const Index: React.FC = () => {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [articles, setArticles] = useState<{ id: number; publishedAt: string; Title: string; category: { Name: string }; Body: string }[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles');
        console.log("API Response:", response.data);
        setArticles(response.data.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  const renderTab = (selected: string) => (
    <div className="inline-flex items-center justify-center mr-4">
      {selected === selectedTopic ? (
        <div className="w-[7px] h-[7px] rounded-full bg-[#00A1E9]" />
      ) : (
        <div className="w-[7px] h-[7px] rounded-full bg-[#E5E5E5]" />
      )}
      <p className="cursor-pointer px-2" onClick={() => setSelectedTopic(selected)}>
        {selected.toUpperCase()}
      </p>
    </div>
  );

  // Function to navigate to article details using array index
  const handleArticleClick = (index: number) => {
    router.push(`/topics/index/${index}`);
  };

  const renderContentTab = () => (
    <div className="relative overflow-x-auto sm:rounded-lg w-[70%] m-auto mb-4">
      <table className="w-full text-sm text-left rtl:text-right">
        <tbody>
          {articles.map((article, index) => (
            <tr key={article.id} className="border-t border-black">
              <th scope="row" className="pr-6 py-8 font-medium">
                <p className="text-sm font-normal leading-5">
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </th>
              <td className="px-6 py-8">
                <p className="text-xs font-normal border-1 rounded-3xl border-[#00A1E9] py-1 px-6 text-center leading-5">
                  {article.category?.Name || "BZ News"}
                </p>
              </td>
              <td className="px-6 py-8">
                <p className="text-base font-normal leading-5">
                  {article.Title || "No Title"}
                </p>
              </td>
              <td className="px-6 py-8">
                <div 
                  className="cursor-pointer" 
                  onClick={() => handleArticleClick(index)}
                >
                  <Image src="/images/creative/arrow-right.svg" alt="arrow-right" width={23} height={23} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="relative w-full">
      <div className="w-full flex justify-between bg-[#F5F5F5] pt-14 pl-24 pr-14 lg:h-[300px]">
        <div className="relative">
          <h1 className="text-[40px] font-medium leading-10 mb-2">TOPICS</h1>
          <p className="text-base font-medium leading-6">トピックス</p>
        </div>
      </div>
      <div className="px-24 py-10">
        <div className="flex mb-6">{renderTab("all")}</div>
        {renderContentTab()}
      </div>
    </section>
  );
};

export default Index;