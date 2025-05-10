export default function HijraLoading() {
  return (
    <div className="container mx-auto py-8 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Loading Hijra Journey...</h1>
      <div className="animate-pulse p-8 bg-gray-100 rounded-lg">
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  )
}
