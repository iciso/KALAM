import Link from "next/link" 
import { ArrowRight, ArrowLeft, Github, BookOpen, Database, Album, Users, Clock, Trophy, Gamepad2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button"
import { KalamAcronym } from "@/components/kalam-acronym"

/*
KALAM To do list: 
Acknowledge all other AI contributors like Grok, DeepSeek, and Gemini
Make all Games, quizzes, and pages Mobile Responsive one by one
Maintain uniform UI and UX as if one AI did the entire project
For Games, use pre-defined data especially for vocabulary to avoid doubles
Create an open-access single KALAM Leaderboard for all games & quizzes
Cross-link IQRA & KALAM to guide users who want or do not want challenges
New games like Dawah Game, Hajj Game, Salah Game, 
Expand and Complete Surah Quizzes -> 1 to 114
*/

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">About KALAM Demo App</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <section className="mb-12">
          <div className="flex justify-center mb-8">
            <KalamAcronym size="md" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            KALAM (Know Allah by Lovely Activities of Mirth) is an open-source Demo project dedicated to making Quranic Arabic or the words of Allah comprehensible to everyone. Our mission is to help Muslims and Arabic language enthusiasts
            develop a deeper connection with the Quran through gaming and other interactive learning tools.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Muslims believe that understanding the language of the Quran enhances one's spiritual experience and provides a
            more profound connection to the text. By creating engaging, gaming and interactive tools for vocabulary acquisition, we
            hope to make this journey fun-filled, enjoyable and effective.
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
            <Link href="https://github.com/iciso/KALAM" target="_blank" rel="noopener noreferrer">
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
            <li>Supabase - For authentication and real-time database</li>
            <li>Vercel - For deployment and hosting</li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <img src="https://supabase.com/images/logo-dark.png" alt="Supabase Logo" className="h-10 w-auto hover:scale-105 transition-transform dark:invert" />
            <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" alt="Vercel Logo" className="h-10 w-auto hover:scale-105 transition-transform dark:invert" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Acknowledgments</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            All praise and thanks are due to Allah <span className="text-3xl font-normal align-middle">ﷻ</span>, The Entirely Merciful, The Entirely Generous. KALAM is a labor of love, made possible through the blessings of Allah and the contributions of many, Ameen, Summa Ameen.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <strong>Concept, Design & Demo Version:</strong> By{" "}
              <a
                href="https://cvemrafi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Mohamed Essa Rafique
              </a>, whose vision and dedication brought KALAM to life, Alhamdulillah. May Allah <span className="text-3xl font-normal align-middle">ﷻ</span> reward{" "}
              <a
                href="https://zettabyteincorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Joy Ahmed
              </a>{" "}
              (joy_ahmed_007@yahoo.com) for guiding and mentoring Rafique in this noble endeavor.
            </li>
            <li>
              <strong>Alpha & Beta Versions, Scale-up, Maintenance:</strong> Powered by{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Vercel
              </a>{" "}
              and their innovative v0 platform. The seamless deployment and scaling of KALAM owe much to Vercel’s robust infrastructure.
              <div className="mt-2">
                <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" alt="Vercel Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
              </div>
            </li>
            <li>
              <strong>AI-Powered Debugging & Code Optimization:</strong> Special thanks to{" "}
              <a
                href="https://x.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                xAI
              </a>{" "}
              and their AI assistant, Grok, for tirelessly assisting in debugging, optimizing, and enhancing the codebase of both IQRA and KALAM over the past month. Grok’s precision and insights have been instrumental in ensuring a robust and reliable application, Alhamdulillah.
              <div className="mt-2">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:text-gray-300">
                  <path d="M2.30047 8.77631L12.0474 23H16.3799L6.63183 8.77631H2.30047ZM6.6285 16.6762L2.29492 23H6.63072L8.79584 19.8387L6.6285 16.6762ZM17.3709 1L9.88007 11.9308L12.0474 15.0944L21.7067 1H17.3709ZM18.1555 7.76374V23H21.7067V2.5818L18.1555 7.76374Z" fill="currentColor"></path>
                </svg>
              </div>
            </li>
            <li>
              <strong>Data Coding & Content Curation:</strong> Deep gratitude to{" "}
              <a
                href="https://www.deepseek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                DeepSeek
              </a>{" "}
              for their invaluable assistance in structuring data and curating Islamic content, ensuring KALAM’s knowledge base is accurate and accessible, Alhamdulillah.
              <div className="mt-2">
                  <img src="/deepseek.svg" alt="DeepSeek Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                  </div>
            </li>
            <li>
              <strong>Content Creation:</strong> Heartfelt thanks to{" "}
              <a
                href="https://gemini.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Gemini
              </a>{" "}
              for their contributions to crafting engaging and meaningful content for KALAM, enhancing the learning experience for users worldwide, Alhamdulillah.
                <div className="mt-2">
                  <img src="/Gemini.svg" alt="Gemini Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                  </div>
              </li>
            <li>
              <strong>Community & Contributors:</strong> Immense gratitude to{" "}
              <a
                href="https://www.meta.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Meta
              </a>{" "}
          all our future open-source contributors, Quran scholars, Arabic linguists, and community members who would provide feedback, questions, and support to make KALAM a global platform for Islamic learning. Shout out to our prospective members who would join our yet to start Groups and Channels in WhatsApp, and Community pages in Fb and other Meta platforms. May Allah <span className="text-3xl font-normal align-middle">ﷻ</span> accept their efforts.
                <div className="flex flex-wrap gap-4 mt-4 justify-center">
                  <div className="mt-2">
                  <img src="/meta.png" alt="Meta WhatsApp Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                  </div>
                      <div className="mt-2">
                      <img src="/Instagram.png" alt="Instagram Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                        </div>
                   <div className="mt-2">
                  <img src="/meta.svg" alt="Meta Fb Logo" className="h-8 w-auto inline-block hover:scale-105 transition-transform dark:invert" />
                  </div>
                </div>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">IQRA Papers</h2>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            This document provides the Policy, Proposal, & Plans (PPP) for the future to continue this ongoing charity for the sake of Allah <span className="text-3xl font-normal align-middle">ﷻ</span>, The Entirely Merciful, The Entirely Generous.
          </p>
           <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <Link href="https://tinyurl.com/mchf5tut" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                <Album className="mr-2 h-4 w-4" />
                IQRA Papers
              </Button>
            </Link>
          </div>
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
      <div className="border-t border-gray-200 p-4 text-center text-sm text-gray-700 bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 w-full mt-8 rounded-lg">
        <div className="flex items-center justify-center mb-1">
          <MessageSquare className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
          <span>
            For suggestions WhatsApp{" "}
            <a
              href="https://cvemrafi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Rafique
            </a>{" "}
            at +91 7558845528
          </span>
        </div>
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 496.08 512" className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400">
            <path
              fill="currentColor"
              d="M245.83 214.87l-33.22 17.28c-9.43-19.58-25.24-19.93-27.46-19.93-22.13 0-33.22 14.61-33.22 43.84 0 23.57 9.21 43.84 33.22 43.84 14.47 0 24.65-7.09 30.57-21.26l30.55 15.5c-6.17 11.51-25.69 38.98-65.1 38.98-22.6 0-73.96-10.32-73.96-77.05 0-58.69 43-77.06 72.63-77.06 30.72-.01 52.7 11.95 65.99 35.86zm143.05 0l-32.78 17.28c-9.5-19.77-25.72-19.93-27.9-19.93-22.14 0-33.22 14.61-33.22 43.84 0 23.55 9.23 43.84 33.22 43.84 14.45 0 24.65-7.09 30.54-21.26l31 15.5c-2.1 3.75-21.39 38.98-65.09 38.98-22.69 0-73.96-9.87-73.96-77.05 0-58.67 42.97-77.06 72.63-77.06 30.71-.01 52.58 11.95 65.56 35.86zM247.56 8.05C104.74 8.05 0 123.11 0 256.05c0 138.49 113.6 248 247.56 248 129.93 0 248.44-100.87 248.44-248 0-137.87-106.62-248-248.44-248zm.87 450.81c-112.54 0-203.7-93.04-203.7-202.81 0-105.42 85.43-203.27 203.72-203.27 112.53 0 202.82 89.46 202.82 203.26-.01 121.69-99.68 202.82-202.84 202.82z"
            />
          </svg>
          <span>
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              License 4.0
            </a>{" "}
            • Iqra 💡 Team
          </span>
        </div>
      </div>
    </div>
  );
}
