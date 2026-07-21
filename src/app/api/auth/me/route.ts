import { NextResponse } from "next/server"
import { verifySession } from "@/lib/auth"

export const dynamic = "force-static"

export async function GET() {
  if (process.env.STATIC_EXPORT === "true") {
    return NextResponse.json({ authenticated: false })
  }
  const user = await verifySession()
  if (!user) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
  return NextResponse.json({ authenticated: true, user })
}
