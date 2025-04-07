import Loading from "@/shared-components/Loading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBlog {
    articles: Article[] | null | undefined
}

const Blog: React.FC<IBlog> = ({ articles }) => {
    return (
        <div className="relative overflow-x-auto sm:rounded-lg w-[70%] m-auto mb-4 ">
            {
                articles ?
                    <table className="w-full text-sm text-left rtl:text-right">
                        <tbody>
                            {
                                articles.map((article, index) => (
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
                                            <Link
                                                href={`/topics/index/${index}`}
                                            >
                                                <Image src="/images/creative/arrow-right.svg" alt="arrow-right" width={23} height={23} />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    : <Loading className="h-96" />
            }

        </div>
    )
};

export default Blog;
