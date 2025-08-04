
import { Metadata, ResolvingMetadata  } from 'next';
import axios from "axios";
import {ReactNode} from "react";


// Type for generateMetadata params only
type GenerateMetadataProps = {
    params: Promise<{ slug: string }>
}

// Type for layout component props (only children)
type LayoutProps = {
    children: ReactNode;
    params: Promise<{ slug: string }>; // Layouts can access params too ( next + 13 ).
};

export async function generateMetadata(
    { params }: GenerateMetadataProps ,
    parent: ResolvingMetadata
):
    Promise<Metadata> {

     const {slug} = await  params;
    const decodedSlug = decodeURIComponent(slug);
    const response = await axios.get(
        `http://213.165.93.245/api/articles?filters[Title][$eq]=${decodedSlug}&populate=category`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
                "X-TENANT-ID": process.env.TENANT_ID,
            },
        }
    );

  const  article = response.data.data[0];

  // console.info(article);
    // Optionally access parent metadata
    const previousImages = (await parent).openGraph?.images || [];


    if (!article || !article.seo_info) return {};

    const { title, description, keywords , og_image , og_title ,canonical_url , twitter_title , og_description , twitter_description  } = article.seo_info;

    return {
        title: title || og_title || twitter_title || undefined,
        description: description || og_description || twitter_description || undefined,
        keywords: keywords || undefined,
        alternates: {
            canonical: canonical_url || undefined,
        },
        openGraph: {
            title: og_title || title || undefined,
            description: og_description || description || undefined,
            images: og_image ? [og_image ,...previousImages] : [...previousImages],
        },
        twitter: {
            title: twitter_title || title || undefined,
            description: twitter_description || description || undefined,
            images: og_image ? [og_image] : undefined,
            card: og_image ? 'summary_large_image' : 'summary',
        },
    };
}

export default async function ArticleLayout(
    { children, params }: LayoutProps) {
    const { slug } = await params;
    
    return <>{children}</>;
}
