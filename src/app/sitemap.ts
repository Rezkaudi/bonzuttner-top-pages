import { MetadataRoute } from 'next';

// baseUrl
import { baseUrl } from '@/utils/baseUrl';


export default function sitemap(): MetadataRoute.Sitemap {


    // Static URLs
    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/company`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/creative`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/members`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        }, {
            url: `${baseUrl}/recruit`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/story`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/topics`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },
    ];

    // Dynamic Blog URLs
    // const dynamicBlogUrls: MetadataRoute.Sitemap = blogsData.map((blog) => ({
    //     url: `${baseUrl}/blogs/${encodeURIComponent(blog.title)}`,
    //     lastModified: new Date().toISOString(), // Use actual lastModified if available
    //     changeFrequency: "weekly",
    //     priority: 0.7,
    // }));

    return [
        ...staticUrls,
    ];
}
