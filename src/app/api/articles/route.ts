import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get(process.env.API_URL+'/api/articles?populate=category&sort[0]=id:desc', {
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
