import PropheticTimelineComparison from "@/components/prophetic-timeline-comparison"

export const metadata = {
  title: "Isra and Miraj in Prophetic Timeline",
  description: "Explore how the Night Journey relates to other major events in Prophet Muhammad's life",
}

export default function TimelineComparisonPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-2 text-amber-700 dark:text-amber-300">
        Isra and Miraj in Context
      </h1>
      <p className="text-center mb-8 text-amber-600 dark:text-amber-400">
        Exploring how the Night Journey relates to other major events in Prophet Muhammad's ﷺ life
      </p>

      <PropheticTimelineComparison />
    </div>
  )
}
