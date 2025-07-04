"use client";

import { useState } from "react";
import Link from "next/link";

// Interfaces
interface Dua {
  arabic: string;
  english: string;
  source: string;
}

interface GameSet {
  id: number;
  emotions: { name: string; dua: Dua }[];
}

// Game data: 5 sets, 10 emotions each
const gameSets: GameSet[] = [
  {
    id: 1,
    emotions: [
      { name: "Angry", dua: { arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", english: "I seek refuge in Allah from Satan, the expelled.", source: "Sahih al-Bukhari 3297, Sahih Muslim 2610" } },
      { name: "Anxious", dua: { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ", english: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.", source: "Sahih al-Bukhari 6369" } },
      { name: "Bored", dua: { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لاَ يَنْفَعُ، وَمِنْ قَلْبٍ لاَ يَخْشَعُ، وَمِنْ نَفْسٍ لاَ تَشْبَعُ، وَمِنْ دَعْوَةٍ لاَ يُسْتَجَابُ لَهَا", english: "O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that does not humble itself, from a soul that is never satisfied, and from a supplication that is not answered.", source: "Sahih Muslim 2722a" } },
      { name: "Confident", dua: { arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", english: "Allah is sufficient for us, and He is the best Disposer of affairs.", source: "Quran 3:173, Sahih al-Bukhari 4563" } },
      { name: "Confused", dua: { arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي", english: "My Lord, expand for me my breast [with assurance] and ease for me my task and untie the knot from my tongue that they may understand my speech.", source: "Quran 20:25-28" } },
      { name: "Content", dua: { arabic: "رَضِيتُ بِاللَّهِ رَبًّا وَبِالإِسْلاَمِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا", english: "I am content with Allah as my Lord, and with Islam as my religion, and with Muhammad as my Prophet.", source: "Sahih Muslim 1884b" } },
      { name: "Depressed", dua: { arabic: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ", english: "O Allah, I hope for Your Mercy. Do not abandon me to myself even for the blink of an eye. Rectify all my affairs. There is no god but You.", source: "Abu Dawud 5090" } },
      { name: "Doubtful", dua: { arabic: "اللَّهُمَّ مُصَرِّفَ الْقُلُوبِ صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ", english: "O Allah, Changer of the hearts, direct our hearts to Your obedience.", source: "Sahih Muslim 2654" } },
      { name: "Grateful", dua: { arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", english: "O Allah, help me to remember You, thank You, and worship You in the best of manners.", source: "Abu Dawud 1522" } },
      { name: "Greedy", dua: { arabic: "اللَّهُمَّ قَنِّعْنِي بِمَا رَزَقْتَنِي وَبَارِكْ لِي فِيهِ وَاخْلُفْ عَلَى كُلِّ غَائِبَةٍ لِي بِخَيْرٍ", english: "O Allah, make me content with what You have provided me, and bless it for me. And compensate me with good for every absentee thing.", source: "Al-Adab Al-Mufrad 697" } },
    ],
  },
  {
    id: 2,
    emotions: [
      { name: "Guilty", dua: { arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", english: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.", source: "Quran 7:23" } },
      { name: "Happy", dua: { arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ", english: "All praise is due to Allah, by whose favor good deeds are completed.", source: "Ibn Majah 3803" } },
      { name: "Hurt", dua: { arabic: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ", english: "Indeed, adversity has touched me, and You are the Most Merciful of the merciful.", source: "Quran 21:83" } },
      { name: "Hypocritical", dua: { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الشِّقَاقِ وَالنِّفَاقِ وَسُوءِ الأَخْلاقِ", english: "O Allah, I seek refuge in You from schism, hypocrisy, and bad manners.", source: "Abu Dawud 1546" } },
      { name: "Indecisive", dua: { arabic: "اللَّهُمَّ خِرْ لِي وَاخْتَرْ لِي", english: "O Allah, grant me the choice and choose for me.", source: "Tirmidhi 3567" } },
      { name: "Jealous", dua: { arabic: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ", english: "Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts [any] resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful.", source: "Quran 59:10" } },
      { name: "Lazy", dua: { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ", english: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.", source: "Sahih al-Bukhari 6369" } },
      { name: "Lonely", dua: { arabic: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.", source: "Quran 21:87" } },
      { name: "Lost", dua: { arabic: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي", english: "O Allah, guide me and make me steadfast.", source: "Sahih Muslim 2725a" } },
      { name: "Nervous", dua: { arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي", english: "My Lord, expand for me my breast [with assurance] and ease for me my task and untie the knot from my tongue that they may understand my speech.", source: "Quran 20:25-28" } },
    ],
  },
  {
    id: 3,
    emotions: [
      { name: "Overwhelmed", dua: { arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ", english: "O Ever-Living, O Sustainer, by Your mercy I seek assistance.", source: "Tirmidhi 3522" } },
      { name: "Regret", dua: { arabic: "رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأَبْرَارِ", english: "Our Lord, forgive us our sins and remove from us our evil deeds and take us in death with the righteous.", source: "Quran 3:193" } },
      { name: "Sad", dua: { arabic: "اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجِلاَءَ حُزْنِي وَذَهَابَ هَمِّي", english: "O Allah, I am Your slave, the son of Your male slave, the son of Your female slave. My forelock is in Your hand. Your command over me is forever executed and Your decree upon me is just. I ask You by every name belonging to You which You named Yourself with, or revealed in Your Book, or taught to one of Your creation, or kept unto Yourself in the knowledge of the unseen that is with You, to make the Quran the spring of my heart, the light of my chest, the reliever of my sadness, and the remover of my anxiety.", source: "Ahmad 1/391, Sahih by Al-Albani" } },
      { name: "Scared", dua: { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ", english: "O Allah, I seek refuge in You from cowardice and miserliness.", source: "Sahih al-Bukhari 6369" } },
      { name: "Suicidal", dua: { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَدْمِ، وَأَعُوذُ بِكَ مِنَ التَّرَدِّي، وَأَعُوذُ بِكَ مِنَ الْغَرَقِ، وَالْحَرَقِ، وَالْهَرَمِ، وَأَعُوذُ بِكَ أَنْ يَتَخَبَّطَنِي الشَّيْطَانُ عِنْدَ الْمَوْتِ، وَأَعُوذُ بِكَ أَنْ أَمُوتَ فِي سَبِيلِكَ مُدْبِرًا، وَأَعُوذُ بِكَ أَنْ أَمُوتَ لَدِيغًا", english: "O Allah, I seek refuge in You from being crushed beneath a falling wall, and I seek refuge in You from falling into a pit, and I seek refuge in You from drowning, and burning, and decrepitude. And I seek refuge in You lest Shaytan should make me lose my mind at the time of death, and I seek refuge in You lest I should die in Your path while fleeing (from the battlefield), and I seek refuge in You from dying from the sting of a poisonous creature.", source: "Nasa'i 5547" } },
      { name: "Tired", dua: { arabic: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", english: "In the Name of Allah, with Whose Name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.", source: "Tirmidhi 3388" } },
      { name: "Unloved", dua: { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَالْعَمَلَ الَّذِي يُبَلِّغُنِي حُبَّكَ", english: "O Allah, I ask You for Your love, the love of those who love You, and the love of deeds that will bring me closer to Your love.", source: "Tirmidhi 3490" } },
      { name: "Weak", dua: { arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", english: "Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.", source: "Quran 2:250" } },
      { name: "Anticipation", dua: { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ", english: "O Allah, I ask You for the good of this day, its victory, its help, its light, its blessings, and its guidance.", source: "Abu Dawud 2616" } },
      { name: "Aroused", dua: { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى", english: "O Allah, I ask You for guidance, piety, abstinence (chastity), and contentment.", source: "Sahih Muslim 2721a" } },
    ],
  },
  {
    id: 4,
    emotions: [
      { name: "Curious", dua: { arabic: "رَبِّ زِدْنِي عِلْمًا", english: "My Lord, increase me in knowledge.", source: "Quran 20:114" } },
      { name: "Defeated", dua: { arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", english: "Allah is sufficient for us, and He is the best Disposer of affairs.", source: "Quran 3:173, Sahih al-Bukhari 4563" } },
      { name: "Desire", dua: { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ", english: "O Allah, I ask You for Paradise and what brings one closer to it of speech or action, and I seek refuge in You from the Hellfire and what brings one closer to it of speech or action.", source: "Ibn Majah 3846" } },
      { name: "Desperate", dua: { arabic: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", english: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.", source: "Quran 21:87" } },
      { name: "Determined", dua: { arabic: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا", english: "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.", source: "Quran 18:10" } },
      { name: "Disbelief", dua: { arabic: "اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", english: "O Allah, O Changer of the hearts, make my heart firm upon Your religion.", source: "Tirmidhi 2140" } },
      { name: "Envious", dua: { arabic: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ", english: "Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts [any] resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful.", source: "Quran 59:10" } },
      { name: "Hatred", dua: { arabic: "اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا، وَأَصْلِحْ ذَاتَ بَيْنِنَا، وَاهْدِنَا سُبُلَ السَّلاَمِ", english: "O Allah, unite our hearts, mend our mutual relations, and guide us to the paths of peace.", source: "Abu Dawud 208" } },
      { name: "Humiliated", dua: { arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", english: "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our Protector, so give us victory over the disbelieving people.", source: "Quran 2:286" } },
      { name: "Impatient", dua: { arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ", english: "Our Lord, pour upon us patience and let us die as Muslims [in submission to You].", source: "Quran 7:126" } },
    ],
  },
  {
    id: 5,
    emotions: [
      { name: "Insecure", dua: { arabic: "اللَّهُمَّ اكْفِنِي بِحَلاَلِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ", english: "O Allah, make me self-sufficient with Your lawful provisions, keeping me away from the unlawful, and make me independent of all those besides You with Your bounty.", source: "Tirmidhi 3563" } },
      { name: "Irritated", dua: { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْغَضَبِ", english: "O Allah, I seek refuge in You from anger.", source: "Abu Dawud 1546" } },
      { name: "Love", dua: { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَالْعَمَلَ الَّذِي يُبَلِّغُنِي حُبَّكَ", english: "O Allah, I ask You for Your love, the love of those who love You, and the love of deeds that will bring me closer to Your love.", source: "Tirmidhi 3490" } },
      { name: "Nostalgic", dua: { arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", english: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.", source: "Quran 2:201, Sahih al-Bukhari 6389" } },
      { name: "Offended", dua: { arabic: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ", english: "Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts [any] resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful.", source: "Quran 59:10" } },
      { name: "Peaceful", dua: { arabic: "اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ", english: "O Allah, You are Peace, and from You is peace. Blessed are You, O Possessor of Majesty and Honor.", source: "Sahih Muslim 591" } },
      { name: "Rage", dua: { arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", english: "I seek refuge in Allah from Satan, the expelled.", source: "Sahih al-Bukhari 3297, Sahih Muslim 2610" } },
      { name: "Satisfied", dua: { arabic: "الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ", english: "All praise is due to Allah, by whose favor good deeds are completed.", source: "Ibn Majah 3803" } },
      { name: "Uncertain", dua: { arabic: "اللَّهُمَّ مُصَرِّفَ الْقُلُوبِ صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ", english: "O Allah, Changer of the hearts, direct our hearts to Your obedience.", source: "Sahih Muslim 2654" } },
      { name: "Uneasy", dua: { arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ", english: "O Allah, I seek refuge in You from anxiety and sorrow.", source: "Sahih al-Bukhari 6369" } },
    ],
  },
];

// All unique duas for selection
const allDuas: Dua[] = gameSets.flatMap((set) => set.emotions.map((e) => e.dua));

const DuaEmotionMatch: React.FC = () => {
  const [currentSetId, setCurrentSetId] = useState<number>(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Current game set
  const currentSet = gameSets.find((set) => set.id === currentSetId);
  const isSubmitEnabled = Object.keys(selectedAnswers).length === currentSet!.emotions.length;

  // Handle dua selection
  const handleDuaSelect = (emotionIndex: number, duaArabic: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [emotionIndex]: duaArabic }));
  };

  // Handle submit
  const handleSubmit = (): void => {
    let correctCount = 0;
    currentSet!.emotions.forEach((emotion, index) => {
      const selectedDua = allDuas.find((d) => d.arabic === selectedAnswers[index]);
      if (selectedDua && selectedDua.arabic === emotion.dua.arabic) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  // Reset for new game
  const resetGame = (newSetId: number): void => {
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    setCurrentSetId(newSetId);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-green-600">Dua Emotion Match</h1>
      {showResults ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Results: {score} / {currentSet!.emotions.length}</h2>
          <ul className="space-y-4 mb-6">
            {currentSet!.emotions.map((emotion, index) => (
              <li key={index} className="text-left">
                <p><strong>Emotion:</strong> {emotion.name}</p>
                <p><strong>Correct Dua:</strong> {emotion.dua.arabic} - {emotion.dua.english} ({emotion.dua.source})</p>
                <p>
                  <strong>Your Answer:</strong> {selectedAnswers[index] ? allDuas.find((d) => d.arabic === selectedAnswers[index])!.english : "None"}
                  {selectedAnswers[index] && selectedAnswers[index] === emotion.dua.arabic ? (
                    <span className="text-green-500"> ✓</span>
                  ) : (
                    <span className="text-red-500"> ✗</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
          <div className="space-x-4">
            <Link href="/games">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Home
              </button>
            </Link>
            {currentSetId < gameSets.length && (
              <button
                onClick={() => resetGame(currentSetId + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Next Set
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Set {currentSetId}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Emotions</h3>
              <ul className="space-y-4">
                {currentSet!.emotions.map((emotion, index) => (
                  <li key={index} className="p-4 bg-white rounded shadow">
                    <p><strong>Emotion:</strong> {emotion.name}</p>
                    <p className="mt-2">
                      <strong>Selected Dua:</strong> {selectedAnswers[index] ? allDuas.find((d) => d.arabic === selectedAnswers[index])!.english : "None"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Duas</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {allDuas.map((dua, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const firstEmptyIndex = Object.keys(selectedAnswers).length;
                      if (firstEmptyIndex < currentSet!.emotions.length) {
                        handleDuaSelect(firstEmptyIndex, dua.arabic);
                      }
                    }}
                    className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    {dua.arabic}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isSubmitEnabled}
            className={`px-4 py-2 mt-6 rounded ${isSubmitEnabled ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-300 cursor-not-allowed"}`}
          >
            Submit
          </button>
        </div>
      )}
      <p className="mt-8 text-sm text-gray-600">
        A KALAM game to learn Quranic duas for emotions. Visit{" "}
        <Link href="https://v0-kalam.vercel.app" className="text-green-600 underline">
          KALAM
        </Link>
      </p>
    </div>
  );
};

export default DuaEmotionMatch;
