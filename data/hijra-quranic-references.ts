export interface QuranicReference {
  id: string
  surah: string
  ayah: string
  arabicText: string
  translation: string
  context: string
  relevance: string
}

export interface LocationQuranicReferences {
  locationId: string
  references: QuranicReference[]
}

export const hijraQuranicReferences: LocationQuranicReferences[] = [
  {
    locationId: "mecca",
    references: [
      {
        id: "persecution",
        surah: "16",
        ayah: "41-42",
        arabicText:
          "وَالَّذِينَ هَاجَرُوا فِي اللَّهِ مِنْ بَعْدِ مَا ظُلِمُوا لَنُبَوِّئَنَّهُمْ فِي الدُّنْيَا حَسَنَةً ۖ وَلَأَجْرُ الْآخِرَةِ أَكْبَرُ ۚ لَوْ كَانُوا يَعْلَمُونَ ﴿٤١﴾ الَّذِينَ صَبَرُوا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ ﴿٤٢﴾",
        translation:
          "And those who emigrated for Allah after they had been wronged - We will surely settle them in this world in a good place; but the reward of the Hereafter is greater, if only they could know. [They are] those who endured patiently and upon their Lord relied.",
        context:
          "These verses were revealed in relation to the Muslims who were persecuted in Mecca and had to migrate. They promise divine reward for those who migrate for the sake of Allah after being oppressed.",
        relevance:
          "These verses highlight the divine promise of reward for the Muslims who were forced to leave Mecca due to persecution, providing spiritual encouragement for the difficult decision to migrate.",
      },
      {
        id: "plot",
        surah: "8",
        ayah: "30",
        arabicText: "وَإِذْ يَمْكُرُ بِكَ الَّذِينَ كَفَرُوا لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ ۚ وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ ۖ وَاللَّهُ خَيْرُ الْمَاكِرِينَ",
        translation:
          "And [remember, O Muhammad], when those who disbelieved plotted against you to restrain you or kill you or evict you [from Mecca]. But they plan, and Allah plans. And Allah is the best of planners.",
        context:
          "This verse refers directly to the plot by the Quraysh to assassinate Prophet Muhammad on the night before his departure from Mecca.",
        relevance:
          "This verse documents the conspiracy against the Prophet that precipitated the Hijra and affirms that Allah's plan supersedes all human schemes.",
      },
    ],
  },
  {
    locationId: "cave-thawr",
    references: [
      {
        id: "cave",
        surah: "9",
        ayah: "40",
        arabicText:
          "إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا ۖ فَأَنزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ وَأَيَّدَهُ بِجُنُودٍ لَّمْ تَرَوْهَا وَجَعَلَ كَلِمَةَ الَّذِينَ كَفَرُوا السُّفْلَىٰ ۗ وَكَلِمَةُ اللَّهِ هِيَ الْعُلْيَا ۗ وَاللَّهُ عَزِيزٌ حَكِيمٌ",
        translation:
          "If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Mecca] as one of two, when they were in the cave and he said to his companion, 'Do not grieve; indeed Allah is with us.' And Allah sent down his tranquility upon him and supported him with angels you did not see and made the word of those who disbelieved the lowest, while the word of Allah - that is the highest. And Allah is Exalted in Might and Wise.",
        context:
          "This verse directly references the time when Prophet Muhammad and Abu Bakr hid in the Cave of Thawr while being pursued by the Quraysh.",
        relevance:
          "This is the most explicit Quranic reference to the Hijra journey, specifically mentioning the Cave of Thawr and the divine protection and tranquility granted to the Prophet and Abu Bakr during this critical moment.",
      },
    ],
  },
  {
    locationId: "coastal-route",
    references: [
      {
        id: "protection",
        surah: "8",
        ayah: "72",
        arabicText:
          "إِنَّ الَّذِينَ آمَنُوا وَهَاجَرُوا وَجَاهَدُوا بِأَمْوَالِهِمْ وَأَنفُسِهِمْ فِي سَبِيلِ اللَّهِ وَالَّذِينَ آوَوا وَّنَصَرُوا أُولَٰئِكَ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ ۚ وَالَّذِينَ آمَنُوا وَلَمْ يُهَاجِرُوا مَا لَكُم مِّن وَلَايَتِهِم مِّن شَيْءٍ حَتَّىٰ يُهَاجِرُوا ۚ وَإِنِ اسْتَنصَرُوكُمْ فِي الدِّينِ فَعَلَيْكُمُ النَّصْرُ إِلَّا عَلَىٰ قَوْمٍ بَيْنَكُمْ وَبَيْنَهُم مِّيثَاقٌ ۗ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
        translation:
          "Indeed, those who have believed and emigrated and fought with their wealth and lives in the cause of Allah and those who gave shelter and aided - they are allies of one another. But those who believed and did not emigrate - for you there is no guardianship of them until they emigrate. And if they seek help of you for the religion, then you must help, except against a people between yourselves and whom is a treaty. And Allah is Seeing of what you do.",
        context:
          "This verse establishes the special relationship between the Muhajirun (emigrants) and Ansar (helpers), highlighting the importance of the migration and the support provided to the migrants.",
        relevance:
          "This verse relates to the journey along the coastal route, emphasizing the spiritual significance of the migration and the divine recognition of those who undertake such hardships for their faith.",
      },
    ],
  },
  {
    locationId: "umm-mabad",
    references: [
      {
        id: "provision",
        surah: "2",
        ayah: "218",
        arabicText: "إِنَّ الَّذِينَ آمَنُوا وَالَّذِينَ هَاجَرُوا وَجَاهَدُوا فِي سَبِيلِ اللَّهِ أُولَٰئِكَ يَرْجُونَ رَحْمَتَ اللَّهِ ۚ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
        translation:
          "Indeed, those who have believed and those who have emigrated and fought in the cause of Allah - those expect the mercy of Allah. And Allah is Forgiving and Merciful.",
        context:
          "This verse speaks about the hope for Allah's mercy that motivates believers who migrate and strive in His cause.",
        relevance:
          "While not directly mentioning Umm Mabad, this verse relates to the divine mercy and provision experienced during the journey, as exemplified by the miracle of the goat producing milk at Umm Mabad's tent.",
      },
    ],
  },
  {
    locationId: "quba",
    references: [
      {
        id: "mosque",
        surah: "9",
        ayah: "108",
        arabicText:
          "لَا تَقُمْ فِيهِ أَبَدًا ۚ لَّمَسْجِدٌ أُسِّسَ عَلَى التَّقْوَىٰ مِنْ أَوَّلِ يَوْمٍ أَحَقُّ أَن تَقُومَ فِيهِ ۚ فِيهِ رِجَالٌ يُحِبُّونَ أَن يَتَطَهَّرُوا ۚ وَاللَّهُ يُحِبُّ الْمُطَّهِّرِينَ",
        translation:
          "Do not stand [for prayer] within it - ever. A mosque founded on righteousness from the first day is more worthy for you to stand in. Within it are men who love to purify themselves; and Allah loves those who purify themselves.",
        context:
          "This verse refers to the Quba Mosque, which was founded on piety and righteousness during the Prophet's stay in Quba before entering Medina.",
        relevance:
          "This verse directly relates to the establishment of the Quba Mosque, the first mosque built in Islamic history, during the Hijra journey.",
      },
    ],
  },
  {
    locationId: "medina",
    references: [
      {
        id: "brotherhood",
        surah: "59",
        ayah: "9",
        arabicText:
          "وَالَّذِينَ تَبَوَّءُوا الدَّارَ وَالْإِيمَانَ مِن قَبْلِهِمْ يُحِبُّونَ مَنْ هَاجَرَ إِلَيْهِمْ وَلَا يَجِدُونَ فِي صُدُورِهِمْ حَاجَةً مِّمَّا أُوتُوا وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ ۚ وَمَن يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
        translation:
          "And [also for] those who were settled in al-Madinah and [adopted] the faith before them. They love those who emigrated to them and find not any want in their breasts of what the emigrants were given but give [them] preference over themselves, even though they are in privation. And whoever is protected from the stinginess of his soul - it is those who will be the successful.",
        context:
          "This verse praises the Ansar (the helpers) of Medina who welcomed and supported the Muhajirun (emigrants) from Mecca, sharing their wealth and homes with them.",
        relevance:
          "This verse directly relates to the establishment of brotherhood between the Muhajirun and Ansar in Medina, one of the first actions taken by the Prophet after the Hijra.",
      },
      {
        id: "community",
        surah: "3",
        ayah: "103",
        arabicText:
          "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ۚ وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ كُنتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ فَأَصْبَحْتُم بِنِعْمَتِهِ إِخْوَانًا وَكُنتُمْ عَلَىٰ شَفَا حُفْرَةٍ مِّنَ النَّارِ فَأَنقَذَكُم مِّنْهَا ۗ كَذَٰلِكَ يُبَيِّنُ اللَّهُ لَكُمْ آيَاتِهِ لَعَلَّكُمْ تَهْتَدُونَ",
        translation:
          "And hold firmly to the rope of Allah all together and do not become divided. And remember the favor of Allah upon you - when you were enemies and He brought your hearts together and you became, by His favor, brothers. And you were on the edge of a pit of the Fire, and He saved you from it. Thus does Allah make clear to you His verses that you may be guided.",
        context:
          "This verse emphasizes the unity and brotherhood established among the believers after years of tribal divisions and conflicts.",
        relevance:
          "This verse relates to the new community established in Medina after the Hijra, where former enemies became brothers and a unified Muslim community was formed.",
      },
      {
        id: "constitution",
        surah: "2",
        ayah: "143",
        arabicText: "وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا ۗ",
        translation:
          "And thus we have made you a just community that you will be witnesses over the people and the Messenger will be a witness over you.",
        context:
          "This verse describes the Muslim community as a balanced and just nation, positioned to be witnesses over humanity.",
        relevance:
          "This verse relates to the establishment of the first Islamic society in Medina after the Hijra, with its own constitution and system of governance.",
      },
    ],
  },
]
