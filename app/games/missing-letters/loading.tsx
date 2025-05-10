import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Missing Letters Game</h1>
      <div className="max-w-2xl mx-auto">
        <Skeleton className="h-[600px] w-full rounded-lg" />
      </div>
    </div>
  )
}
