import { getBanners } from "@/lib/banner";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    let banners = (await getBanners()) || [];
    return NextResponse.json({ data: banners.values() });
  } catch (error) {
    console.log(error);
  }
}
