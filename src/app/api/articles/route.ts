import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('http://82.165.187.125:1337/api/articles?populate=category&sort[0]=id:desc', {
      headers: {
        Authorization: `Bearer ed3a20bc94f6ed30ca1349481b63f438a51ce231d09a56a21577edf10ff8b8b342af2d43521dda9c760afd638698368c621b3d2839a9630d20ae9f6c1318c2bd9580cfc6097e4afd37583c715328b9041102a8118995c5ce10ba7015406604272f89bfc1fc09763c636777d325cb9a9d7f840133fbc6e597cfdccd689220d3ec`,
        "X-TENANT-ID": "28",
      },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}
