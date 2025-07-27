"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "@/shared-sections/Blog";
import Loading from "@/shared-components/Loading";
import { Pagination, PaginationItemType } from "@heroui/react";

export const ChevronIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="20em"
      {...props}
    >
      <path
        d="M15.5 19l-7-7 7-7"
        stroke="#00A1E9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};



const renderItem = ({ ref, key, value, isActive, onNext, onPrevious, setPage }: any) => {

  const handleChangePage = (value: any) => {
    console.log(value)
    setPage(value)
  }

  const handleNext = () => {
    console.log("next", value)
    onNext()
  }

  const handlePrevious = () => {
    console.log("Previous", value)
    onPrevious()
  }

  if (value === PaginationItemType.NEXT) {
    return (
      <button
        key={key}
        className={"border border-[#00A1E9] rounded-full min-w-8 w-8 h-8 flex items-center justify-center"}
        onClick={handleNext}
      >
        <ChevronIcon className="rotate-180" />
      </button>
    );
  }

  if (value === PaginationItemType.PREV) {
    return (
      <button
        key={key}
        className={"border border-[#00A1E9] rounded-full min-w-8 w-8 h-8 flex items-center justify-center"}
        onClick={handlePrevious}
      >
        <ChevronIcon />
      </button>
    );
  }

  if (value === PaginationItemType.DOTS) {
    return (
      <button key={key} className={"border border-[#00A1E9] rounded-full min-w-8 w-8 h-8 flex items-center justify-center"}>
        ...
      </button>
    );
  }

  // cursor is the default item
  return (
    <button
      key={key}
      ref={ref}
      className={
        isActive ?
          "border border-[#00A1E9] bg-[#00A1E9] text-white rounded-full min-w-8 w-8 h-8 flex items-center justify-center " :
          "border border-[#00A1E9] text-[#00A1E9] rounded-full min-w-8 w-8 h-8 flex items-center justify-center"}
      onClick={() => handleChangePage(value)}
    >
      {value}
    </button>
  );
};

const Index: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);


  useEffect(() => {
    const storedTopic = localStorage.getItem("selectedTopic") || "all";
    const storedId = localStorage.getItem("selectedTopicId") || "0";
    setSelectedTopic(storedTopic);
    setSelectedTopicId(storedId);
  }, []);

  const [articles, setArticles] = useState<Article[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('/api/category');
        console.log("API Response:", response.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchCategory()
  }, []);


  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`/api/topics/${selectedTopicId}`);
        console.log("API Response:", response.data);
        setArticles(response.data.data);
        setPage(response.data.meta.pagination.pageCount);
        setTotal(Math.ceil(response.data.meta.pagination.total / response.data.meta.pagination.pageSize));


      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    if (selectedTopicId) {
      fetchArticles();
    }
  }, [selectedTopic, selectedTopicId]);

  const handleChangeTap = (name: string, id: string) => {
    setArticles(null)
    setSelectedTopicId(id)
    setSelectedTopic(name)

    localStorage.setItem("selectedTopicId", id);
    localStorage.setItem("selectedTopic", name);
  }

  const renderTab = (selected: string, id: string) => (
    <div className="inline-flex items-center justify-center gap-1">
      {selected === selectedTopic ? (
        <div className="w-[7px] h-[7px] rounded-full bg-[#00A1E9]" />
      ) : (
        <div className="w-[7px] h-[7px] rounded-full bg-[#E5E5E5]" />
      )}
      <p className="cursor-pointer text-xs lg:text-base font-medium " onClick={() => handleChangeTap(selected, id)}>
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
      {categories ?
        <>
          <div className="w-full flex justify-between items-start pt-[50px] bg-[#F5F5F5] pl-8 lg:pl-24 pr-14 h-48 lg:h-[300px]">
            <div className="relative">
              <h1 className="text-[22px] lg:text-[40px] font-medium leading-10 mb-2">TOPICS</h1>
              <p className="text-base font-medium leading-6">トピックス</p>
            </div>

            <div className="relative">
              <p className="text-xs font-medium leading-6">TOP - TOPICS</p>
            </div>
          </div>

          <div className="px-8 lg:px-24 py-10 xl:max-w-[1200px] mx-auto">
            <div className="flex mb-6 flex-wrap gap-7">
              {renderTab("all", "0")}
              {
                categories?.map(item =>
                  <div key={item.id}>
                    {renderTab(item.Name, item.id)}
                  </div>
                )
              }
            </div>
            {renderContentTab()}
          </div>

          <div className="flex items-center justify-center p-5 py-[50px]">
            <Pagination
              disableCursorAnimation
              showControls
              initialPage={page}
              radius="full"
              renderItem={renderItem}
              total={total}
              variant="light"
            />
          </div>
        </> :
        <Loading className="h-96" />
      }
    </section>
  );
};

export default Index;