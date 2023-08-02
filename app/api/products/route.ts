import { createProduct, getAllProduct } from "@/lib/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    let data = req.nextUrl.searchParams;

    const products = await getAllProduct({
      searchKey: data.get("searchKey"),
      category: data.get("category"),
    });

    return NextResponse.json({ data: products });
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    let data = await req.json();
    const product = await createProduct(data);
    return NextResponse.json({ data: product });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
