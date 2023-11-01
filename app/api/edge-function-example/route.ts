import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export const runtime = 'edge'; // 'nodejs' is the default

const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;
 
export function GET(request: NextRequest) {
    console.log(apiKey);
  return NextResponse.json(
    {
      body: request.body,
      query: request.nextUrl.search,
      message: baseUrl,
    },
    {
      status: 200,
    },
  );
}