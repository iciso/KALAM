import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Skeleton className="h-8 w-48 bg-emerald-700" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10 rounded-md bg-emerald-700" />
            <Skeleton className="h-10 w-10 rounded-md bg-emerald-700" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <Skeleton className="h-8 w-40 mb-2" />
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="flex flex-col gap-2 items-end">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            <Skeleton className="h-40 w-full mb-6 rounded-lg" />
            <Skeleton className="h-40 w-full mb-6 rounded-lg" />
            <Skeleton className="h-8 w-32 ml-auto" />
          </div>
        </div>
      </main>
    </div>
  )
}
