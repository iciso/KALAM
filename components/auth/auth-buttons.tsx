"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/contexts/auth-context"
import { SignInDialog } from "./sign-in-dialog"
import { SignUpDialog } from "./sign-up-dialog"
import { User, LogOut, Settings } from "lucide-react"

export function AuthButtons() {
  const { user, signOut, loading } = useAuth()
  const [showSignInIQRA, setShowSignInIQRA] = useState(false)
  const [showSignUpIQRA, setShowSignUpIQRA] = useState(false)

  const handleSwitchToSignUpIQRA = () => {
    setShowSignInIQRA(false)
    setShowSignUpIQRA(true)
  }

  const handleSwitchToSignInIQRA = () => {
    setShowSignUpIQRA(false)
    setShowSignInIQRA(true)
  }

  if (loading) {
    return (
      <div className="flex space-x-2">
        <div className="w-16 h-8 bg-gray-200 rounded animate-pulse" />
        <div className="w-16 h-8 bg-gray-200 rounded animate-pulse" />
      </div>
    )
  }

  if (user) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{user.email?.split("@")[0] || "User"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem disabled>
              <User className="mr-2 h-4 w-4" />
              {user.email}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>
              <Settings className="mr-2 h-4 w-4" />
              Settings (Coming Soon)
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOut} className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out IQRA
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  }

  return (
    <>
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSignIn(true)}
          className="text-white hover:bg-emerald-600"
        >
          Sign In IQRA
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSignUp(true)}
          className="bg-white text-emerald-700 border-white hover:bg-gray-100"
        >
          Sign Up IQRA
        </Button>
      </div>

      <SignInDialog open={showSignInIQRA} onOpenChange={setShowSignInIQRA} onSwitchToSignUp={handleSwitchToSignUpIQRA} />

      <SignUpDialog open={showSignUpIQRA} onOpenChange={setShowSignUpIQRA} onSwitchToSignIn={handleSwitchToSignInIQRA} />
    </>
  )
}
