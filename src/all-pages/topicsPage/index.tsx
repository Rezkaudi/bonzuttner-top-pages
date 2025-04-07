"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "@/shared-sections/Blog";

const Index: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [articles, setArticles] = useState<Article[] | null>(null);

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

  const renderContentTab = () => (
    <Blog articles={articles} />
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