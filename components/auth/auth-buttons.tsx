"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, UserPlus, LogOut } from "lucide-react"
import { useState } from "react"

interface AuthButtonsProps {
  isAuthenticated?: boolean
  onLogin?: () => void
  onRegister?: () => void
  onLogout?: () => void
  showRegister?: boolean
  variant?: "default" | "minimal" | "card"
}

export function AuthButtons({
  isAuthenticated = false,
  onLogin,
  onRegister,
  onLogout,
  showRegister = true,
  variant = "default",
}: AuthButtonsProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      await onLogin?.()
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async () => {
    setIsLoading(true)
    try {
      await onRegister?.()
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await onLogout?.()
    } finally {
      setIsLoading(false)
    }
  }

  if (variant === "minimal") {
    return (
      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          <Button variant="outline" size="sm" onClick={handleLogout} disabled={isLoading}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        ) : (
          <>
            <Button variant="outline" size="sm" onClick={handleLogin} disabled={isLoading}>
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            {showRegister && (
              <Button size="sm" onClick={handleRegister} disabled={isLoading}>
                <UserPlus className="h-4 w-4 mr-2" />
                Register
              </Button>
            )}
          </>
        )}
      </div>
    )
  }

  if (variant === "card") {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{isAuthenticated ? "Account" : "Authentication"}</CardTitle>
          <CardDescription>
            {isAuthenticated ? "Manage your account settings" : "Sign in to access all features"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isAuthenticated ? (
            <Button variant="outline" className="w-full bg-transparent" onClick={handleLogout} disabled={isLoading}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          ) : (
            <div className="space-y-2">
              <Button className="w-full" onClick={handleLogin} disabled={isLoading}>
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
              {showRegister && (
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={handleRegister}
                  disabled={isLoading}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Create Account
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  // Default variant
  return (
    <div className="flex items-center gap-4">
      {isAuthenticated ? (
        <Button variant="outline" onClick={handleLogout} disabled={isLoading}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      ) : (
        <>
          <Button variant="outline" onClick={handleLogin} disabled={isLoading}>
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
          {showRegister && (
            <Button onClick={handleRegister} disabled={isLoading}>
              <UserPlus className="h-4 w-4 mr-2" />
              Register
            </Button>
          )}
        </>
      )}
    </div>
  )
}
