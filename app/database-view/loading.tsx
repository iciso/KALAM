export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Database View</h1>
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-40 bg-gray-200 rounded mb-4"></div>
      </div>
    </div>
  )
}
