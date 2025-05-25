import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, BookOpen, Quote, Lightbulb, Navigation } from "lucide-react"

export const metadata = {
  title: "The Story of Ibrahim (Abraham) - KALAM",
  description:
    "Learn about Prophet Ibrahim (Abraham), the friend of Allah, and his trials and triumphs as mentioned in the Quran",
}

export default function IbrahimStoryPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link
            href="/prophets/stories"
            className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-2"
          >
            <ArrowLeft className="mr-1 h-3 w-3" />
            Back to Prophet Stories
          </Link>
          <h1 className="text-3xl font-bold">The Story of Ibrahim (Abraham)</h1>
          <p className="text-gray-600 dark:text-gray-400">خَلِيلُ ٱللَّٰهِ - The Friend of Allah</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="prose dark:prose-invert max-w-none">
                <h2>The Early Life of Ibrahim</h2>
                <p>
                  Prophet Ibrahim (Abraham) was born in a society where people worshipped idols. His father, Azar, was a
                  sculptor who crafted idols for people to worship. From an early age, Ibrahim questioned the practice
                  of idol worship, as he observed that these statues could neither hear, see, nor respond to prayers.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-6 flex items-start">
                  <Quote className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-arabic text-xl mb-2 text-right" dir="rtl">
                      وَإِذْ قَالَ إِبْرَاهِيمُ لِأَبِيهِ آزَرَ أَتَتَّخِذُ أَصْنَامًا آلِهَةً ۖ إِنِّي أَرَاكَ وَقَوْمَكَ فِي ضَلَالٍ مُّبِينٍ
                    </p>
                    <p className="italic">
                      "And [mention, O Muhammad], when Abraham said to his father Azar, 'Do you take idols as deities?
                      Indeed, I see you and your people to be in manifest error.'" (Quran 6:74)
                    </p>
                  </div>
                </div>

                <h2>The Search for Truth</h2>
                <p>
                  Ibrahim's journey to find the truth began with his observation of celestial bodies. One night, he saw
                  a star and said, "This is my Lord." But when it set, he realized that his Lord could not be something
                  that disappears. He then observed the moon, and later the sun, but came to the same conclusion when
                  they set.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-6 flex items-start">
                  <Quote className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-arabic text-xl mb-2 text-right" dir="rtl">
                      فَلَمَّا جَنَّ عَلَيْهِ اللَّيْلُ رَأَىٰ كَوْكَبًا ۖ قَالَ هَٰذَا رَبِّي ۖ فَلَمَّا أَفَلَ قَالَ لَا أُحِبُّ الْآفِلِينَ
                    </p>
                    <p className="italic">
                      "So when the night covered him [with darkness], he saw a star. He said, 'This is my lord.' But
                      when it set, he said, 'I like not those that disappear.'" (Quran 6:76)
                    </p>
                  </div>
                </div>

                <p>
                  Through this process of reflection, Ibrahim came to the realization that the true God must be the
                  Creator of all these things, not the created objects themselves. He turned to the worship of Allah,
                  the One True God.
                </p>

                <h2>Breaking the Idols</h2>
                <p>
                  In an effort to show his people the futility of idol worship, Ibrahim devised a plan. When the people
                  left for a festival, he entered the temple where the idols were kept. He broke all the idols except
                  the largest one, and hung the axe around its neck.
                </p>

                <p>
                  When the people returned and saw their idols destroyed, they immediately suspected Ibrahim. When
                  questioned, he suggested they ask the largest idol who had done this. This, of course, was impossible,
                  and Ibrahim used this opportunity to point out the absurdity of worshipping objects that could neither
                  protect themselves nor communicate.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-6 flex items-start">
                  <Quote className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-arabic text-xl mb-2 text-right" dir="rtl">
                      قَالَ بَلْ فَعَلَهُ كَبِيرُهُمْ هَٰذَا فَاسْأَلُوهُمْ إِن كَانُوا يَنطِقُونَ
                    </p>
                    <p className="italic">
                      "He said, 'Rather, this - the largest of them - did it, so ask them, if they should [be able to]
                      speak.'" (Quran 21:63)
                    </p>
                  </div>
                </div>

                <h2>The Fire That Did Not Burn</h2>
                <p>
                  Angered by Ibrahim's actions and his refusal to stop preaching against idol worship, the king, Nimrod,
                  ordered that Ibrahim be thrown into a massive fire. The people built a huge fire and used a catapult
                  to throw Ibrahim into it.
                </p>

                <p>
                  However, Allah commanded the fire: "O fire, be coolness and safety upon Ibrahim." Miraculously, the
                  fire did not burn Ibrahim. He emerged unharmed, which was a powerful sign for the people, though many
                  still refused to believe.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-6 flex items-start">
                  <Quote className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-arabic text-xl mb-2 text-right" dir="rtl">
                      قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ
                    </p>
                    <p className="italic">"Allah said, 'O fire, be coolness and safety upon Abraham.'" (Quran 21:69)</p>
                  </div>
                </div>

                <h2>Migration and Family</h2>
                <p>
                  After this event, Ibrahim migrated with his wife Sarah and his nephew Lut (Lot). They traveled to
                  Egypt and then to Palestine. Sarah was unable to have children, so she suggested that Ibrahim marry
                  her Egyptian handmaid, Hajar (Hagar). Hajar gave birth to Isma'il (Ishmael).
                </p>

                <p>
                  Later, in their old age, Allah blessed Ibrahim and Sarah with another son, Ishaq (Isaac). Both Isma'il
                  and Ishaq would go on to become prophets. Isma'il is considered the forefather of the Arabs, while
                  Ishaq is considered the forefather of the Israelites.
                </p>

                <h2>The Test of Sacrifice</h2>
                <p>
                  One of the most significant trials in Ibrahim's life came when Allah commanded him in a dream to
                  sacrifice his son. Without hesitation, Ibrahim prepared to submit to Allah's command. He told his son
                  about the dream, and his son, showing remarkable faith, encouraged his father to fulfill the command.
                </p>

                <p>
                  As Ibrahim was about to sacrifice his son, Allah substituted a ram in his place. This demonstrated
                  that Ibrahim and his son had passed the test of their faith and submission to Allah.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-6 flex items-start">
                  <Quote className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-arabic text-xl mb-2 text-right" dir="rtl">
                      فَلَمَّا أَسْلَمَا وَتَلَّهُ لِلْجَبِينِ ﴿��٠٣﴾ وَنَادَيْنَاهُ أَن يَا إِبْرَاهِيمُ ﴿١٠٤﴾ قَدْ صَدَّقْتَ الرُّؤْيَا ۚ إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ
                      ﴿١٠٥﴾ إِنَّ هَٰذَا لَهُوَ الْبَلَاءُ الْمُبِينُ ﴿١٠٦﴾ وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ
                    </p>
                    <p className="italic">
                      "And when they had both submitted and he put him down upon his forehead, We called to him, 'O
                      Abraham, You have fulfilled the vision.' Indeed, We thus reward the doers of good. Indeed, this
                      was the clear trial. And We ransomed him with a great sacrifice." (Quran 37:103-107)
                    </p>
                  </div>
                </div>

                <h2>Building the Ka'bah</h2>
                <p>
                  Ibrahim and his son Isma'il built the Ka'bah in Makkah, which became the holiest site in Islam. This
                  act symbolized the establishment of monotheism in Arabia. Ibrahim and Isma'il prayed that they be made
                  Muslims (submitters to Allah) and that their descendants would form a Muslim nation.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 my-6 flex items-start">
                  <Quote className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-arabic text-xl mb-2 text-right" dir="rtl">
                      وَإِذْ يَرْفَعُ إِبْرَاهِيمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَإِسْمَاعِيلُ رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ
                    </p>
                    <p className="italic">
                      "And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael,
                      [saying], 'Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing.'" (Quran
                      2:127)
                    </p>
                  </div>
                </div>

                <h2>Legacy of Ibrahim</h2>
                <p>
                  Ibrahim is revered in Islam as one of the greatest prophets. He is known as "Khalilullah" (the Friend
                  of Allah) and is mentioned numerous times in the Quran. The annual Hajj pilgrimage commemorates
                  several events from Ibrahim's life, including the building of the Ka'bah and the willingness to
                  sacrifice his son.
                </p>

                <p>
                  Ibrahim's unwavering faith, his willingness to sacrifice everything for Allah, and his dedication to
                  monotheism make him an exemplary figure for Muslims to follow. His legacy continues through the
                  Abrahamic religions: Islam, Christianity, and Judaism.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                  Key Lessons
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>Unwavering Faith:</strong> Ibrahim's steadfast belief in Allah despite extreme trials
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>Logical Reasoning:</strong> Using rational thought to discover the truth about God
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>Courage:</strong> Standing up for truth even when facing persecution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>Submission to Allah:</strong> Complete surrender to Allah's will, even when asked to
                      sacrifice his son
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-1 mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>Patience:</strong> Enduring trials with steadfastness and trust in Allah
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-emerald-500" />
                  Quranic References
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Surah Al-Baqarah (2):</strong> Verses 124-132, 258, 260
                  </li>
                  <li>
                    <strong>Surah Al-An'am (6):</strong> Verses 74-83
                  </li>
                  <li>
                    <strong>Surah Hud (11):</strong> Verses 69-76
                  </li>
                  <li>
                    <strong>Surah Ibrahim (14):</strong> Entire surah named after him
                  </li>
                  <li>
                    <strong>Surah Al-Anbiya (21):</strong> Verses 51-73
                  </li>
                  <li>
                    <strong>Surah As-Saffat (37):</strong> Verses 83-113
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Read All Verses
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Navigation className="h-5 w-5 mr-2 text-blue-500" />
                  Explore More
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/prophets/family-tree"
                    className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Ibrahim's Family Tree
                  </Link>
                  <Link
                    href="/vocabulary?search=ibrahim"
                    className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Related Vocabulary
                  </Link>
                  <Link
                    href="/quizzes/categories/prophets"
                    className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Test Your Knowledge
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link href="/prophets/stories/nuh">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous: Nuh (Noah)
          </Button>
        </Link>
        <Link href="/prophets/stories">
          <Button>All Prophet Stories</Button>
        </Link>
        <Link href="/prophets/stories/ismail">
          <Button variant="outline" className="flex items-center">
            Next: Isma'il (Ishmael)
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
