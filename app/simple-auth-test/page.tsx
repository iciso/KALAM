"use client"

import { SimpleAuth } from "@/components/auth/simple-auth"

export default function SimpleAuthTestPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Simple Authentication Test</h1>
      <SimpleAuth />
    </div>
  )
}
