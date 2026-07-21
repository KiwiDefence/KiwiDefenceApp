"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  email: string
  name: string
}

type AuthContextType = {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true") {
      setLoading(false)
      return
    }
    fetch("/api/auth/me")
      .then((res) => {
        if (!res.ok) throw new Error("Not authenticated")
        return res.json()
      })
      .then((data) => {
        if (data.authenticated) {
          setUser(data.user)
        }
      })
      .catch(() => {
        setUser(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true") {
      return { success: false, message: "Login unavailable on static export" }
    }
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (data.success) {
      setUser(data.user)
      return { success: true }
    }

    return { success: false, message: data.message || "Login failed" }
  }, [])

  const logout = useCallback(async () => {
    if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true") return
    await fetch("/api/auth/logout", { method: "POST" })
    setUser(null)
    router.push("/login")
  }, [router])

  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider")
  return ctx
}
