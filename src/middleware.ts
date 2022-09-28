import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.nextUrl.pathname.startsWith("/api/get-url/")) {
    console.log("returning early");
    return;
  }

  console.log('Path??', req.nextUrl.pathname)

  const slug = req.nextUrl.pathname.split("/").pop()
  if (!slug) {
    return;
  }
  console.log('Full nextUrl', req.nextUrl)

  const data = await (
    await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)
  ).json()

  if (data?.url) {
    return NextResponse.redirect(data.url)
  }

  console.log("data", data);

}

