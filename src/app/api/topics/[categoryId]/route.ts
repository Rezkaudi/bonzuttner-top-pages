import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ categoryId: number }> }
) {
  try {
    const categoryId = (await params).categoryId
    console.log(categoryId)

    const filter = (categoryId == 0 || !categoryId) ? "?populate=category&sort[0]=id:desc" : `?filters[category][id][$eq]=${categoryId}&populate=category&sort[0]=id:desc`
    const url = `${process.env.API_URL}/api/articles${filter}`

    console.log("url", url)

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "X-TENANT-ID": process.env.TENANT_ID,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}