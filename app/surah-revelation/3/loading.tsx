import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-10 w-64 mb-6" />
      <Skeleton className="h-8 w-full max-w-md mb-6" />

      <div className="space-y-6">
        <Skeleton className="h-40 w-full rounded-lg" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <Skeleton className="h-6 w-32 mb-2" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-24 w-full rounded-lg" />
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <Skeleton className="h-[500px] w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
