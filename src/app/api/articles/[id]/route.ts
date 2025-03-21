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

    // If the article is not found in the response
    if (!response.data || !response.data.data) {
      console.log(`Article with ID ${id} not found in response`, response.data);
      return NextResponse.json({ error: `Article with ID ${id} not found` }, { status: 404 });
    }

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    
    // Check if it's a 404 error from Strapi
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return NextResponse.json({ error: `Article with ID ${id} not found` }, { status: 404 });
    }
    
    return NextResponse.json({ 
      error: `Failed to fetch article with ID ${id}`,
      details: axios.isAxiosError(error) ? error.response?.data : null
    }, { status: 500 });
  }
}