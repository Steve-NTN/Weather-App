import { getAllProductCategories } from "@/lib/product_category";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    let productCategories = (await getAllProductCategories()) || [];
    let formatCategories = new Set(
      productCategories.map((productCategory) => productCategory.category)
    );

    return NextResponse.json({ data: Array.from(formatCategories.values()) });
  } catch (error) {
    console.log(error);
  }
}
