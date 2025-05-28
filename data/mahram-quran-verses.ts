export type QuranVerse = {
  id: string
  surah: string
  surahNumber: number
  verseNumber: number
  arabicText: string
  translation: string
  explanation: string
  topic: "marriage_prohibition" | "family_relations" | "modesty" | "inheritance" | "general"
  relatedRelatives?: string[] // IDs of relatives this verse relates to
}

export const familyRelationVerses: QuranVerse[] = [
  {
    id: "4-23",
    surah: "An-Nisa",
    surahNumber: 4,
    verseNumber: 23,
    arabicText:
      "حُرِّمَتْ عَلَيْكُمْ أُمَّهَاتُكُمْ وَبَنَاتُكُمْ وَأَخَوَاتُكُمْ وَعَمَّاتُكُمْ وَخَالَاتُكُمْ وَبَنَاتُ الْأَخِ وَبَنَاتُ الْأُخْتِ وَأُمَّهَاتُكُمُ اللَّاتِي أَرْضَعْنَكُمْ وَأَخَوَاتُكُم مِّنَ الرَّضَاعَةِ وَأُمَّهَاتُ نِسَائِكُمْ وَرَبَائِبُكُمُ اللَّاتِي فِي حُجُورِكُم مِّن نِّسَائِكُمُ اللَّاتِي دَخَلْتُم بِهِنَّ فَإِن لَّمْ تَكُونُوا دَخَلْتُم بِهِنَّ فَلَا جُنَاحَ عَلَيْكُمْ وَحَلَائِلُ أَبْنَائِكُمُ الَّذِينَ مِنْ أَصْلَابِكُمْ وَأَن تَجْمَعُوا بَيْنَ الْأُخْتَيْنِ إِلَّا مَا قَدْ سَلَفَ ۗ إِنَّ اللَّهَ كَانَ غَفُورًا رَّحِيمًا",
    translation:
      "Prohibited to you (for marriage) are: your mothers, daughters, sisters, father's sisters, mother's sisters, brother's daughters, sister's daughters, foster-mothers (who gave you suck), foster-sisters, your wives' mothers, your step-daughters under your guardianship, born of your wives to whom you have gone in - but there is no sin on you if you have not gone in them (to marry their daughters), the wives of your sons who (spring) from your own loins, and two sisters in wedlock at the same time, except for what has already passed; verily, Allah is Oft-Forgiving, Most Merciful.",
    explanation:
      "This verse explicitly lists the categories of women whom a Muslim man cannot marry. These are the permanent Mahram relationships that form the foundation of Islamic family law regarding marriage prohibitions.",
    topic: "marriage_prohibition",
    relatedRelatives: ["mother", "daughter", "sister", "aunty-paternal", "aunty-maternal", "niece"],
  },
  {
    id: "24-31",
    surah: "An-Nur",
    surahNumber: 24,
    verseNumber: 31,
    arabicText:
      "وَقُل لِّلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا مَا ظَهَرَ مِنْهَا ۖ وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ ۖ وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا لِبُعُولَتِهِنَّ أَوْ آبَائِهِنَّ أَوْ آبَاءِ بُعُولَتِهِنَّ أَوْ أَبْنَائِهِنَّ أَوْ أَبْنَاءِ بُعُولَتِهِنَّ أَوْ إِخْوَانِهِنَّ أَوْ بَنِي إِخْوَانِهِنَّ أَوْ بَنِي أَخَوَاتِهِنَّ أَوْ نِسَائِهِنَّ أَوْ مَا مَلَكَتْ أَيْمَانُهُنَّ أَوِ التَّابِعِينَ غَيْرِ أُولِي الْإِرْبَةِ مِنَ الرِّجَالِ أَوِ الطِّفْلِ الَّذِينَ لَمْ يَظْهَرُوا عَلَىٰ عَوْرَاتِ النِّسَاءِ ۖ وَلَا يَضْرِبْنَ بِأَرْجُلِهِنَّ لِيُعْلَمَ مَا يُخْفِينَ مِن زِينَتِهِنَّ ۚ وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ",
    translation:
      "And tell the believing women to lower their gaze and guard their private parts and not expose their adornment except that which [necessarily] appears thereof and to wrap [a portion of] their headcovers over their chests and not expose their adornment except to their husbands, their fathers, their husbands' fathers, their sons, their husbands' sons, their brothers, their brothers' sons, their sisters' sons, their women, that which their right hands possess, or those male attendants having no physical desire, or children who are not yet aware of the private aspects of women. And let them not stamp their feet to make known what they conceal of their adornment. And turn to Allah in repentance, all of you, O believers, that you might succeed.",
    explanation:
      "This verse outlines the rules of modesty for women and specifically mentions the male relatives in front of whom they are not required to observe complete hijab. These are the Mahram men for a woman.",
    topic: "modesty",
    relatedRelatives: ["father", "grandpa-paternal", "son", "nephew", "brother"],
  },
  {
    id: "4-24",
    surah: "An-Nisa",
    surahNumber: 4,
    verseNumber: 24,
    arabicText:
      "وَالْمُحْصَنَاتُ مِنَ ��لنِّسَاءِ إِلَّا مَا مَلَكَتْ أَيْمَانُكُمْ ۖ كِتَابَ اللَّهِ عَلَيْكُمْ ۚ وَأُحِلَّ لَكُم مَّا وَرَاءَ ذَٰلِكُمْ أَن تَبْتَغُوا بِأَمْوَالِكُم مُّحْصِنِينَ غَيْرَ مُسَافِحِينَ ۚ فَمَا اسْتَمْتَعْتُم بِهِ مِنْهُنَّ فَآتُوهُنَّ أُجُورَهُنَّ فَرِيضَةً ۚ وَلَا جُنَاحَ عَلَيْكُمْ فِيمَا تَرَاضَيْتُم بِهِ مِن بَعْدِ الْفَرِيضَةِ ۚ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا",
    translation:
      "And [also prohibited to you are all] married women except those your right hands possess. [This is] the decree of Allah upon you. And lawful to you are [all others] beyond these, [provided] that you seek them [in marriage] with [gifts from] your property, desiring chastity, not unlawful sexual intercourse. So for whatever you enjoy [of marriage] from them, give them their due compensation as an obligation. And there is no blame upon you for what you mutually agree to beyond the obligation. Indeed, Allah is ever Knowing and Wise.",
    explanation:
      "This verse continues from 4:23 and completes the list of women whom a Muslim man cannot marry. It clarifies that all other women not mentioned in these prohibitions are potentially eligible for marriage.",
    topic: "marriage_prohibition",
  },
  {
    id: "33-55",
    surah: "Al-Ahzab",
    surahNumber: 33,
    verseNumber: 55,
    arabicText:
      "لَّا جُنَاحَ عَلَيْهِنَّ فِي آبَائِهِنَّ وَلَا أَبْنَائِهِنَّ وَلَا إِخْوَانِهِنَّ وَلَا أَبْنَاءِ إِخْوَانِهِنَّ وَلَا أَبْنَاءِ أَخَوَاتِهِنَّ وَلَا نِسَائِهِنَّ وَلَا مَا مَلَكَتْ أَيْمَانُهُنَّ ۗ وَاتَّقِينَ اللَّهَ ۚ إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدًا",
    translation:
      "There is no blame upon women concerning their fathers or their sons or their brothers or their brothers' sons or their sisters' sons or their women or those their right hands possess. And fear Allah. Indeed Allah is ever, over all things, Witness.",
    explanation:
      "This verse specifically addresses the Prophet's wives but extends to all Muslim women, listing the male relatives with whom they can interact more freely as they are Mahram to them.",
    topic: "modesty",
    relatedRelatives: ["father", "son", "brother", "nephew"],
  },
  {
    id: "4-22",
    surah: "An-Nisa",
    surahNumber: 4,
    verseNumber: 22,
    arabicText: "وَلَا تَنكِحُوا مَا نَكَحَ آبَاؤُكُم مِّنَ النِّسَاءِ إِلَّا مَا قَدْ سَلَفَ ۚ إِنَّهُ كَانَ فَاحِشَةً وَمَقْتًا وَسَاءَ سَبِيلًا",
    translation:
      "And do not marry those [women] whom your fathers married, except what has already occurred. Indeed, it was an immorality and hateful [to Allah] and was evil as a way.",
    explanation:
      "This verse prohibits a man from marrying a woman who was previously married to his father, emphasizing the sanctity of the father-son relationship and establishing clear boundaries.",
    topic: "marriage_prohibition",
  },
  {
    id: "4-11",
    surah: "An-Nisa",
    surahNumber: 4,
    verseNumber: 11,
    arabicText:
      "يُوصِيكُمُ اللَّهُ فِي أَوْلَادِكُمْ ۖ لِلذَّكَرِ مِثْلُ حَظِّ الْأُنثَيَيْنِ ۚ فَإِن كُنَّ نِسَاءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ ۖ وَإِن كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ ۚ وَلِأَبَوَيْهِ لِكُلِّ وَاحِدٍ مِّنْهُمَا السُّدُسُ مِمَّا تَرَكَ إِن كَانَ لَهُ وَلَدٌ ۚ فَإِن لَّمْ يَكُن لَّهُ وَلَدٌ وَوَرِثَهُ أَبَوَاهُ فَلِأُمِّهِ الثُّلُثُ ۚ فَإِن كَانَ لَهُ إِخْوَةٌ فَلِأُمِّهِ السُّدُسُ ۚ مِن بَعْدِ وَصِيَّةٍ يُوصِي بِهَا أَوْ دَيْنٍ ۗ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ لَا تَدْرُونَ أَيُّهُمْ أَقْرَبُ لَكُمْ نَفْعًا ۚ فَرِيضَةً مِّنَ اللَّهِ ۗ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا",
    translation:
      "Allah instructs you concerning your children: for the male, what is equal to the share of two females. But if there are [only] daughters, two or more, for them is two thirds of one's estate. And if there is only one, for her is half. And for one's parents, to each one of them is a sixth of his estate if he left children. But if he had no children and the parents [alone] inherit from him, then for his mother is one third. And if he had brothers [or sisters], for his mother is a sixth, after any bequest he [may have] made or debt. Your parents or your children - you know not which of them are nearest to you in benefit. [These shares are] an obligation [imposed] by Allah. Indeed, Allah is ever Knowing and Wise.",
    explanation:
      "This verse outlines inheritance laws, which are closely tied to family relationships. The distribution of inheritance is based on the closeness of blood relations, which aligns with the concept of Mahram relationships.",
    topic: "inheritance",
    relatedRelatives: ["father", "mother", "son", "daughter", "brother", "sister"],
  },
  {
    id: "17-23-24",
    surah: "Al-Isra",
    surahNumber: 17,
    verseNumber: 23,
    arabicText:
      "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا",
    translation:
      "And your Lord has decreed that you not worship except Him, and to parents, good treatment. Whether one or both of them reach old age [while] with you, say not to them [so much as], 'uff,' and do not repel them but speak to them a noble word.",
    explanation:
      "This verse emphasizes the high status of parents in Islam and the obligation to treat them with respect and kindness. It highlights the special relationship between parents and children, which is one of the most important Mahram relationships.",
    topic: "family_relations",
    relatedRelatives: ["father", "mother"],
  },
  {
    id: "30-21",
    surah: "Ar-Rum",
    surahNumber: 30,
    verseNumber: 21,
    arabicText:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    translation:
      "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.",
    explanation:
      "This verse speaks about the relationship between spouses, highlighting the divine wisdom in creating marital bonds. While spouses are not blood Mahrams, they have special rights and obligations toward each other.",
    topic: "family_relations",
  },
  {
    id: "4-12",
    surah: "An-Nisa",
    surahNumber: 4,
    verseNumber: 12,
    arabicText:
      "وَلَكُمْ نِصْفُ مَا تَرَكَ أَزْوَاجُكُمْ إِن لَّمْ يَكُن لَّهُنَّ وَلَدٌ ۚ فَإِن كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ مِمَّا تَرَكْنَ ۚ مِن بَعْدِ وَصِيَّةٍ يُوصِينَ بِهَا أَوْ دَيْنٍ ۚ وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ إِن لَّمْ يَكُن لَّكُمْ وَلَدٌ ۚ فَإِن كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُم ۚ مِّن بَعْدِ وَصِيَّةٍ تُوصُونَ بِهَا أَوْ دَيْنٍ ۗ وَإِن كَانَ رَجُلٌ يُورَثُ كَلَالَةً أَوِ امْرَأَةٌ وَلَهُ أَخٌ أَوْ أُخْتٌ فَلِكُلِّ وَاحِدٍ مِّنْهُمَا السُّدُسُ ۚ فَإِن كَانُوا أَكْثَرَ مِن ذَٰلِكَ فَهُمْ شُرَكَاءُ فِي الثُّلُثِ ۚ مِن بَعْدِ وَصِيَّةٍ يُوصَىٰ بِهَا أَوْ دَيْنٍ غَيْرَ مُضَارٍّ ۚ وَصِيَّةً مِّنَ اللَّهِ ۗ وَاللَّهُ عَلِيمٌ حَلِيمٌ",
    translation:
      "And for you is half of what your wives leave if they have no child. But if they have a child, for you is one fourth of what they leave, after any bequest they [may have] made or debt. And for the wives is one fourth if you leave no child. But if you leave a child, then for them is an eighth of what you leave, after any bequest you [may have] made or debt. And if a man or woman leaves neither ascendants nor descendants but has a brother or a sister, then for each one of them is a sixth. But if they are more than two, they share a third, after any bequest which was made or debt, as long as there is no detriment [caused]. [This is] an ordinance from Allah, and Allah is Knowing and Forbearing.",
    explanation:
      "This verse continues the inheritance laws from 4:11, further detailing the shares of spouses and siblings. These inheritance laws are based on the closeness of family relationships, which aligns with the concept of Mahram relationships.",
    topic: "inheritance",
    relatedRelatives: ["spouse", "brother", "sister"],
  },
  {
    id: "33-50",
    surah: "Al-Ahzab",
    surahNumber: 33,
    verseNumber: 50,
    arabicText:
      "يَا أَيُّهَا النَّبِيُّ إِنَّا أَحْلَلْنَا لَكَ أَزْوَاجَكَ اللَّاتِي آتَيْتَ أُجُورَهُنَّ وَمَا مَلَكَتْ يَمِينُكَ مِمَّا أَفَاءَ اللَّهُ عَلَيْكَ وَبَنَاتِ عَمِّكَ وَبَنَاتِ عَمَّاتِكَ وَبَنَاتِ خَالِكَ وَبَن��اتِ خَالَاتِكَ اللَّاتِي هَاجَرْنَ مَعَكَ وَامْرَأَةً مُّؤْمِنَةً إِن وَهَبَتْ نَفْسَهَا لِلنَّبِيِّ إِنْ أَرَادَ النَّبِيُّ أَن يَسْتَنكِحَهَا خَالِصَةً لَّكَ مِن دُونِ الْمُؤْمِنِينَ ۗ قَدْ عَلِمْنَا مَا فَرَضْنَا عَلَيْهِمْ فِي أَزْوَاجِهِمْ وَمَا مَلَكَتْ أَيْمَانُهُمْ لِكَيْلَا يَكُونَ عَلَيْكَ حَرَجٌ ۗ وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
    translation:
      "O Prophet, indeed We have made lawful to you your wives to whom you have given their due compensation and those your right hand possesses from what Allah has returned to you [of captives] and the daughters of your paternal uncles and the daughters of your paternal aunts and the daughters of your maternal uncles and the daughters of your maternal aunts who emigrated with you and a believing woman if she gives herself to the Prophet [and] if the Prophet wishes to marry her, [this is] only for you, excluding the [other] believers. We certainly know what We have made obligatory upon them concerning their wives and those their right hands possess, [but this is for you] in order that there will be upon you no discomfort. And ever is Allah Forgiving and Merciful.",
    translation:
      "O Prophet, indeed We have made lawful to you your wives to whom you have given their due compensation and those your right hand possesses from what Allah has returned to you [of captives] and the daughters of your paternal uncles and the daughters of your paternal aunts and the daughters of your maternal uncles and the daughters of your maternal aunts who emigrated with you and a believing woman if she gives herself to the Prophet [and] if the Prophet wishes to marry her, [this is] only for you, excluding the [other] believers. We certainly know what We have made obligatory upon them concerning their wives and those their right hands possess, [but this is for you] in order that there will be upon you no discomfort. And ever is Allah Forgiving and Merciful.",
    explanation:
      "This verse mentions the categories of women who were lawful for the Prophet Muhammad (peace be upon him) to marry. While specific to the Prophet, it provides insight into the broader Islamic framework of permissible and impermissible marriages, which is directly related to Mahram relationships.",
    topic: "marriage_prohibition",
    relatedRelatives: ["cousin-paternal", "cousin-maternal"],
  },
  {
    id: "25-54",
    surah: "Al-Furqan",
    surahNumber: 25,
    verseNumber: 54,
    arabicText: "وَهُوَ الَّذِي خَلَقَ مِنَ الْمَاءِ بَشَرًا فَجَعَلَهُ نَسَبًا وَصِهْرًا ۗ وَكَانَ رَبُّكَ قَدِيرًا",
    translation:
      "And it is He who has created from water a human being and made him [a relative by] lineage and marriage. And ever is your Lord competent [concerning creation].",
    explanation:
      "This verse establishes the two fundamental types of family relationships in Islam: blood relations (nasab) and relations by marriage (sihr). These two categories form the basis of Mahram relationships.",
    topic: "family_relations",
  },
  {
    id: "33-6",
    surah: "Al-Ahzab",
    surahNumber: 33,
    verseNumber: 6,
    arabicText:
      "النَّبِيُّ أَوْلَىٰ بِالْمُؤْمِنِينَ مِنْ أَنفُسِهِمْ ۖ وَأَزْوَاجُهُ أُمَّهَاتُهُمْ ۗ وَأُولُو الْأَرْحَامِ بَعْضُهُمْ أَوْلَىٰ بِبَعْضٍ فِي كِتَابِ اللَّهِ مِنَ الْمُؤْمِنِينَ وَالْمُهَاجِرِينَ إِلَّا أَن تَفْعَلُوا إِلَىٰ أَوْلِيَائِكُم مَّعْرُوفًا ۚ كَانَ ذَٰلِكَ فِي الْكِتَابِ مَسْطُورًا",
    translation:
      "The Prophet is more worthy of the believers than themselves, and his wives are [in the position of] their mothers. And those of [blood] relationship are more entitled [to inheritance] in the decree of Allah than the [other] believers and the emigrants, except that you may do to your close associates a kindness [through bequest]. That was in the Book inscribed.",
    explanation:
      "This verse establishes that the Prophet's wives were considered as mothers to the believers, making them Mahram to all Muslim men. It also emphasizes the importance of blood relationships in matters of inheritance and social relations.",
    topic: "family_relations",
  },
  {
    id: "24-30",
    surah: "An-Nur",
    surahNumber: 24,
    verseNumber: 30,
    arabicText: "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ وَيَحْفَظُوا فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ ۗ إِنَّ اللَّهَ خَبِيرٌ بِمَا يَصْنَعُونَ",
    translation:
      "Tell the believing men to reduce [some] of their vision and guard their private parts. That is purer for them. Indeed, Allah is Acquainted with what they do.",
    explanation:
      "This verse, along with the following verse (24:31), establishes the foundation of modesty in interactions between men and women. These rules of modesty differ based on whether the interaction is between Mahrams or non-Mahrams.",
    topic: "modesty",
  },
  {
    id: "4-25",
    surah: "An-Nisa",
    surahNumber: 4,
    verseNumber: 25,
    arabicText:
      "وَمَن لَّمْ يَسْتَطِعْ مِنكُمْ طَوْلًا أَن يَنكِحَ الْمُحْصَنَاتِ الْمُؤْمِنَاتِ فَمِن مَّا مَلَكَتْ أَيْمَانُكُم مِّن فَتَيَاتِكُمُ الْمُؤْمِنَاتِ ۚ وَاللَّهُ أَعْلَمُ بِإِيمَانِكُم ۚ بَعْضُكُم مِّن بَعْضٍ ۚ فَانكِحُوهُنَّ بِإِذْنِ أَهْلِهِنَّ وَآتُوهُنَّ أُجُورَهُنَّ بِالْمَعْرُوفِ مُحْصَنَاتٍ غَيْرَ مُسَافِحَاتٍ وَلَا مُتَّخِذَاتِ أَخْدَانٍ ۚ فَإِذَا أُحْصِنَّ فَإِنْ أَتَيْنَ بِفَاحِشَةٍ فَعَلَيْهِنَّ نِصْفُ مَا عَلَى الْمُحْصَنَاتِ مِنَ الْعَذَابِ ۚ ذَٰلِكَ لِمَنْ خَشِيَ الْعَنَتَ مِنكُمْ ۚ وَأَن تَصْبِرُوا خَيْرٌ لَّكُمْ ۗ وَاللَّهُ غَفُورٌ رَّحِيمٌ",
    translation:
      "And whoever among you cannot [find] the means to marry free, believing women, then [he may marry] from those whom your right hands possess of believing slave girls. And Allah is most knowing about your faith. You [believers] are of one another. So marry them with the permission of their people and give them their due compensation according to what is acceptable. [They should be] chaste, neither [of] those who commit unlawful intercourse randomly nor those who take [secret] lovers. But once they are sheltered in marriage, if they should commit adultery, then for them is half the punishment for free [unmarried] women. This [allowance] is for him among you who fears sin, but to be patient is better for you. And Allah is Forgiving and Merciful.",
    explanation:
      "This verse discusses marriage to believing slave women for those who cannot afford to marry free believing women. It emphasizes the importance of proper marriage contracts and chastity, which are related to the concept of Mahram relationships and permissible marriages.",
    topic: "marriage_prohibition",
  },
  {
    id: "2-221",
    surah: "Al-Baqarah",
    surahNumber: 2,
    verseNumber: 221,
    arabicText:
      "وَلَا تَنكِحُوا الْمُشْرِكَاتِ حَتَّىٰ يُؤْمِنَّ ۚ وَلَأَمَةٌ مُّؤْمِنَةٌ خَيْرٌ مِّن مُّشْرِكَةٍ وَلَوْ أَعْجَبَتْكُمْ ۗ وَلَا تُنكِحُوا الْمُشْرِكِينَ حَتَّىٰ يُؤْمِنُوا ۚ وَلَعَبْدٌ مُّؤْمِنٌ خَيْرٌ مِّن مُّشْرِكٍ وَلَوْ أَعْجَبَكُمْ ۗ أُولَٰئِكَ يَدْعُونَ إِلَى النَّارِ ۖ وَاللَّهُ يَدْعُو إِلَى الْجَنَّةِ وَالْمَغْفِرَةِ بِإِذْنِهِ ۖ وَيُبَيِّنُ آيَاتِهِ لِلنَّاسِ لَعَلَّهُمْ يَتَذَكَّرُونَ",
    translation:
      "And do not marry polytheistic women until they believe. And a believing slave woman is better than a polytheist, even though she might please you. And do not marry polytheistic men [to your women] until they believe. And a believing slave is better than a polytheist, even though he might please you. Those invite [you] to the Fire, but Allah invites to Paradise and to forgiveness, by His permission. And He makes clear His verses to the people that perhaps they may remember.",
    explanation:
      "This verse prohibits marriage between Muslims and polytheists, establishing another category of marriage prohibition based on religious differences. While not directly related to Mahram relationships, it adds another dimension to the Islamic framework of permissible and impermissible marriages.",
    topic: "marriage_prohibition",
  },
]
