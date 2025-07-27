// app/data/quranic-ayats-game-data.ts
interface QuranicAyahPart {
  id: string;
  text: string;
  translation: string;
}

interface QuranicGameData {
  easy: QuranicAyahPart[][];
  medium: QuranicAyahPart[][];
  hard: QuranicAyahPart[][];
  correctOrders: {
    easy: string[][];
    medium: string[][];
    hard: string[][];
  };
}

const quranicAyatsGameData: QuranicGameData = {
  easy: [
    // Existing Ayahs
    [
      { id: '1-1', text: 'بسم', translation: 'In the name of' },
      { id: '1-2', text: 'الله', translation: 'Allah' },
      { id: '1-3', text: 'الرحمن', translation: 'the Entirely Merciful' },
      { id: '1-4', text: 'الرحيم', translation: 'the Especially Merciful' }
    ],
    [
      { id: '2-1', text: 'الحمد', translation: '[All] praise is' },
      { id: '2-2', text: 'لله', translation: '[due] to Allah' },
      { id: '2-3', text: 'رب', translation: 'Lord' },
      { id: '2-4', text: 'العالمين', translation: 'of the worlds' }
    ],
    [
      { id: '3-1', text: 'الرحمن', translation: 'The Entirely Merciful' },
      { id: '3-2', text: 'الرحيم', translation: 'the Especially Merciful' }
    ],
    [
      { id: '4-1', text: 'مالك', translation: 'Sovereign of' },
      { id: '4-2', text: 'يوم', translation: 'the Day' },
      { id: '4-3', text: 'الدين', translation: 'of Recompense' }
    ],
    [
      { id: '5-1', text: 'إياك', translation: 'It is You' },
      { id: '5-2', text: 'نعبد', translation: 'we worship' },
      { id: '5-3', text: 'وإياك', translation: 'and You' },
      { id: '5-4', text: 'نستعين', translation: 'we ask for help' }
    ],
    // New Ayahs for easy level
    // Surah Al-Fatiha 1:6
    [
      { id: 'e6-1', text: 'اهدنا', translation: 'Guide us' },
      { id: 'e6-2', text: 'الصراط', translation: 'to the path' },
      { id: 'e6-3', text: 'المستقيم', translation: 'the straight' }
    ],
    // Surah Al-Fatiha 1:7
    [
      { id: 'e7-1', text: 'صراط', translation: 'The path of' },
      { id: 'e7-2', text: 'الذين', translation: 'those' },
      { id: 'e7-3', text: 'أنعمت', translation: 'You have bestowed favor upon' }
    ],
    // Surah Al-Asr 103:1
    [
      { id: 'e8-1', text: 'والعصر', translation: 'By the afternoon' }
    ],
    // Surah Al-Ikhlas 112:3
    [
      { id: 'e9-1', text: 'لم', translation: 'He neither' },
      { id: 'e9-2', text: 'يلد', translation: 'begets' },
      { id: 'e9-3', text: 'ولم', translation: 'nor is He' },
      { id: 'e9-4', text: 'يولد', translation: 'begotten' }
    ],
    // Surah An-Nas 114:1
    [
      { id: 'e10-1', text: 'قل', translation: 'Say' },
      { id: 'e10-2', text: 'أعوذ', translation: 'I seek refuge' },
      { id: 'e10-3', text: 'برب', translation: 'in the Lord' },
      { id: 'e10-4', text: 'الناس', translation: 'of mankind' }
    ]
  ],
  medium: [
    // Existing Ayahs
    [
      { id: 'm1-1', text: 'الله', translation: 'Allah' },
      { id: 'm1-2', text: 'لا', translation: 'there is no' },
      { id: 'm1-3', text: 'إله', translation: 'deity' },
      { id: 'm1-4', text: 'إلا', translation: 'except' },
      { id: 'm1-5', text: 'هو', translation: 'Him' }
    ],
    [
      { id: 'm2-1', text: 'الحي', translation: 'the Ever-Living' },
      { id: 'm2-2', text: 'القيوم', translation: 'the Sustainer of existence' }
    ],
    [
      { id: 'm3-1', text: 'لا', translation: 'Neither' },
      { id: 'm3-2', text: 'تأخذه', translation: 'overtakes Him' },
      { id: 'm3-3', text: 'سنة', translation: 'drowsiness' },
      { id: 'm3-4', text: 'ولا', translation: 'nor' },
      { id: 'm3-5', text: 'نوم', translation: 'sleep' }
    ],
    [
      { id: 'm4-1', text: 'قل', translation: 'Say' },
      { id: 'm4-2', text: 'هو', translation: 'He is' },
      { id: 'm4-3', text: 'الله', translation: 'Allah' },
      { id: 'm4-4', text: 'أحد', translation: '[who is] One' }
    ],
    [
      { id: 'm5-1', text: 'الله', translation: 'Allah' },
      { id: 'm5-2', text: 'الصمد', translation: 'the Eternal Refuge' }
    ],
    // New Ayahs for medium level
    // Surah Al-Ikhlas 112:4
    [
      { id: 'm6-1', text: 'ولم', translation: 'And there is none' },
      { id: 'm6-2', text: 'يكن', translation: 'comparable to' },
      { id: 'm6-3', text: 'له', translation: 'Him' },
      { id: 'm6-4', text: 'كفوا', translation: 'equal' },
      { id: 'm6-5', text: 'أحد', translation: 'to Him' }
    ],
    // Surah Al-Falaq 113:1
    [
      { id: 'm7-1', text: 'قل', translation: 'Say' },
      { id: 'm7-2', text: 'أعوذ', translation: 'I seek refuge' },
      { id: 'm7-3', text: 'برب', translation: 'in the Lord' },
      { id: 'm7-4', text: 'الفلق', translation: 'of daybreak' }
    ],
    // Surah An-Nas 114:2
    [
      { id: 'm8-1', text: 'ملك', translation: 'The Sovereign' },
      { id: 'm8-2', text: 'الناس', translation: 'of mankind' }
    ],
    // Surah Al-Kausar 108:1
    [
      { id: 'm9-1', text: 'إنا', translation: 'Indeed' },
      { id: 'm9-2', text: 'أعطيناك', translation: 'We have given you' },
      { id: 'm9-3', text: 'الكوثر', translation: 'al-Kawthar' }
    ],
    // Surah Al-Kafirun 109:1
    [
      { id: 'm10-1', text: 'قل', translation: 'Say' },
      { id: 'm10-2', text: 'يا', translation: 'O' },
      { id: 'm10-3', text: 'أيها', translation: 'you who' },
      { id: 'm10-4', text: 'الكافرون', translation: 'disbelieve' }
    ]
  ],
  hard: [
    // Existing Ayahs
    [
      { id: 'h1-1', text: 'وإذا', translation: 'And when' },
      { id: 'h1-2', text: 'سألك', translation: 'ask you' },
      { id: 'h1-3', text: 'عبادي', translation: 'My servants' },
      { id: 'h1-4', text: 'عني', translation: 'concerning Me' }
    ],
    [
      { id: 'h2-1', text: 'فإني', translation: 'then indeed I' },
      { id: 'h2-2', text: 'قريب', translation: 'am near' }
    ],
    [
      { id: 'h3-1', text: 'أجيب', translation: 'I respond to' },
      { id: 'h3-2', text: 'دعوة', translation: 'the invocation of' },
      { id: 'h3-3', text: 'الداع', translation: 'the supplicant' }
    ],
    [
      { id: 'h4-1', text: 'يا', translation: 'O' },
      { id: 'h4-2', text: 'أيها', translation: 'you who' },
      { id: 'h4-3', text: 'المزمل', translation: 'wraps himself [in clothing]' }
    ],
    [
      { id: 'h5-1', text: 'قم', translation: 'Stand' },
      { id: 'h5-2', text: 'الليل', translation: '[in prayer] by night' },
      { id: 'h5-3', text: 'إلا', translation: 'except' },
      { id: 'h5-4', text: 'قليلا', translation: 'for a little' }
    ],
    // New Ayahs for hard level
    // Surah Al-Baqarah 2:186 (continued)
    [
      { id: 'h6-1', text: 'إذا', translation: 'when' },
      { id: 'h6-2', text: 'دعان', translation: 'he calls upon Me' }
    ],
    // Surah Al-Muzzammil 73:4
    [
      { id: 'h7-1', text: 'أو', translation: 'Or add' },
      { id: 'h7-2', text: 'عليه', translation: 'to it' },
      { id: 'h7-3', text: 'ورتل', translation: 'and recite the Qur’an' },
      { id: 'h7-4', text: 'القرآن', translation: 'in a slow, measured tone' },
      { id: 'h7-5', text: 'ترتيلا', translation: 'recitation' }
    ],
    // Surah At-Tin 95:4
    [
      { id: 'h8-1', text: 'لقد', translation: 'We have certainly' },
      { id: 'h8-2', text: 'خلقنا', translation: 'created' },
      { id: 'h8-3', text: 'الإنسان', translation: 'man' },
      { id: 'h8-4', text: 'في', translation: 'in' },
      { id: 'h8-5', text: 'أحسن', translation: 'the best' },
      { id: 'h8-6', text: 'تقويم', translation: 'of stature' }
    ],
    // Surah Al-Qadr 97:1
    [
      { id: 'h9-1', text: 'إنا', translation: 'Indeed, We' },
      { id: 'h9-2', text: 'أنزلناه', translation: 'sent it down' },
      { id: 'h9-3', text: 'في', translation: 'in' },
      { id: 'h9-4', text: 'ليلة', translation: 'the Night' },
      { id: 'h9-5', text: 'القدر', translation: 'of Decree' }
    ],
    // Surah Al-Qariah 101:1
    [
      { id: 'h10-1', text: 'القارعة', translation: 'The Striking Calamity' }
    ]
  ],
  correctOrders: {
    easy: [
      ['1-1', '1-2', '1-3', '1-4'],
      ['2-1', '2-2', '2-3', '2-4'],
      ['3-1', '3-2'],
      ['4-1', '4-2', '4-3'],
      ['5-1', '5-2', '5-3', '5-4'],
      ['e6-1', 'e6-2', 'e6-3'],
      ['e7-1', 'e7-2', 'e7-3'],
      ['e8-1'],
      ['e9-1', 'e9-2', 'e9-3', 'e9-4'],
      ['e10-1', 'e10-2', 'e10-3', 'e10-4']
    ],
    medium: [
      ['m1-1', 'm1-2', 'm1-3', 'm1-4', 'm1-5'],
      ['m2-1', 'm2-2'],
      ['m3-1', 'm3-2', 'm3-3', 'm3-4', 'm3-5'],
      ['m4-1', 'm4-2', 'm4-3', 'm4-4'],
      ['m5-1', 'm5-2'],
      ['m6-1', 'm6-2', 'm6-3', 'm6-4', 'm6-5'],
      ['m7-1', 'm7-2', 'm7-3', 'm7-4'],
      ['m8-1', 'm8-2'],
      ['m9-1', 'm9-2', 'm9-3'],
      ['m10-1', 'm10-2', 'm10-3', 'm10-4']
    ],
    hard: [
      ['h1-1', 'h1-2', 'h1-3', 'h1-4'],
      ['h2-1', 'h2-2'],
      ['h3-1', 'h3-2', 'h3-3'],
      ['h4-1', 'h4-2', 'h4-3'],
      ['h5-1', 'h5-2', 'h5-3', 'h5-4'],
      ['h6-1', 'h6-2'],
      ['h7-1', 'h7-2', 'h7-3', 'h7-4', 'h7-5'],
      ['h8-1', 'h8-2', 'h8-3', 'h8-4', 'h8-5', 'h8-6'],
      ['h9-1', 'h9-2', 'h9-3', 'h9-4', 'h9-5'],
      ['h10-1']
    ]
  }
};

export { quranicAyatsGameData };
export default quranicAyatsGameData;
