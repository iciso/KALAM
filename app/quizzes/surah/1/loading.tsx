import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Skeleton className="h-8 w-48 bg-white/20" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10 rounded-md bg-white/20" />
            <Skeleton className="h-10 w-10 rounded-md bg-white/20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Skeleton className="h-4 w-full mb-2 bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-2 w-full mb-8 bg-gray-200 dark:bg-gray-700" />

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <Skeleton className="h-7 w-48 mb-4 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-full mb-2 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-full mb-2 bg-gray-200 dark:bg-gray-700" />
            <Skeleton className="h-4 w-3/4 mb-6 bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-4">
              <Skeleton className="h-16 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-16 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-16 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
              <Skeleton className="h-16 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>

            <div className="mt-6 flex justify-end">
              <Skeleton className="h-10 w-32 rounded-md bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
