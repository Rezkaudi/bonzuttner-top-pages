import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    //use this in case it didn't work: testing purposes only
    //    const response = await axios.get('http://213.165.93.245'+'/api/articles?populate=category&sort[0]=id:desc', {
    const response = await axios.get(`${process.env.API_URL}/api/categories`, {
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