
import { NextResponse } from 'next/server';
console.log("yellow");
export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
  console.log("Hello");
  return NextResponse.json(
    {
        message: "hello",
        status: "ok"
    },
    {
      status: 200,
    },
  );
  console.log("bruh");
}