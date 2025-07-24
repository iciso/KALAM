export const metadata = {
  title: "Make Quranic Ayats - KALAM",
  description: "Arrange words to form Quranic verses in this interactive game",
}

import { QuranicAyatsWrapper } from "./QuranicAyatsClient"

export default function QuranicAyatsPage() {
  return <QuranicAyatsWrapper difficulty="easy" initialAyatCount={5} />
}

export const dynamic = 'force-dynamic' // Important for Next.js
