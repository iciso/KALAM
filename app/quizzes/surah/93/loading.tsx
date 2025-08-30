import { Skeleton } from "@/components/ui/skeleton"; 
export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="container mx-auto max-w-4xl">
        <Skeleton className="h-12 w-48 mb-6" />
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </div>
  );
}
