"use client"

import { Button } from "@/components/ui/button"
import { LogIn, LogOut } from "lucide-react"
import { useState } from "react"

export function AuthButtons() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleSignIn = () => {
    // Placeholder for sign-in logic
    // TODO: Integrate with Supabase auth
    setIsSignedIn(true)
  }

  const handleSignOut = () => {
    // Placeholder for sign-out logic
    // TODO: Integrate with Supabase auth
    setIsSignedIn(false)
  }

  return (
    <div className="flex items-center gap-2">
      {isSignedIn ? (
        <Button
          variant="outline"
          size="sm"
          onClick={handleSignOut}
          className="text-white border-white hover:bg-white hover:text-emerald-700 bg-transparent"
        >
          <LogOut className="h-4 w-4 mr-1" />
          Sign Out
        </Button>
      ) : (
        <Button size="sm" onClick={handleSignIn} className="bg-white text-emerald-700 hover:bg-emerald-50">
          <LogIn className="h-4 w-4 mr-1" />
          Sign In
        </Button>
      )}
    </div>
  )
}
