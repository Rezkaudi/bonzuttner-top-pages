"use client"

// import { Image } from "@nextui-org/react";

import Container from "@/shared-components/Container";
import Blog from "@/shared-sections/Blog";
import axios from "axios";
import { useEffect, useState } from "react";
// import Line from "./components/Line";
import ReadMoreBtn from "@/shared-components/ReadMoreBtn";
// import Link from "next/link";

const Topics = () => {

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

    return (
        <section id="topics">
            <Container className="py-20">
                <h2 className="font-medium text-xl lg:text-4xl">TOPICS</h2>
                <div className="mt-10 w-full mx-auto">
                    <Blog articles={articles?.slice(0, 3)} />
                    <div className="w-full mt-0 lg:mt-12 flex items-center justify-center">
                        <ReadMoreBtn href="/topics" />
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Topics;
