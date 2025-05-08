"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  BookOpen,
  Users,
  Lightbulb,
  MessageSquare,
  Clock,
  ArrowRight,
  ExternalLink,
  Info,
} from "lucide-react"

// Types for our data
interface RevelationCause {
  id: string
  verseRange: string
  title: string
  historicalEvent: string
  year: string
  month?: string
  location: string
  keyFigures: string[]
  narrative: string
  thematicConnection: string[]
  legislativeImplications?: string[]
  authenticityLevel: "sahih" | "hasan" | "daif"
  source: string
  coordinates?: {
    lat: number
    lng: number
  }
}

interface SurahData {
  id: number
  name: string
  arabicName: string
  englishMeaning: string
  revelationPlace: "Meccan" | "Medinan"
  verses: number
  chronologicalOrder: number
  mainThemes: string[]
  period: string
  revelationTimespan: string
  overview: string
}

// Surah Al-Baqarah data
const surahData: SurahData = {
  id: 2,
  name: "Al-Baqarah",
  arabicName: "البقرة",
  englishMeaning: "The Cow",
  revelationPlace: "Medinan",
  verses: 286,
  chronologicalOrder: 87,
  mainThemes: [
    "Faith and Disbelief",
    "Islamic Law",
    "Stories of Previous Prophets",
    "Establishment of the Muslim Community",
    "Moral and Ethical Teachings",
  ],
  period: "Early to Middle Medinan Period",
  revelationTimespan: "Over several years after Hijrah (622-625 CE)",
  overview:
    "Surah Al-Baqarah is the longest chapter in the Quran and was revealed primarily during the early years after the migration to Medina. It addresses the newly forming Muslim community and establishes many foundational aspects of Islamic belief and practice. The surah derives its name from the story of the cow that the Children of Israel were commanded to sacrifice. It contains numerous legislative verses, stories of previous prophets, and guidance for the emerging Muslim society.",
}

// Revelation causes for Surah Al-Baqarah
const revelationCauses: RevelationCause[] = [
  {
    id: "baqarah-001",
    verseRange: "1-5",
    title: "Description of the Believers and Disbelievers",
    historicalEvent: "Early Formation of the Medinan Community",
    year: "622",
    month: "Muharram",
    location: "Medina",
    keyFigures: ["Early Muslims", "Hypocrites of Medina", "Jewish tribes"],
    narrative:
      "These opening verses were revealed shortly after the Prophet's migration to Medina, as the Muslim community was beginning to establish itself. The verses distinguished between three groups: the believers, the disbelievers, and the hypocrites. This categorization was particularly relevant in Medina, where the Prophet was dealing with not only open believers and disbelievers but also hypocrites who outwardly professed faith while inwardly harboring doubt and enmity. The Jewish tribes of Medina were also addressed, as they had been expecting a prophet but many refused to accept Muhammad when he arrived.",
    thematicConnection: ["Faith", "Hypocrisy", "Guidance", "Success in the Hereafter"],
    authenticityLevel: "sahih",
    source: "Reported in multiple hadith collections including Sahih al-Bukhari",
  },
  {
    id: "baqarah-002",
    verseRange: "142-150",
    title: "Change of the Qibla Direction",
    historicalEvent: "Changing the Prayer Direction from Jerusalem to Mecca",
    year: "624",
    month: "Rajab",
    location: "Medina",
    keyFigures: ["Prophet Muhammad", "Muslims of Medina", "Jews of Medina"],
    narrative:
      "For the first 16-17 months after the migration to Medina, Muslims prayed facing Jerusalem, as did the Jews. The Prophet Muhammad, however, desired to face the Kaaba in Mecca, the house built by Abraham. He would often look up to the sky, awaiting revelation. These verses were then revealed, commanding the change of the qibla (prayer direction) from Jerusalem to the Sacred Mosque in Mecca. This change occurred while Muslims were praying the Asr (afternoon) prayer at the Quba Mosque. Upon hearing the revelation, they immediately changed direction mid-prayer. The Jews criticized this change, questioning the consistency of Islamic practices, and these verses addressed their objections while affirming the divine wisdom behind the change.",
    thematicConnection: [
      "Prayer Direction",
      "Religious Identity",
      "Abrahamic Legacy",
      "Divine Testing",
      "Distinction from Other Faiths",
    ],
    legislativeImplications: ["Establishment of the Kaaba as the permanent qibla for Muslim prayer"],
    authenticityLevel: "sahih",
    source: "Reported in Sahih al-Bukhari and Sahih Muslim",
  },
  {
    id: "baqarah-003",
    verseRange: "158",
    title: "The Rites of Safa and Marwa",
    historicalEvent: "Companions' Hesitation about Pre-Islamic Rituals",
    year: "623",
    location: "Medina",
    keyFigures: ["Companions of the Prophet", "Pre-Islamic pilgrims"],
    narrative:
      "During the pre-Islamic period, there were two idols placed on the hills of Safa and Marwa in Mecca, and the pagans would walk between these hills as part of their pilgrimage rituals. After embracing Islam, some Muslims felt uncomfortable performing this ritual during Hajj or Umrah because of its association with idolatry. This verse was revealed to clarify that walking between Safa and Marwa was among the rites prescribed by Allah and had its origins in the actions of Hajar (Hagar), the wife of Prophet Ibrahim, who ran between these hills searching for water for her son Ismail. The verse removed the hesitation of the Muslims by affirming that these rituals were part of the authentic Abrahamic tradition, not pagan innovations.",
    thematicConnection: ["Hajj Rituals", "Purification of Traditions", "Abrahamic Legacy"],
    legislativeImplications: ["Confirmation of Sa'i (walking between Safa and Marwa) as an essential Hajj ritual"],
    authenticityLevel: "sahih",
    source: "Reported by Aisha in Sahih al-Bukhari",
  },
  {
    id: "baqarah-004",
    verseRange: "178-179",
    title: "The Law of Equitable Retribution",
    historicalEvent: "Tribal Disputes and Unequal Blood Compensation",
    year: "623",
    location: "Medina",
    keyFigures: ["Arab tribes", "Victims of pre-Islamic blood feuds"],
    narrative:
      "In pre-Islamic Arabia, blood feuds between tribes often resulted in excessive retaliation and perpetual cycles of violence. If a person from a 'noble' tribe was killed, the victim's tribe might demand the execution of multiple people from the killer's tribe, or insist that only a person of equal or higher status could be killed in retribution. These verses were revealed to establish the principle of equitable retribution (qisas), where only the actual perpetrator of a murder could be punished, regardless of social status. The verses also established the option of accepting blood money (diyah) instead of retribution, encouraging forgiveness and mercy. This legislation aimed to break the cycle of tribal vengeance while ensuring justice for victims.",
    thematicConnection: ["Justice", "Equality", "Mercy", "Social Reform", "Preservation of Life"],
    legislativeImplications: [
      "Establishment of equitable retribution (qisas)",
      "Option of blood money (diyah)",
      "Encouragement of forgiveness",
    ],
    authenticityLevel: "sahih",
    source: "Reported in Sahih al-Bukhari",
  },
  {
    id: "baqarah-005",
    verseRange: "183-187",
    title: "Fasting Regulations",
    historicalEvent: "Establishment of Ramadan Fasting",
    year: "624",
    location: "Medina",
    keyFigures: ["Early Muslim community", "Companions struggling with initial fasting rules"],
    narrative:
      "These verses were revealed in the second year after Hijrah, establishing the obligation of fasting during the month of Ramadan. Initially, the fasting rules were quite strict: once a person slept after breaking their fast, they could not eat or drink until the next sunset, even if they woke up in the night. Additionally, intimate relations with spouses were prohibited throughout the entire month, day and night. This caused hardship for some Companions, including cases where some fainted during the day due to hunger and thirst. Umar ibn al-Khattab confessed to the Prophet that he had been intimate with his wife after waking up at night. In response, these verses were revealed, easing the initial restrictions by allowing eating, drinking, and marital relations during the nights of Ramadan until dawn.",
    thematicConnection: ["Ritual Worship", "Self-Discipline", "Divine Mercy", "Gradual Legislation"],
    legislativeImplications: [
      "Obligation of Ramadan fasting",
      "Permission for eating, drinking, and marital relations during nights of Ramadan",
      "Exemptions for travelers and the sick",
    ],
    authenticityLevel: "sahih",
    source: "Reported in Sahih al-Bukhari and Sahih Muslim",
  },
  {
    id: "baqarah-006",
    verseRange: "190-195",
    title: "Fighting in the Sacred Months",
    historicalEvent: "The Expedition of Abdullah ibn Jahsh",
    year: "624",
    month: "Rajab",
    location: "Nakhla Valley",
    keyFigures: ["Abdullah ibn Jahsh", "Companions in the expedition", "Quraysh merchants"],
    narrative:
      "The Prophet Muhammad sent Abdullah ibn Jahsh with a small group of Muslims on a reconnaissance mission. They encountered a Quraysh caravan at Nakhla and attacked it, killing one person and taking two prisoners along with the caravan's goods. This occurred during Rajab, one of the sacred months when fighting was traditionally prohibited in Arabia. The Quraysh used this incident to propagate that Muslims violated sacred customs. The Muslims involved were also uncertain about the propriety of their actions. These verses were revealed to address the permissibility of fighting in sacred months when there is a greater evil (like preventing people from the path of Allah and expelling them from their homes) at stake. The verses clarified that while fighting in the sacred month was a sin, the persecution and prevention of people from following their faith was a greater sin in Allah's sight.",
    thematicConnection: ["Warfare", "Sacred Months", "Religious Persecution", "Self-defense", "Greater Good"],
    legislativeImplications: ["Guidelines for warfare", "Hierarchy of sins and violations"],
    authenticityLevel: "sahih",
    source: "Reported by Ibn Abbas in Sahih al-Bukhari",
  },
  {
    id: "baqarah-007",
    verseRange: "217-218",
    title: "Fighting in the Sacred Month",
    historicalEvent: "The Nakhla Raid Controversy",
    year: "624",
    month: "Rajab",
    location: "Medina",
    keyFigures: ["Abdullah ibn Jahsh", "Quraysh leaders", "Muslim community"],
    narrative:
      "This verse was revealed following the same incident as the previous cause (the Nakhla raid), but addresses additional aspects of the controversy. When Abdullah ibn Jahsh and his companions returned to Medina with captives and spoils from the Quraysh caravan they had attacked during the sacred month of Rajab, there was significant debate. The Quraysh accused Muslims of violating sacred customs, while some Muslims were concerned about the spiritual consequences of this action. The Prophet initially distanced himself from the expedition's outcome, saying, 'I did not order you to fight in the sacred month.' These verses were revealed to provide a comprehensive response to the situation, acknowledging that fighting in the sacred month was sinful while contextualizing it against the greater sins committed by the Quraysh: preventing access to the Sacred Mosque, expelling Muslims from their homes, and religious persecution. The verses also reassured those who had participated in the raid that their faith and migration (hijrah) were still valid acts that could merit Allah's mercy.",
    thematicConnection: [
      "Warfare Ethics",
      "Religious Persecution",
      "Divine Forgiveness",
      "Weighing of Sins",
      "Striving in Allah's Cause",
    ],
    legislativeImplications: ["Principles for evaluating conflicting religious prohibitions"],
    authenticityLevel: "sahih",
    source: "Reported by Ibn Abbas and collected in multiple hadith compilations",
  },
  {
    id: "baqarah-008",
    verseRange: "219-220",
    title: "Rulings on Intoxicants and Orphans' Affairs",
    historicalEvent: "Community Questions about Social Practices",
    year: "623",
    location: "Medina",
    keyFigures: ["Companions who consumed alcohol", "Guardians of orphans"],
    narrative:
      "These verses were revealed in response to specific questions raised by the Companions. Regarding intoxicants, Muslims asked about the permissibility of consuming alcohol, which was common in pre-Islamic society. This verse represented the first stage in the gradual prohibition of alcohol, acknowledging both benefits (social and economic) and harms, while indicating that the harm outweighed the benefit. It prepared the community for the complete prohibition that would come later. Regarding orphans, after the revelation of verses warning against consuming orphans' property unjustly, some Companions became extremely cautious, completely separating their affairs from those of orphans under their care. This created practical difficulties in managing orphans' property. The latter part of these verses clarified that the intention was not to create hardship but to ensure justice, allowing guardians to mix their affairs with orphans' as long as they maintained fairness and good intentions.",
    thematicConnection: [
      "Gradual Legislation",
      "Social Ethics",
      "Care for Vulnerable Groups",
      "Balance in Religious Practice",
    ],
    legislativeImplications: [
      "First stage in the prohibition of intoxicants",
      "Guidelines for managing orphans' affairs",
      "Principle of intention in applying religious rulings",
    ],
    authenticityLevel: "sahih",
    source: "Reported in Sahih al-Bukhari and Sahih Muslim",
  },
  {
    id: "baqarah-009",
    verseRange: "222-223",
    title: "Intimate Relations and Menstruation",
    historicalEvent: "Questions about Marital Intimacy",
    year: "623",
    location: "Medina",
    keyFigures: ["Jewish community of Medina", "Muslim couples"],
    narrative:
      "These verses were revealed in response to questions about intimate relations with menstruating wives. In Medina, Muslims observed that the Jewish community completely avoided women during menstruation, not eating with them, sitting with them, or staying in the same house. Conversely, some pre-Islamic Arab customs had no restrictions during menstruation. The Companions asked the Prophet for guidance on this matter. These verses provided a balanced approach, prohibiting sexual intercourse during menstruation while allowing other forms of intimacy and normal social interaction. The verses also addressed misconceptions about permissible sexual positions, as some Muslims believed that approaching one's wife from behind (in any position) was prohibited or would result in children born with defects. The revelation clarified that spouses could engage in intimacy in any manner as long as intercourse occurred in the appropriate place.",
    thematicConnection: ["Marital Relations", "Ritual Purity", "Women's Status", "Balance in Religious Practice"],
    legislativeImplications: [
      "Rules regarding menstruation",
      "Guidelines for marital intimacy",
      "Rejection of superstitions about conception",
    ],
    authenticityLevel: "sahih",
    source: "Reported by Anas ibn Malik in Sahih Muslim",
  },
  {
    id: "baqarah-010",
    verseRange: "256",
    title: "No Compulsion in Religion",
    historicalEvent: "Conversion of Children from Jewish and Christian Families",
    year: "624",
    location: "Medina",
    keyFigures: ["Ansar families with non-Muslim children", "Jewish tribes of Medina"],
    narrative:
      "Before Islam, some women of the Ansar (the Muslims native to Medina) who had difficulty bearing children would vow that if they had a son, they would raise him as a Jew. When the Jewish tribe of Banu Nadir was expelled from Medina due to their violation of treaties, there were children from the Ansar who had been raised as Jews among them. The Ansar parents wanted to prevent their children from leaving with the Jewish tribe and sought to compel them to accept Islam. This verse was revealed, establishing the principle that there should be no compulsion in matters of religion. It clarified that while parents should educate their children about Islam, ultimately, faith must be a matter of personal conviction rather than coercion. Some of these children chose to remain Jewish and were allowed to leave with Banu Nadir, demonstrating the application of this principle even in the case of children raised by Muslim parents.",
    thematicConnection: ["Religious Freedom", "Faith as Personal Conviction", "Interfaith Relations", "Justice"],
    legislativeImplications: ["Prohibition of forced conversion", "Respect for religious choice"],
    authenticityLevel: "sahih",
    source: "Reported by Ibn Abbas in Sunan Abu Dawud",
  },
  {
    id: "baqarah-011",
    verseRange: "261-274",
    title: "Encouragement of Charity",
    historicalEvent: "Economic Challenges of the Early Muslim Community",
    year: "624",
    location: "Medina",
    keyFigures: ["Wealthy Companions", "Poor Emigrants (Muhajirun)", "Uthman ibn Affan", "Abdur-Rahman ibn Awf"],
    narrative:
      "These verses were revealed during a time when many of the Emigrants (Muhajirun) who had fled Mecca were facing economic hardship in Medina. They had left their properties and businesses behind and were struggling to establish themselves in their new home. The Muslim community needed to develop a spirit of generosity and mutual support. When the Prophet encouraged charity for equipping the Muslim army, several Companions responded generously. Uthman ibn Affan donated 200 camels with their supplies, and Abdur-Rahman ibn Awf contributed half of his wealth. These verses were revealed to encourage such charitable giving while establishing principles for effective charity: giving from good sources, avoiding ostentation, speaking kindly to recipients, and understanding that all wealth ultimately belongs to Allah. The verses used powerful metaphors, such as a grain growing into seven hundred grains, to illustrate the spiritual multiplication of charitable deeds.",
    thematicConnection: [
      "Charity",
      "Economic Justice",
      "Community Support",
      "Sincerity in Giving",
      "Divine Multiplication of Good Deeds",
    ],
    legislativeImplications: ["Encouragement of voluntary charity (sadaqah)", "Ethics of charitable giving"],
    authenticityLevel: "sahih",
    source: "Reported in multiple hadith collections",
  },
  {
    id: "baqarah-012",
    verseRange: "275-281",
    title: "Prohibition of Usury (Riba)",
    historicalEvent: "Economic Practices Involving Interest",
    year: "625",
    location: "Medina",
    keyFigures: ["Meccans engaged in moneylending", "Thaqif tribe", "Banu Mughirah clan"],
    narrative:
      "These verses were revealed to address the practice of usury (riba) that was widespread in pre-Islamic Arabia. A specific incident involved the tribe of Thaqif and the clan of Banu Mughirah. When the peace treaty of Hudaybiyyah was concluded, it was stipulated that any debts between the Muslims and Meccans would still be honored. The Banu Mughirah owed money to the tribe of Thaqif, and when payment was due, Thaqif demanded the interest on the loan. Banu Mughirah, now Muslims, refused to pay the interest, citing Islamic prohibitions. The matter was referred to the governor of Mecca, who wrote to the Prophet seeking guidance. These verses were then revealed, firmly prohibiting all forms of interest-based transactions and declaring war from Allah and His Messenger against those who persist in such dealings. The verses distinguished between legitimate trade and interest-based transactions, while encouraging creditors to show leniency to debtors in difficulty.",
    thematicConnection: [
      "Economic Justice",
      "Ethical Business Practices",
      "Exploitation",
      "Compassion for Debtors",
      "Divine Economic System",
    ],
    legislativeImplications: [
      "Complete prohibition of interest (riba)",
      "Principles for debt settlement",
      "Encouragement of leniency toward debtors",
    ],
    authenticityLevel: "sahih",
    source: "Reported in Sahih al-Bukhari and Tafsir Ibn Kathir",
  },
  {
    id: "baqarah-013",
    verseRange: "282-283",
    title: "Documentation of Debts and Transactions",
    historicalEvent: "Commercial Practices in the Growing Muslim Economy",
    year: "625",
    location: "Medina",
    keyFigures: ["Merchants among the Companions", "Scribes in Medina"],
    narrative:
      "As the Muslim community in Medina grew and economic activities expanded, there was a need for clear guidelines on financial transactions. These verses were revealed to establish a comprehensive system for documenting loans and business deals. The revelation came at a time when disputes over undocumented transactions were becoming more common. The verses instructed believers to write down debts with specified terms, have the documentation witnessed by two men (or one man and two women), and provided exceptions for immediate hand-to-hand transactions. They also addressed situations where written documentation might not be possible, such as during travel, introducing the concept of security deposits (rahn). These detailed financial instructions were unprecedented in religious scripture and reflected the practical needs of the developing Muslim society, which was transitioning from a primarily oral culture to one that recognized the importance of written records for complex economic interactions.",
    thematicConnection: [
      "Financial Ethics",
      "Transparency in Transactions",
      "Prevention of Disputes",
      "Trust and Accountability",
      "Practical Guidance for Daily Life",
    ],
    legislativeImplications: [
      "Requirements for documenting loans",
      "Rules for witnesses in financial matters",
      "Concept of collateral (rahn)",
      "Ethical obligations in financial dealings",
    ],
    authenticityLevel: "sahih",
    source: "Reported in multiple hadith collections",
  },
  {
    id: "baqarah-014",
    verseRange: "284-286",
    title: "Concluding Supplications and Easing of Burden",
    historicalEvent: "Companions' Concern About Inner Thoughts",
    year: "625",
    location: "Medina",
    keyFigures: ["Abu Bakr", "Umar ibn al-Khattab", "Muadh ibn Jabal", "Companions of the Prophet"],
    narrative:
      "When verse 284 was revealed, stating that Allah would call to account for what is in one's heart, the Companions became deeply concerned. They understood this to mean they would be held accountable even for passing thoughts and feelings beyond their control. A group of Companions, including Abu Bakr, Umar, and Muadh ibn Jabal, came to the Prophet in distress, knelt down and said, 'O Messenger of Allah, we have been charged with deeds we cannot bear. We speak, but we cannot control our hearts and thoughts.' The Prophet initially responded, 'Do you want to say as the People of the Book said before you, We hear and we disobey? Rather, say We hear and we obey.' As they repeated this with faith, Allah revealed the subsequent verses (285-286), which brought relief by clarifying that Allah does not burden a soul beyond what it can bear and does not hold people accountable for unintentional thoughts or mistakes. These final verses of the surah became beloved to the Prophet, who recommended reciting them at night for protection.",
    thematicConnection: [
      "Divine Mercy",
      "Human Capacity",
      "Accountability",
      "Forgiveness",
      "Ease in Religious Practice",
    ],
    legislativeImplications: [
      "Principle that Allah does not burden beyond capacity",
      "Forgiveness for mistakes and forgetfulness",
      "Importance of intention in actions",
    ],
    authenticityLevel: "sahih",
    source: "Reported in Sahih Muslim",
  },
]

const SurahRevelationExplorer = () => {
  const [selectedCause, setSelectedCause] = useState<RevelationCause>(revelationCauses[0])
  const [activeTab, setActiveTab] = useState("overview")

  // Get authenticity badge color
  const getAuthenticityColor = (level: string) => {
    switch (level) {
      case "sahih":
        return "bg-green-100 text-green-800 border-green-200"
      case "hasan":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "daif":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Surah Overview Card */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-2xl">Surah {surahData.name}</CardTitle>
                <Badge className={surahData.revelationPlace === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}>
                  {surahData.revelationPlace}
                </Badge>
              </div>
              <CardDescription className="mt-1">
                <span className="font-arabic text-lg">{surahData.arabicName}</span> • {surahData.englishMeaning} •{" "}
                {surahData.verses} verses
              </CardDescription>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="h-4 w-4" />
              <span>Revelation Order: {surahData.chronologicalOrder}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Surah Overview</TabsTrigger>
              <TabsTrigger value="themes">Main Themes</TabsTrigger>
              <TabsTrigger value="timeline">Revelation Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="pt-4">
              <div className="prose dark:prose-invert max-w-none">
                <p>{surahData.overview}</p>
                <div className="flex flex-col md:flex-row gap-4 not-prose">
                  <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Historical Context</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Revealed during the {surahData.period}, Surah Al-Baqarah addressed the nascent Muslim community as
                      it established itself in Medina after the migration from Mecca. The Muslims were forming their
                      communal identity while navigating relationships with the Jewish tribes of Medina and facing
                      hostility from the Meccan pagans.
                    </p>
                  </div>
                  <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Significance</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      As the longest surah in the Quran, Al-Baqarah establishes many foundational aspects of Islamic
                      belief, practice, and law. It contains the Ayat al-Kursi (verse 255), considered one of the
                      greatest verses of the Quran, and concludes with verses that became a daily supplication for
                      Muslims. The Prophet Muhammad said, "Do not make your houses graves. Verily, Satan flees from a
                      house in which Surah Al-Baqarah is recited."
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="themes" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <h3 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2">Faith and Belief</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Description of believers, disbelievers, and hypocrites</li>
                    <li>• Allah's unity, power, and attributes</li>
                    <li>• Angels, scriptures, and messengers</li>
                    <li>• The unseen world and the hereafter</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Islamic Law and Rituals</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Prayer direction (qibla) and its significance</li>
                    <li>• Fasting regulations for Ramadan</li>
                    <li>• Hajj and Umrah rituals</li>
                    <li>• Dietary laws and prohibitions</li>
                    <li>• Marriage, divorce, and family relations</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-medium text-purple-800 dark:text-purple-300 mb-2">
                    Stories of Previous Prophets
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Adam and the creation of humanity</li>
                    <li>• Abraham and the building of the Kaaba</li>
                    <li>• Moses and the Children of Israel</li>
                    <li>• The story of the cow (source of the surah's name)</li>
                    <li>• Lessons from previous nations</li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h3 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Social and Economic Justice</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Prohibition of usury (riba)</li>
                    <li>• Encouragement of charity and spending</li>
                    <li>• Documentation of debts and contracts</li>
                    <li>• Care for orphans and the vulnerable</li>
                    <li>• Equitable retribution and forgiveness</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="pt-4">
              <div className="relative">
                {/* Timeline visualization */}
                <div className="absolute top-0 bottom-0 left-[20px] w-[2px] bg-gray-200 dark:bg-gray-700"></div>
                <div className="space-y-8 relative ml-10">
                  <div className="relative">
                    <div className="absolute -left-[30px] top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-medium text-blue-800 dark:text-blue-300">
                        Early Medinan Period (622-623 CE)
                      </h3>
                      <p className="text-sm mt-1">
                        Initial verses establishing faith principles, addressing the Jewish community, and beginning to
                        form Islamic legal framework. Includes early regulations on prayer, fasting, and marriage.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[30px] top-0 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      <h3 className="font-medium text-emerald-800 dark:text-emerald-300">
                        Middle Medinan Period (624 CE)
                      </h3>
                      <p className="text-sm mt-1">
                        Verses related to the change of qibla, the Battle of Badr, and establishment of Ramadan fasting.
                        This period saw the Muslim community becoming more distinct from other religious groups.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[30px] top-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="font-medium text-purple-800 dark:text-purple-300">
                        Later Medinan Period (625 CE)
                      </h3>
                      <p className="text-sm mt-1">
                        Final economic regulations including the prohibition of usury, documentation of debts, and
                        detailed charity guidelines. The surah concludes with verses about faith and divine mercy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Revelation Causes Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Revelation Causes</CardTitle>
            </CardHeader>
            <CardContent className="max-h-[500px] overflow-y-auto">
              <div className="space-y-2">
                {revelationCauses.map((cause) => (
                  <Button
                    key={cause.id}
                    variant={selectedCause.id === cause.id ? "default" : "outline"}
                    className={`w-full justify-start text-left ${
                      selectedCause.id === cause.id ? "bg-emerald-600 hover:bg-emerald-700" : ""
                    }`}
                    onClick={() => setSelectedCause(cause)}
                  >
                    <div className="truncate">
                      <span className="font-medium">Verses {cause.verseRange}</span>
                      <span className="block text-xs truncate">{cause.title}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Understanding Asbab al-Nuzul</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                <strong>Asbab al-Nuzul</strong> (أسباب النزول), or "causes of revelation," refers to the historical
                contexts and events that prompted the revelation of specific verses in the Quran.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                <h3 className="font-medium text-amber-800 dark:text-amber-300 text-sm mb-1">Authenticity Levels</h3>
                <ul className="space-y-1 text-xs">
                  <li className="flex items-center">
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 mr-2 text-xs">
                      Sahih
                    </Badge>
                    <span>Authentic reports</span>
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 mr-2 text-xs">
                      Hasan
                    </Badge>
                    <span>Good reports</span>
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200 mr-2 text-xs">
                      Daif
                    </Badge>
                    <span>Weak reports</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Revelation Cause Detail */}
        <div className="md:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">
                    Verses {selectedCause.verseRange}: {selectedCause.title}
                  </CardTitle>
                  <CardDescription>{selectedCause.historicalEvent}</CardDescription>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    <Calendar className="h-3 w-3 mr-1" />
                    {selectedCause.year} CE {selectedCause.month ? `(${selectedCause.month})` : ""}
                  </Badge>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    <MapPin className="h-3 w-3 mr-1" />
                    {selectedCause.location}
                  </Badge>
                  <Badge variant="outline" className={getAuthenticityColor(selectedCause.authenticityLevel)}>
                    <Info className="h-3 w-3 mr-1" />
                    {selectedCause.authenticityLevel.charAt(0).toUpperCase() + selectedCause.authenticityLevel.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-emerald-600" />
                    Historical Narrative
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    <p>{selectedCause.narrative}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2 text-emerald-600" />
                      Thematic Connection
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCause.thematicConnection.map((theme, index) => (
                        <Badge key={index} className="bg-emerald-100 text-emerald-800">
                          {theme}
                        </Badge>
                      ))}
                    </div>

                    {selectedCause.legislativeImplications && (
                      <div className="mt-4">
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-emerald-600" />
                          Legislative Implications
                        </h3>
                        <ul className="space-y-1 text-sm">
                          {selectedCause.legislativeImplications.map((implication, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-emerald-600 mr-2">•</span>
                              <span>{implication}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-emerald-600" />
                      Key Figures Involved
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCause.keyFigures.map((figure, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {figure}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-emerald-600" />
                        Source
                      </h3>
                      <div className="text-gray-700 dark:text-gray-300 text-sm">
                        <p>{selectedCause.source}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <ArrowRight className="h-5 w-5 mr-2 text-emerald-600" />
                    Read the Verses
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Read Surah Al-Baqarah verses {selectedCause.verseRange} with translation and commentary.
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Quranic Text
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SurahRevelationExplorer
