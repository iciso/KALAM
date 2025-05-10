import { Skeleton } from "@/components/ui/skeleton"

export default function HijraQuizLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Skeleton className="h-8 w-48 bg-emerald-700" />
          <div className="flex space-x-2">
            <Skeleton className="h-10 w-10 rounded-md bg-emerald-700" />
            <Skeleton className="h-10 w-10 rounded-md bg-emerald-700" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Skeleton className="h-6 w-40 bg-gray-200" />
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <Skeleton className="h-[600px] w-full rounded-lg bg-gray-200" />
        </div>

        <div className="mt-8 max-w-4xl mx-auto">
          <Skeleton className="h-32 w-full rounded-lg bg-gray-200" />
        </div>
      </main>
    </div>
  )
}
