import { MetadataRoute } from 'next';
import axios from 'axios';

// baseUrl
import { baseUrl } from '@/utils/baseUrl';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
        },
        {
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
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date().toISOString(),
            changeFrequency: "daily",
            priority: 0.8,
        },

    ];

    let dynamicBlogUrls: MetadataRoute.Sitemap = [];

    try {
        const response = await axios.get('http://213.165.93.245/api/articles?populate=category&sort[0]=id:desc', {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
                "X-TENANT-ID": process.env.TENANT_ID,
            },
        });

        const blogsData = response.data.data;

        dynamicBlogUrls = blogsData.map((blog: { slug: string; updatedAt?: string }) => ({
            url: `${baseUrl}/topics/article/${blog.slug}`,
            lastModified: blog.updatedAt || new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.7,
        }));
    } catch (error) {
        console.error("Error fetching articles:", error);
    }

    return [
        ...staticUrls,
        ...dynamicBlogUrls
    ];
}
