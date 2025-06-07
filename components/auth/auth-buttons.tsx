"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { User, LogOut, Settings } from "lucide-react"

export function AuthButtons() {
  return (
    <div className="flex space-x-2">
      {/* Sign In Button with Tooltip */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            disabled
            className="text-white hover:bg-emerald-600 cursor-not-allowed opacity-50"
          >
            Sign In
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Sign In temporarily unavailable</p>
        </TooltipContent>
      </Tooltip>

      {/* Sign Up Button with Tooltip */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            disabled
            className="bg-white text-emerald-700 border-white hover:bg-gray-100 cursor-not-allowed opacity-50"
          >
            Sign Up
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Sign Up temporarily unavailable</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

// Keep the original code commented at the bottom for easy restoration:
/*
import { useState } from "react"
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

Original component implementation here...


  return (
    <>
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSignIn(true)}
          className="text-white hover:bg-emerald-600"
        >
          Sign In
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowSignUp(true)}
          className="bg-white text-emerald-700 border-white hover:bg-gray-100"
        >
          Sign Up
        </Button>
      </div>

      <SignInDialog open={showSignIn} onOpenChange={setShowSignIn} onSwitchToSignUp={handleSwitchToSignUp} />

      <SignUpDialog open={showSignUp} onOpenChange={setShowSignUp} onSwitchToSignIn={handleSwitchToSignIn} />
    </>
  )
}
*/
