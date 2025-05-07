import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "The Story of Prophet Nuh (Noah) - KALAM",
  description:
    "Learn about Prophet Nuh (Noah), his long years of preaching, the great flood, and the lessons from his story in the Quran",
}

export default function NuhStoryPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold">The Story of Prophet Nuh (Noah)</h1>
        <div className="flex gap-2">
          <Link href="/prophets/stories">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Button>
          </Link>
          <Link href="/prophets">
            <Button variant="outline">Prophets Hub</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="prose dark:prose-invert max-w-none">
            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-100 dark:border-blue-900 mb-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center text-blue-800 dark:text-blue-300">
                <BookOpen className="h-5 w-5 mr-2" />
                Overview
              </h2>
              <p>
                Prophet Nuh (Noah) is one of the most prominent prophets mentioned in the Quran. He is known for his
                extraordinary patience, as he preached to his people for 950 years. Despite his persistent efforts, only
                a few believed in his message. His story culminates in the great flood, where Allah saved the believers
                in an ark and destroyed the disbelievers. Nuh is considered one of the Ulul 'Azm (the prophets of strong
                determination).
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Early Life and Prophethood</h2>
            <p>
              Nuh was born approximately 10 generations after Adam. He lived in a community that had abandoned the
              monotheistic teachings of their ancestors and had turned to idol worship. Allah chose Nuh to guide his
              people back to the worship of the One True God.
            </p>
            <p>
              When Nuh began his mission, he was already a mature man, respected among his people for his wisdom and
              integrity. The Quran does not provide details about his early life, but focuses on his prophetic mission
              and the challenges he faced in conveying Allah's message.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-100 dark:border-amber-900 my-6">
              <h3 className="flex items-center text-amber-800 dark:text-amber-300 font-semibold mb-2">
                <Quote className="h-5 w-5 mr-2" />
                From the Quran
              </h3>
              <p className="font-arabic text-xl text-right mb-2" dir="rtl">
                إِنَّا أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ أَنْ أَنذِرْ قَوْمَكَ مِن قَبْلِ أَن يَأْتِيَهُمْ عَذَابٌ أَلِيمٌ
              </p>
              <p className="italic">
                "Indeed, We sent Noah to his people, [saying], 'Warn your people before there comes to them a painful
                punishment.'" (Quran 71:1)
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">950 Years of Preaching</h2>
            <p>
              One of the most remarkable aspects of Nuh's story is the length of his prophetic mission. The Quran states
              that he preached to his people for 950 years, making him one of the longest-lived prophets mentioned in
              religious texts.
            </p>
            <p>
              Throughout this incredibly long period, Nuh employed various methods to invite his people to monotheism.
              He preached publicly and privately, day and night, using logical arguments and emotional appeals. Despite
              his persistent efforts, most of his people rejected his message and mocked him.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-100 dark:border-amber-900 my-6">
              <h3 className="flex items-center text-amber-800 dark:text-amber-300 font-semibold mb-2">
                <Quote className="h-5 w-5 mr-2" />
                From the Quran
              </h3>
              <p className="font-arabic text-xl text-right mb-2" dir="rtl">
                وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ
              </p>
              <p className="italic">
                "And We certainly sent Noah to his people, and he remained among them a thousand years minus fifty
                years, and the flood seized them while they were wrongdoers." (Quran 29:14)
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Opposition and Persecution</h2>
            <p>
              Nuh faced intense opposition from his people, particularly from the wealthy and influential members of
              society. They accused him of being merely a human like themselves, with no special status or authority.
              They also criticized his followers for being from the lower classes of society.
            </p>
            <p>
              The disbelievers employed various tactics to discourage people from following Nuh. They mocked him, spread
              rumors about him, and even threatened those who believed in his message. Despite these challenges, Nuh
              remained steadfast in his mission.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-100 dark:border-amber-900 my-6">
              <h3 className="flex items-center text-amber-800 dark:text-amber-300 font-semibold mb-2">
                <Quote className="h-5 w-5 mr-2" />
                From the Quran
              </h3>
              <p className="font-arabic text-xl text-right mb-2" dir="rtl">
                فَقَالَ الْمَلَأُ الَّذِينَ كَفَرُوا مِن قَوْمِهِ مَا نَرَاكَ إِلَّا بَشَرًا مِّثْلَنَا وَمَا نَرَاكَ اتَّبَعَكَ إِلَّا الَّذِينَ هُمْ أَرَاذِلُنَا بَادِيَ الرَّأْيِ وَمَا
                نَرَىٰ لَكُمْ عَلَيْنَا مِن فَضْلٍ بَلْ نَظُنُّكُمْ كَاذِبِينَ
              </p>
              <p className="italic">
                "So the eminent among those who disbelieved from his people said, 'We do not see you but as a man like
                ourselves, and we do not see you followed except by those who are the lowest of us [and] at first
                suggestion. And we do not see in you over us any merit; rather, we think you are liars.'" (Quran 11:27)
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Building the Ark</h2>
            <p>
              After centuries of preaching with limited success, Allah informed Nuh that no more people would believe in
              his message. Allah then commanded Nuh to build an ark in preparation for the coming flood.
            </p>
            <p>
              Nuh and his followers began constructing the ark, despite being far from any body of water. This further
              increased the mockery from the disbelievers, who saw the project as absurd. Nevertheless, Nuh continued
              the construction as commanded by Allah.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-100 dark:border-amber-900 my-6">
              <h3 className="flex items-center text-amber-800 dark:text-amber-300 font-semibold mb-2">
                <Quote className="h-5 w-5 mr-2" />
                From the Quran
              </h3>
              <p className="font-arabic text-xl text-right mb-2" dir="rtl">
                وَاصْنَعِ الْفُلْكَ بِأَعْيُنِنَا وَوَحْيِنَا وَلَا تُخَاطِبْنِي فِي الَّذِينَ ظَلَمُوا ۚ إِنَّهُم مُّغْرَقُونَ
              </p>
              <p className="italic">
                "And construct the ship under Our observation and Our inspiration and do not address Me concerning those
                who have wronged; indeed, they are [to be] drowned." (Quran 11:37)
              </p>
            </div>

            <p>
              The Quran does not provide detailed specifications of the ark, but Islamic traditions suggest it was a
              large vessel with multiple decks, capable of carrying many people and animals. According to these
              traditions, the ark was made of wood and was waterproofed with pitch.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Great Flood</h2>
            <p>
              When the ark was completed, Allah commanded Nuh to load it with a pair of each animal species and with the
              believers. The number of believers was small, estimated to be around 80 people, including Nuh's family
              members (except for one son and his wife who disbelieved).
            </p>
            <p>
              Then, the signs of the flood began to appear. Water started gushing from the earth and pouring from the
              sky in unprecedented quantities. The disbelievers, who had previously mocked Nuh, now sought higher ground
              to escape the rising waters, but to no avail.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-100 dark:border-amber-900 my-6">
              <h3 className="flex items-center text-amber-800 dark:text-amber-300 font-semibold mb-2">
                <Quote className="h-5 w-5 mr-2" />
                From the Quran
              </h3>
              <p className="font-arabic text-xl text-right mb-2" dir="rtl">
                فَفَتَحْنَا أَبْوَابَ السَّمَاءِ بِمَاءٍ مُّنْهَمِرٍ ﴿١١﴾ وَفَجَّرْنَا الْأَرْضَ عُيُونًا فَالْتَقَى الْمَاءُ عَلَىٰ أَمْرٍ قَدْ قُدِرَ
              </p>
              <p className="italic">
                "So We opened the gates of the heaven with rain pouring down and caused the earth to burst with springs,
                and the waters met for a matter already predestined." (Quran 54:11-12)
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Nuh's Son</h2>
            <p>
              One of the most poignant aspects of Nuh's story is the fate of his son who refused to board the ark. As
              the waters rose, Nuh saw his son and called out to him to join them on the ark, but his son refused,
              believing he could save himself by climbing a mountain.
            </p>
            <p>
              Despite Nuh's plea, his son remained adamant in his disbelief and was eventually drowned in the flood.
              This incident highlights that guidance is in Allah's hands, and even a prophet cannot guide those whom
              Allah has not decreed to be guided, including close family members.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-100 dark:border-amber-900 my-6">
              <h3 className="flex items-center text-amber-800 dark:text-amber-300 font-semibold mb-2">
                <Quote className="h-5 w-5 mr-2" />
                From the Quran
              </h3>
              <p className="font-arabic text-xl text-right mb-2" dir="rtl">
                وَنَادَىٰ نُوحٌ ابْنَهُ وَكَانَ فِي مَعْزِلٍ يَا بُنَيَّ ارْكَب مَّعَنَا وَلَا تَكُن مَّعَ الْكَافِرِينَ ﴿٤٢﴾ قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ ۚ
                قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ إِلَّا مَن رَّحِمَ ۚ وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ
              </p>
              <p className="italic">
                "And Noah called to his son who was apart [from them], 'O my son, come aboard with us and be not with
                the disbelievers.' [But] he said, 'I will take refuge on a mountain to protect me from the water.'
                [Noah] said, 'There is no protector today from the decree of Allah, except for whom He gives mercy.' And
                the waves came between them, and he was among the drowned." (Quran 11:42-43)
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">After the Flood</h2>
            <p>
              The flood continued until Allah's command came for it to subside. The ark eventually rested on Mount Judi
              (believed to be in present-day Turkey). Nuh and the believers disembarked and began to repopulate the
              earth.
            </p>
            <p>
              Allah blessed Nuh and his descendants, and all of humanity after the flood is considered to be from his
              progeny. This is why Nuh is sometimes referred to as the "second father of humanity" after Adam.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border border-amber-100 dark:border-amber-900 my-6">
              <h3 className="flex items-center text-amber-800 dark:text-amber-300 font-semibold mb-2">
                <Quote className="h-5 w-5 mr-2" />
                From the Quran
              </h3>
              <p className="font-arabic text-xl text-right mb-2" dir="rtl">
                وَقِيلَ يَا أَرْضُ ابْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي وَغِيضَ الْمَاءُ وَقُضِيَ الْأَمْرُ وَاسْتَوَتْ عَلَى الْجُودِيِّ ۖ وَقِيلَ بُعْدًا لِّلْقَوْمِ الظَّالِمِينَ
              </p>
              <p className="italic">
                "And it was said, 'O earth, swallow your water, and O sky, withhold [your rain].' And the water
                subsided, and the matter was accomplished, and the ship came to rest on the [mountain of] Judiyy. And it
                was said, 'Away with the wrongdoing people.'" (Quran 11:44)
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Legacy of Prophet Nuh</h2>
            <p>
              Nuh's story is mentioned in multiple chapters of the Quran, emphasizing its importance. An entire chapter,
              Surah Nuh (Chapter 71), is named after him. His story serves as a powerful reminder of Allah's mercy to
              the believers and His punishment for those who persistently reject the truth.
            </p>
            <p>
              Nuh is honored in Islam as one of the greatest prophets. He exemplifies extraordinary patience,
              perseverance, and unwavering faith in the face of overwhelming opposition. His story teaches us about the
              importance of steadfastness in conveying the truth, regardless of the response it receives.
            </p>
            <p>
              The story of the flood also serves as a reminder of Allah's power over creation and His ability to protect
              the believers while punishing the wrongdoers. It emphasizes that salvation comes through faith and
              righteous deeds, not through worldly status or family connections.
            </p>

            <div className="mt-8 flex justify-between">
              <Link href="/prophets/stories/adam">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous: Adam
                </Button>
              </Link>
              <Link href="/prophets/stories/ibrahim">
                <Button variant="outline" className="flex items-center">
                  Next: Ibrahim
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-4">
            <Tabs defaultValue="lessons" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="lessons">Key Lessons</TabsTrigger>
                <TabsTrigger value="references">Quranic References</TabsTrigger>
              </TabsList>
              <TabsContent value="lessons" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Lessons from Nuh's Story</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1">Patience in Adversity</h3>
                      <p className="text-sm">
                        Nuh preached for 950 years despite constant rejection, demonstrating extraordinary patience and
                        perseverance.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Faith Over Family Ties</h3>
                      <p className="text-sm">
                        Nuh's son rejected his message, showing that guidance comes from Allah, not family connections.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Consequences of Disbelief</h3>
                      <p className="text-sm">
                        The flood demonstrates that persistent rejection of truth can lead to divine punishment.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Trust in Allah's Plan</h3>
                      <p className="text-sm">
                        Building an ark far from water seemed illogical, but Nuh trusted Allah's command completely.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Salvation Through Faith</h3>
                      <p className="text-sm">
                        Only those who believed were saved, regardless of their social status or wealth.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Renewal After Destruction</h3>
                      <p className="text-sm">
                        The flood represents both punishment and purification, allowing humanity to start anew.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="references" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Quranic References</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1">Surah Nuh (Chapter 71)</h3>
                      <p className="text-sm">
                        An entire chapter dedicated to Nuh's story, detailing his methods of preaching and his prayer
                        against the disbelievers.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Surah Hud (11:25-49)</h3>
                      <p className="text-sm">
                        Detailed account of the flood, the building of the ark, and the dialogue between Nuh and his
                        son.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Surah Al-Mu'minun (23:23-30)</h3>
                      <p className="text-sm">
                        Describes Nuh's mission and the flood, emphasizing the salvation of the believers.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Surah Al-Shu'ara (26:105-122)</h3>
                      <p className="text-sm">
                        Focuses on the dialogue between Nuh and his people, highlighting their rejection and mockery.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Surah Al-Qamar (54:9-15)</h3>
                      <p className="text-sm">
                        Brief but powerful description of the flood and the ark as a sign for future generations.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Surah Al-Ankabut (29:14-15)</h3>
                      <p className="text-sm">
                        Mentions that Nuh lived among his people for 950 years before the flood came.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Related Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Link href="/prophets/family-tree" className="text-blue-600 dark:text-blue-400 hover:underline block">
                    Prophet Family Tree
                  </Link>
                  <p className="text-sm">See Nuh's place in the prophetic lineage</p>
                </div>
                <div>
                  <Link
                    href="/prophets/quranic-references"
                    className="text-blue-600 dark:text-blue-400 hover:underline block"
                  >
                    Quranic References to Prophets
                  </Link>
                  <p className="text-sm">Explore all verses about Nuh in the Quran</p>
                </div>
                <div>
                  <Link
                    href="/vocabulary?category=prophets"
                    className="text-blue-600 dark:text-blue-400 hover:underline block"
                  >
                    Prophet Vocabulary
                  </Link>
                  <p className="text-sm">Learn Quranic terms related to prophets</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
