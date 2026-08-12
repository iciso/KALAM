import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import AlMulkQuizClient from "./client";

export const metadata = {
  title: "Surah Al-Mulk Quiz | KALAM",
  description: "Test your knowledge of vocabulary from Surah Al-Mulk (The Sovereignty)",
}

// Same fallback UI as loading.tsx, reused here as the required Suspense
// boundary for the client component that reads useSearchParams()
// (needed for the ?start=&end= section slicing to work reliably).
function QuizFallback() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="container mx-auto max-w-4xl">
        <Skeleton className="h-12 w-48 mb-6" />
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </div>
  );
}

export default function AlMulkQuizPage() {
  return (
    <Suspense fallback={<QuizFallback />}>
      <AlMulkQuizClient />
    </Suspense>
  );
}
