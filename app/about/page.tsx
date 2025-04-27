import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">About KALAM</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            KALAM (Quran Arabic Learning And Memorization) is an open-source project dedicated to making Quranic Arabic
            vocabulary accessible to everyone. Our mission is to help Muslims and Arabic language enthusiasts develop a
            deeper connection with the Quran through interactive learning tools.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            We believe that understanding the language of the Quran enhances one's spiritual experience and provides a
            more profound connection to the text. By creating engaging, interactive tools for vocabulary acquisition, we
            hope to make this journey enjoyable and effective.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Interactive flashcards with Quranic vocabulary</li>
            <li>Quizzes to test and reinforce learning</li>
            <li>Vocabulary matching games</li>
            <li>Progress tracking</li>
            <li>Examples from the Quran for context</li>
            <li>Responsive design for desktop and mobile use</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Open Source</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            KALAM is completely open-source and free to use. We welcome contributions from developers, Arabic linguists,
            Quran scholars, and anyone passionate about making Quranic knowledge more accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="https://github.com/your-username/kalam" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto">
                <Github className="mr-2 h-4 w-4" />
                GitHub Repository
              </Button>
            </Link>
            <Link href="/contribute">
              <Button variant="outline" className="w-full sm:w-auto">
                How to Contribute
              </Button>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technology</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">KALAM is built using modern web technologies:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Next.js - React framework for server-rendered applications</li>
            <li>TypeScript - For type safety and better developer experience</li>
            <li>Tailwind CSS - For responsive and customizable styling</li>
            <li>Vercel - For deployment and hosting</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">IQRA Codes Team</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            {" "}
            وهي صدقة جارية لوجه الله تعالى or This is an ongoing charity for the sake of Allah Almighty. <br />
            Thus, all apps by IQRA codes team of Rafique and Joy are freeware, and open source.
            <br />
            So, do send your suggestions to Rafique by WhatsApp on +91 7558845528 and May Allah reward Joy whose mail is
            joy_ahmed_007@yahoo.com for his guidance and help.
          </p>
        </section>

        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
