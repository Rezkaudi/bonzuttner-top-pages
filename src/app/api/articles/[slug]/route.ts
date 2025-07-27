import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';


export async function GET(
    request: NextRequest,
    { params }: {  params:Promise< { slug: string }> }
) {
    try {
        const slug = (await params).slug
        // decode the slug to handle Next.js automatic encoding
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


        if (response.data.data.length === 0) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json(response.data.data[0], { status: 200 });
    } catch (error) {
        console.error('Error fetching article by slug:', error);
        return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
    }
}