const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { checkUserExist, checkgetUserDetail } from "@/lib/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json({
        message: "Username and password are required",
      });
    }
    const user = await checkUserExist(username);
    if (user) {
      let passwordMatched = await bcrypt.compare(password, user.password);
      if (passwordMatched) {
        const response = NextResponse.next();
        const token = jwt.sign({ username }, "secrect_key", {
          expiresIn: "1h",
        });
        response.cookies.set("token", token);
        const userDetail = await checkgetUserDetail(user?.id);
        return NextResponse.json({ ...userDetail });
      } else {
        return NextResponse.json(
          { message: "Incorrect Username and/or Password!" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "Account not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
