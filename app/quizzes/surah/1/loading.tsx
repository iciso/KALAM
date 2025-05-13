import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Skeleton className="h-8 w-48 bg-emerald-700" />
          <Skeleton className="h-8 w-8 rounded-full bg-emerald-700" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Skeleton className="h-[600px] w-full rounded-lg bg-gray-200 dark:bg-gray-800" />
        </div>
      </main>
    </div>
  )
}
