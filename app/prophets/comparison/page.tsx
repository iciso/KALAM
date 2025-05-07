import ProphetComparisonTool from "@/components/prophet-comparison-tool"

export const metadata = {
  title: "Prophet Comparison Tool - KALAM",
  description: "Compare different prophets mentioned in the Quran side by side",
}

export default function ProphetComparisonPage() {
  return (
    <div className="container mx-auto py-6">
      <ProphetComparisonTool />
    </div>
  )
}
