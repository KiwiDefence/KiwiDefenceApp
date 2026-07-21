import { jwtVerify, type JWTPayload } from "jose"
import { cookies } from "next/headers"

type UserPayload = JWTPayload & { email?: string; name?: string }

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET environment variable must be at least 32 characters")
  }
  return new TextEncoder().encode(secret)
}

export async function verifySession(): Promise<{ email: string; name: string } | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("session")?.value
  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, getSecret(), { algorithms: ["HS256"] })
    const data = payload as UserPayload
    if (!data.email || !data.name) return null
    return { email: data.email, name: data.name }
  } catch {
    return null
  }
}

export { getSecret }
