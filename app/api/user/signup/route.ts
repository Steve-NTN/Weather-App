import { checkUserExist, signup } from "@/lib/user";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "utils/authHelpers";

export async function POST(req: NextRequest) {
  try {
    let { username, fullname, img, password } = await req.json();
    if (!(fullname && username && password)) {
      return NextResponse.json(
        { message: "Email, username, fullname, password are required" },
        { status: 400 }
      );
    }
    const isExist = await checkUserExist(username);
    if (isExist) {
      return NextResponse.json(
        { message: "User is registered" },
        { status: 400 }
      );
    }
    const newPassword = await hashPassword(password);
    const result = await signup({
      username,
      fullname,
      img,
      password: newPassword,
    });
    return NextResponse.json({ data: result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
