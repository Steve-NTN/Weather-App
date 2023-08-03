import { getProductDetail } from "@/lib/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  let responseData: any = { error: null };
  try {
    let id = req.nextUrl.searchParams.get("id");
    if (id) {
      responseData = await getProductDetail({ id });
      if (!responseData?.error) {
        responseData = {
          data: {
            ...responseData.data,
            galleries: [{ url: responseData.data.img }],
          },
        };
        return NextResponse.json(responseData);
      }
    }

    return NextResponse.json(
      { msg: responseData?.error?.msg },
      { status: responseData?.error?.code || 500 }
    );
  } catch (error) {
    console.log(error);
  }
}
