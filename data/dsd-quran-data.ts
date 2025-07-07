export type DSDQuestion = {
  surah: string;
  verse: string;
  text: string;
  stage: string;
  commentary: string;
  tafsir: string;
  historicalContext: string;
  hadeeth: string;
  comparativeReligion: string;
  islamophobia: string;
  significance: string;
  answer: string;
  arabicVerse: string;
};

export const DSDQuestions: DSDQuestion[] = [
  {
    surah: "Al-Mutaffifin",
    verse: "83:29-33",
    text: "The disbelievers mock the believers, laughing at them and exchanging sarcastic glances, calling them 'astray.'",
    stage: "Denial & Antilocution",
    commentary: "This verse illustrates verbal hostility and mockery, key characteristics of Allport's first stage of prejudice.",
    tafsir: "Tafsir Ibn Kathir explains this as the behavior of disbelievers mocking believers for their faith.",
    historicalContext: "Revealed in Makkah, reflecting early persecution of Muslims by the Quraysh.",
    hadeeth: "The Prophet (peace be upon him) said, 'Be patient, for no time will come upon you but the one after it will be worse, till you meet your Lord.' (Sahih al-Bukhari)",
    comparativeReligion: "Similar to early Christian communities facing Roman mockery.",
    islamophobia: "Modern parallels include derogatory language used to stereotype Muslims.",
    significance: "Teaches believers to remain steadfast despite ridicule.",
    answer: "Denial & Antilocution",
    arabicVerse: "إِنَّ الَّذِينَ اجْتَرَمُوا الْخَطِيئَةَ كَانُوا بِالَّذِينَ آمَنُوا يَضْحَكُونَ * وَإِذَا مَرُّوا بِهِمْ يَتَغَامَزُونَ * وَإِذَا انْقَلَبُوا إِلَىٰ أَهْلِهِمُ انْقَلَبُوا فَكِهِينَ * وَإِذَا رَأَوْهُمْ قَالُوا إِنَّ هَٰؤُلَاءِ لَضَالُّونَ"
  },
  {
    surah: "Al-Baqarah",
    verse: "2:49",
    text: "Recounts Pharaoh's systematic slaughter of the sons of the Israelites, a clear act of attempted genocide against an ethnic-religious group.",
    stage: "Extermination",
    commentary: "This verse represents the extreme of Allport's scale, where prejudice escalates to annihilation.",
    tafsir: "Tafsir Jalalayn notes Pharaoh's fear of the Israelites' growing numbers led to this brutal policy.",
    historicalContext: "Refers to the oppression of Bani Israel in Egypt.",
    hadeeth: "The Prophet (peace be upon him) said, 'The best of people are those who face the greatest trials.' (Sunan al-Tirmidhi)",
    comparativeReligion: "Comparable to genocidal acts like the Holocaust.",
    islamophobia: "Reflects extreme Islamophobic actions targeting entire communities.",
    significance: "Highlights divine promise of deliverance for the oppressed.",
    answer: "Extermination",
    arabicVerse: "وَإِذْ نَجَّيْنَاكُمْ مِنْ آلِ فِرْعَوْنَ يَسُومُونَكُمْ سُوءَ الْعَذَابِ يُذَبِّحُونَ أَبْنَاءَكُمْ وَيَسْتَحْيُونَ نِسَاءَكُمْ ۚ وَفِي ذَٰلِكُمْ بَلَاءٌ مِنْ رَبِّكُمْ عَظِيمٌ"
  },
  {
    surah: "Al-Hijr",
    verse: "15:11-15",
    text: "And there never came to them a messenger except that they used to ridicule him.",
    stage: "Denial & Antilocution",
    commentary: "Universal pattern of prophets facing scorn, reinforcing Allport's first stage.",
    tafsir: "Ibn Ashur explains ridicule as a tool to discredit divine messages.",
    historicalContext: "Makkan disbelievers mocked prophets to dissuade followers.",
    hadeeth: "The Prophet (peace be upon him) said, 'Prophets were ridiculed, but those after them faced worse.' (Musnad Ahmad)",
    comparativeReligion: "Parallels Jesus being mocked by the Pharisees.",
    islamophobia: "Echoes modern mockery of religious figures in media.",
    significance: "Affirms that ridicule is a test of faith.",
    answer: "Denial & Antilocution",
    arabicVerse: "وَمَا يَأْتِيهِمْ مِنْ رَسُولٍ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ"
  },
  {
    surah: "Al-Qalam",
    verse: "68:8-16",
    text: "The arrogant reject the message and slander the prophet, calling him 'possessed' or a 'liar.'",
    stage: "Denial & Antilocution",
    commentary: "Demonstrates verbal aggression through slander and labels.",
    tafsir: "Al-Qurtubi notes this as a tactic to delegitimize the Prophet (peace be upon him).",
    historicalContext: "Quraysh leaders spread false claims to undermine Islam.",
    hadeeth: "The Prophet (peace be upon him) said, 'The worst lie is to claim I said what I did not.' (Sahih Muslim)",
    comparativeReligion: "Like accusations against Moses of 'sorcery.'",
    islamophobia: "Mirrors modern Islamophobic tropes (e.g., 'terrorist' labeling).",
    significance: "Warns against false accusations harming communities.",
    answer: "Denial & Antilocution",
    arabicVerse: "فَلَا تُطِعِ الْمُكَذِّبِينَ * وَدُّوا لَوْ تُدْهِنُ فَيُدْهِنُونَ * وَلَا تُطِعْ كُلَّ حَلَّافٍ مَهِينٍ * هَمَّازٍ مَشَّاءٍ بِنَمِيمٍ"
  },
  {
    surah: "Al-Masad",
    verse: "111:1-5",
    text: "Abu Lahab and his wife openly oppose and ostracize the Prophet (peace be upon him), symbolized by carrying thorny firewood.",
    stage: "Stigma & Avoidance",
    commentary: "Active social exclusion and public shaming.",
    tafsir: "Ibn Abbas explains their boycott aimed to isolate the Prophet (peace be upon him).",
    historicalContext: "Early Makkan persecution through social alienation.",
    hadeeth: "The Prophet (peace be upon him) said, 'The most hated person to Allah is the hostile transgressor.' (Sahih Bukhari)",
    comparativeReligion: "Similar to caste-based ostracization in Hinduism.",
    islamophobia: "Like excluding Muslims from public spaces in some societies.",
    significance: "Shows how stigma fails against divine truth.",
    answer: "Stigma & Avoidance",
    arabicVerse: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ * مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ * سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ * وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ * فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ"
  },
  {
    surah: "Al-Kahf",
    verse: "18:28",
    text: "The wealthy disbelievers avoid sitting with the poor believers, showing class-based avoidance.",
    stage: "Stigma & Avoidance",
    commentary: "Elites distance themselves to maintain social hierarchy.",
    tafsir: "Al-Tabari notes this as a rejection of egalitarian Islamic values.",
    historicalContext: "Makkan elites resisted mixing with lower-status converts.",
    hadeeth: "The Prophet (peace be upon him) said, 'Allah does not look at your wealth but at your hearts.' (Sahih Muslim)",
    comparativeReligion: "Like Pharisees avoiding 'sinners' in the Bible.",
    islamophobia: "Parallels elite disdain for marginalized Muslim groups.",
    significance: "Condemns class-based discrimination in faith.",
    answer: "Stigma & Avoidance",
    arabicVerse: "وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُمْ بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ ۖ وَلَا تَعْدُ عَيْنَاكَ عَنْهُمْ تُرِيدُ زِينَةَ الْحَيَاةِ الدُّنْيَا ۖ وَلَا تُطِعْ مَنْ أَغْفَلْنَا قَلْبَهُ عَنْ ذِكْرِنَا وَاتَّبَعَ هَوَاهُ وَكَانَ أَمْرُهُ فُرُطًا"
  },
  {
    surah: "Hud",
    verse: "11:91",
    text: "The elite of Madyan scorn Prophet Shu’ayb, saying, 'We would expel you and your followers were it not for your clan.'",
    stage: "Discrimination",
    commentary: "Systemic bias favoring tribal ties over justice.",
    tafsir: "Al-Razi explains this as tribal nepotism overriding truth.",
    historicalContext: "Madyan’s leaders resisted Shu’ayb’s economic reforms.",
    hadeeth: "The Prophet (peace be upon him) said, 'Support your brother, whether oppressed or oppressor.' (Sahih Bukhari)",
    comparativeReligion: "Like Jerusalem elites rejecting Jesus for disrupting power.",
    islamophobia: "Resembles 'glass ceilings' for Muslims in workplaces.",
    significance: "Critiques corruption masked by tribal loyalty.",
    answer: "Discrimination",
    arabicVerse: "قَالُوا يَا شُعَيْبُ مَا نَفْقَهُ كَثِيرًا مِمَّا تَقُولُ وَإِنَّا لَنَرَاكَ فِينَا ضَعِيفًا ۖ وَلَوْلَا رَهْطُكَ لَرَجَمْنَاكَ ۖ وَمَا أَنْتَ عَلَيْنَا بِعَزِيزٍ"
  },
  {
    surah: "Ghafir",
    verse: "40:25",
    text: "Pharaoh’s chiefs counsel to 'leave Moses and his people to spread corruption,' justifying oppression.",
    stage: "Discrimination",
    commentary: "State-sanctioned discrimination under false pretenses.",
    tafsir: "Al-Jalalayn notes this as propaganda to justify persecution.",
    historicalContext: "Pharaoh’s regime framed Israelites as a 'threat.'",
    hadeeth: "The Prophet (peace be upon him) warned, 'When oppression spreads, expect divine punishment.' (Sunan Ibn Majah)",
    comparativeReligion: "Like Nazi propaganda against Jews.",
    islamophobia: "Echoes 'Muslim bans' based on security narratives.",
    significance: "Exposes how power distorts truth to oppress.",
    answer: "Discrimination",
    arabicVerse: "فَلَمَّا جَاءَهُمْ بِالْحَقِّ مِنْ عِنْدِنَا قَالُوا اقْتُلُوا أَبْنَاءَ الَّذِينَ آمَنُوا مَعَهُ وَاسْتَحْيُوا نِسَاءَهُمْ ۚ وَمَا كَيْدُ الْكَافِرِينَ إِلَّا فِي ضَلَالٍ"
  },
  {
    surah: "Al-Buruj",
    verse: "85:4-10",
    text: "The People of the Ditch burn believers alive for their faith, digging fire-filled trenches.",
    stage: "Physical Attack",
    commentary: "Extreme violence to eradicate religious identity.",
    tafsir: "Ibn Kathir links this to the Christian martyrdom of Najran.",
    historicalContext: "Pre-Islamic Yemenite king persecuted monotheists.",
    hadeeth: "The Prophet (peace be upon him) said, 'The most severe trial is that of the Ditch.' (Musnad Ahmad)",
    comparativeReligion: "Like Roman persecution of Christians in arenas.",
    islamophobia: "Parallels modern burnings of mosques/madrasas.",
    significance: "Martyrs' faith withstands even extreme violence.",
    answer: "Extermination",
    arabicVerse: "قُتِلَ أَصْحَابُ الْأُخْدُودِ * النَّارِ ذَاتِ الْوَقُودِ * إِذْ هُمْ عَلَيْهَا قُعُودٌ * وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ * وَمَا نَقَمُوا مِنْهُمْ إِلَّا أَنْ يُؤْمِنُوا بِاللَّهِ الْعَزِيزِ الْحَمِيدِ"
  },
  {
    surah: "Ta-Ha",
    verse: "20:71",
    text: "Pharaoh threatens believers with crucifixion and limb severing unless they renounce faith.",
    stage: "Physical Attack",
    commentary: "State terror to force apostasy.",
    tafsir: "Al-Qurtubi notes this as psychological and physical torture.",
    historicalContext: "Pharaoh’s desperation to crush monotheism.",
    hadeeth: "The Prophet (peace be upon him) said, 'If the entire world opposed a believer, Allah would aid them.' (Al-Tabarani)",
    comparativeReligion: "Like medieval inquisitions torturing heretics.",
    islamophobia: "Mirrors ISIS-style executions of minorities.",
    significance: "Faith cannot be coerced by violence.",
    answer: "Physical Attack",
    arabicVerse: "قَالَ آمَنْتُمْ لَهُ قَبْلَ أَنْ آذَنَ لَكُمْ ۖ إِنَّهُ لَكَبِيرُكُمُ الَّذِي عَلَّمَكُمُ السِّحْرَ ۖ فَلَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُمْ مِنْ خِلَافٍ وَلَأُصَلِّبَنَّكُمْ فِي جُذُوعِ النَّخْلِ وَلَتَعْلَمُنَّ أَيُّنَا أَشَدُّ عَذَابًا وَأَبْقَىٰ"
  },
  {
    surah: "Al-A’raf",
    verse: "7:133-136",
    text: "Pharaoh’s army is drowned in the sea as divine punishment for their oppression.",
    stage: "Extermination",
    commentary: "Divine intervention ends genocidal tyranny.",
    tafsir: "Ibn Ashur explains this as justice for systemic crimes.",
    historicalContext: "Final destruction of Pharaoh’s regime.",
    hadeeth: "The Prophet (peace be upon him) said, 'Pharaoh’s corpse is preserved as a sign.' (Sahih Bukhari)",
    comparativeReligion: "Like Sodom’s destruction in the Bible.",
    islamophobia: "Symbolizes divine justice against oppressors.",
    significance: "Ultimate victory of truth over annihilation.",
    answer: "Extermination",
    arabicVerse: "فَأَرْسَلْنَا عَلَيْهِمُ الطُّوفَانَ وَالْجَرَادَ وَالْقُمَّلَ وَالضَّفَادِعَ وَالدَّمَ آيَاتٍ مُفَصَّلَاتٍ فَاسْتَكْبَرُوا وَكَانُوا قَوْمًا مُجْرِمِينَ * وَلَمَّا وَقَعَ عَلَيْهِمُ الرِّجْزُ قَالُوا يَا مُوسَى ادْعُ لَنَا رَبَّكَ بِمَا عَهِدَ عِنْدَكَ ۖ لَئِنْ كَشَفْتَ عَنَّا الرِّجْزَ لَنُؤْمِنَنَّ لَكَ وَلَنُرْسِلَنَّ مَعَكَ بَنِي إِسْرَائِيلَ * فَلَمَّا كَشَفْنَا عَنْهُمُ الرِّجْزَ إِلَىٰ أَجَلٍ هُمْ بَالِغُوهُ إِذَا هُمْ يَنْكُثُونَ * فَانْتَقَمْنَا مِنْهُمْ فَأَغْرَقْنَاهُمْ فِي الْيَمِّ بِأَنَّهُمْ كَذَّبُوا بِآيَاتِنَا وَكَانُوا عَنْهَا غَافِلِينَ"
  },
  {
    surah: "Al-Qamar",
    verse: "54:31",
    text: "The people of Lut were obliterated by a single scream for their persistent crimes.",
    stage: "Extermination",
    commentary: "Divine annihilation of a morally bankrupt society.",
    tafsir: "Al-Jalalayn notes their destruction was instantaneous.",
    historicalContext: "Punishment for widespread sexual violence.",
    hadeeth: "The Prophet (peace be upon him) forbade visiting their ruins. (Sahih Muslim)",
    comparativeReligion: "Like Pompeii’s destruction in Roman lore.",
    islamophobia: "Warns against societal collapse from normalized evil.",
    significance: "Collective crimes invite collective punishment.",
    answer: "Extermination",
    arabicVerse: "إِنَّا أَرْسَلْنَا عَلَيْهِمْ صَيْحَةً وَاحِدَةً فَكَانُوا كَهَشِيمِ الْمُحْتَظِرِ"
  },
  {
    surah: "Al-Baqarah",
    verse: "2:14-16",
    text: "Hypocrites deceive believers while secretly mocking them, hiding prejudice behind a facade.",
    stage: "Denial & Antilocution",
    commentary: "Covert hostility masked by false allegiance.",
    tafsir: "Ibn Kathir describes munafiqun as 'wolves in sheep’s clothing.'",
    historicalContext: "Medinan hypocrites undermining Muslim unity.",
    hadeeth: "The Prophet (peace be upon him) said, 'The hypocrite’s sign is three: lies, broken promises, and betrayal.' (Sahih Bukhari)",
    comparativeReligion: "Like Judas betraying Jesus with a kiss.",
    islamophobia: "Mirrors 'friendly' Islamophobes in politics.",
    significance: "Warns against hidden enmity in communities.",
    answer: "Denial & Antilocution",
    arabicVerse: "وَإِذَا لَقُوا الَّذِينَ آمَنُوا قَالُوا آمَنَّا وَإِذَا خَلَوْا إِلَىٰ شَيَاطِينِهِمْ قَالُوا إِنَّا مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِئُونَ * اللَّهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِي طُغْيَانِهِمْ يَعْمَهُونَ * أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الضَّلَالَةَ بِالْهُدَىٰ فَمَا رَبِحَتْ تِجَارَتُهُمْ وَمَا كَانُوا مُهْتَدِينَ"
  },
  {
    surah: "Abasa",
    verse: "80:1-12",
    text: "The Prophet (peace be upon him) is rebuked for momentarily ignoring a blind man in favor of wealthy elites.",
    stage: "Stigma & Avoidance",
    commentary: "Unintentional bias toward social status.",
    tafsir: "Al-Tabari emphasizes Allah’s correction of this lapse.",
    historicalContext: "Early Makkan period, prioritizing dawah targets.",
    hadeeth: "The Prophet (peace be upon him) later honored the blind man (Ibn Umm Maktum) as a mu’adhin. (Sunan Abu Dawud)",
    comparativeReligion: "Like Jesus criticizing Pharisees for neglecting the poor.",
    islamophobia: "Parallels 'respectability politics' in minority communities.",
    significance: "Islam rejects all forms of class hierarchy.",
    answer: "Stigma & Avoidance",
    arabicVerse: "عَبَسَ وَتَوَلَّىٰ * أَنْ جَاءَهُ الْأَعْمَىٰ * وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ * أَوْ يَذَّكَّرُ فَتَنْفَعَهُ الذِّكْرَىٰ * أَمَّا مَنِ اسْتَغْنَىٰ * فَأَنْتَ لَهُ تَصَدَّىٰ * وَمَا عَلَيْكَ أَلَّا يَزَّكَّىٰ * وَأَمَّا مَنْ جَاءَكَ يَسْعَىٰ * وَهُوَ يَخْشَىٰ * فَأَنْتَ عَنْهُ تَلَهَّىٰ"
  }
];
