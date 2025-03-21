import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const response = await axios.get(`http://82.165.187.125:1337/api/articles/${id}?populate=category`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "X-TENANT-ID": process.env.TENANT_ID,
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    return NextResponse.json({ error: `Failed to fetch article with ID ${id}` }, { status: 500 });
  }
}