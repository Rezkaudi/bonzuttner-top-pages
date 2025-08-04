import Link from "next/link";

interface Article {
  Title: string;
  Body: string;
  slug: string;
  publishedAt: string;
  category: { Name: string };
  seo_info: {
    title: string;
    description: string;
    keywords: string;
    og_title?: string;
    og_description?: string;
    og_image?: string;
    twitter_title?: string;
    twitter_description?: string;
    canonical_url?: string;
  } | null;
}

async function fetchArticle(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`/api/articles/${slug}`, {
      cache: "no-store",
    });
    const article = await res.json();

    console.log("🔍 SEO Info:", article.seo_info);
    if (!res.ok) return null;
    return article;
  } catch (err) {
    console.error("Fetch article failed:", err);
    return null;
  }
}

// MAIN CHANGE: Update the params type to Promise
export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }> // Changed to Promise
}) {
  // Await the params
  const { slug } = await params;

  const article = await fetchArticle(slug);

  if (!article) {
    return (
      <section className="w-full px-6 md:px-10 lg:px-24 py-10 text-center">
        <p className="mb-4">Article not found</p>
        <Link href="/topics" className="text-blue-500 hover:underline">
          Back to Topics
        </Link>
      </section>
    );
  }

  return (
    <section className="w-full px-6 md:px-10 lg:px-24 py-10">
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

        <h2 className="text-2xl font-medium mb-6">{article.Title}</h2>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{
            __html: article.Body.replaceAll(
              'http://213.165.93.245/',
              '/api/proxy?url=213.165.93.245/'
            )
          }}
        />
      </div>

      <div className="my-10 w-full flex items-center">
        <Link
          href="/topics"
          className="mx-auto bg-blue-500 px-[25px] py-[10px] rounded-lg text-white hover:bg-blue-300"
        >
          一覧へ戻る
        </Link>
      </div>
    </section>
  );
}