export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Advanced Missing Letters Game</h1>
      <div className="max-w-2xl mx-auto p-8 rounded-lg border border-gray-200 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-6"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
        <div className="h-12 bg-gray-200 rounded mb-6"></div>
        <div className="h-10 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  )
}
