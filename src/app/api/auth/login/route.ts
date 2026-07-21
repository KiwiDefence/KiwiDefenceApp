import { NextResponse } from "next/server"
import { SignJWT } from "jose"

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET environment variable must be at least 32 characters")
  }
  return new TextEncoder().encode(secret)
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON body" }, { status: 400 })
  }

  if (typeof body.email !== "string" || typeof body.password !== "string") {
    return NextResponse.json({ success: false, message: "Email and password are required" }, { status: 400 })
  }

  const email = body.email.trim().toLowerCase()
  const password = body.password

  if (!email || !password) {
    return NextResponse.json({ success: false, message: "Email and password are required" }, { status: 400 })
  }

  const validEmail = (process.env.AUTH_EMAIL || "").toLowerCase()
  const validPassword = process.env.AUTH_PASSWORD || ""
  const validName = process.env.AUTH_NAME || "User"

  if (email !== validEmail || password !== validPassword) {
    return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 })
  }

  const token = await new SignJWT({ email: validEmail, name: validName })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(getSecret())

  const response = NextResponse.json({ success: true, user: { email: validEmail, name: validName } })
  response.cookies.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  })

  return response
}
