// app/data/quranic-ayats-game-data.ts 
export const quranicAyatsGameData = {
  easy: [
    // 1st Ayah (Bismillah)
    [
      { id: '1-1', text: 'بسم', translation: 'In the name of' },
      { id: '1-2', text: 'الله', translation: 'Allah' },
      { id: '1-3', text: 'الرحمن', translation: 'the Entirely Merciful' },
      { id: '1-4', text: 'الرحيم', translation: 'the Especially Merciful' }
    ],
    // 2nd Ayah (Al-Fatiha 1:2)
    [
      { id: '2-1', text: 'الحمد', translation: '[All] praise is' },
      { id: '2-2', text: 'لله', translation: '[due] to Allah' },
      { id: '2-3', text: 'رب', translation: 'Lord' },
      { id: '2-4', text: 'العالمين', translation: 'of the worlds' }
    ],
    // 3rd Ayah (Al-Fatiha 1:3)
    [
      { id: '3-1', text: 'الرحمن', translation: 'The Entirely Merciful' },
      { id: '3-2', text: 'الرحيم', translation: 'the Especially Merciful' }
    ],
    // 4th Ayah (Al-Fatiha 1:4)
    [
      { id: '4-1', text: 'مالك', translation: 'Sovereign of' },
      { id: '4-2', text: 'يوم', translation: 'the Day' },
      { id: '4-3', text: 'الدين', translation: 'of Recompense' }
    ],
    // 5th Ayah (Al-Fatiha 1:5)
    [
      { id: '5-1', text: 'إياك', translation: 'It is You' },
      { id: '5-2', text: 'نعبد', translation: 'we worship' },
      { id: '5-3', text: 'وإياك', translation: 'and You' },
      { id: '5-4', text: 'نستعين', translation: 'we ask for help' }
    ]
  ],
  medium: [
    // 1st Ayah (Al-Baqarah 2:255 - Ayatul Kursi part 1)
    [
      { id: 'm1-1', text: 'الله', translation: 'Allah' },
      { id: 'm1-2', text: 'لا', translation: 'there is no' },
      { id: 'm1-3', text: 'إله', translation: 'deity' },
      { id: 'm1-4', text: 'إلا', translation: 'except' },
      { id: 'm1-5', text: 'هو', translation: 'Him' }
    ],
    // 2nd Ayah (Ayatul Kursi part 2)
    [
      { id: 'm2-1', text: 'الحي', translation: 'the Ever-Living' },
      { id: 'm2-2', text: 'القيوم', translation: 'the Sustainer of existence' }
    ],
    // 3rd Ayah (Ayatul Kursi part 3)
    [
      { id: 'm3-1', text: 'لا', translation: 'Neither' },
      { id: 'm3-2', text: 'تأخذه', translation: 'overtakes Him' },
      { id: 'm3-3', text: 'سنة', translation: 'drowsiness' },
      { id: 'm3-4', text: 'ولا', translation: 'nor' },
      { id: 'm3-5', text: 'نوم', translation: 'sleep' }
    ],
    // 4th Ayah (Al-Ikhlas 112:1)
    [
      { id: 'm4-1', text: 'قل', translation: 'Say' },
      { id: 'm4-2', text: 'هو', translation: 'He is' },
      { id: 'm4-3', text: 'الله', translation: 'Allah' },
      { id: 'm4-4', text: 'أحد', translation: '[who is] One' }
    ],
    // 5th Ayah (Al-Ikhlas 112:2)
    [
      { id: 'm5-1', text: 'الله', translation: 'Allah' },
      { id: 'm5-2', text: 'الصمد', translation: 'the Eternal Refuge' }
    ]
  ],
  hard: [
    // 1st Ayah (Al-Baqarah 2:186)
    [
      { id: 'h1-1', text: 'وإذا', translation: 'And when' },
      { id: 'h1-2', text: 'سألك', translation: 'ask you' },
      { id: 'h1-3', text: 'عبادي', translation: 'My servants' },
      { id: 'h1-4', text: 'عني', translation: 'concerning Me' }
    ],
    // 2nd Ayah (continued)
    [
      { id: 'h2-1', text: 'فإني', translation: 'then indeed I' },
      { id: 'h2-2', text: 'قريب', translation: 'am near' }
    ],
    // 3rd Ayah (continued)
    [
      { id: 'h3-1', text: 'أجيب', translation: 'I respond to' },
      { id: 'h3-2', text: 'دعوة', translation: 'the invocation of' },
      { id: 'h3-3', text: 'الداع', translation: 'the supplicant' }
    ],
    // 4th Ayah (Al-Muzzammil 73:1)
    [
      { id: 'h4-1', text: 'يا', translation: 'O' },
      { id: 'h4-2', text: 'أيها', translation: 'you who' },
      { id: 'h4-3', text: 'المزمل', translation: 'wraps himself [in clothing]' }
    ],
    // 5th Ayah (Al-Muzzammil 73:2)
    [
      { id: 'h5-1', text: 'قم', translation: 'Stand' },
      { id: 'h5-2', text: 'الليل', translation: '[in prayer] by night' },
      { id: 'h5-3', text: 'إلا', translation: 'except' },
      { id: 'h5-4', text: 'قليلا', translation: 'for a little' }
    ]
  ],
  correctOrders: {
    easy: [
      ['1-1', '1-2', '1-3', '1-4'],
      ['2-1', '2-2', '2-3', '2-4'],
      ['3-1', '3-2'],
      ['4-1', '4-2', '4-3'],
      ['5-1', '5-2', '5-3', '5-4']
    ],
    medium: [
      ['m1-1', 'm1-2', 'm1-3', 'm1-4', 'm1-5'],
      ['m2-1', 'm2-2'],
      ['m3-1', 'm3-2', 'm3-3', 'm3-4', 'm3-5'],
      ['m4-1', 'm4-2', 'm4-3', 'm4-4'],
      ['m5-1', 'm5-2']
    ],
    hard: [
      ['h1-1', 'h1-2', 'h1-3', 'h1-4'],
      ['h2-1', 'h2-2'],
      ['h3-1', 'h3-2', 'h3-3'],
      ['h4-1', 'h4-2', 'h4-3'],
      ['h5-1', 'h5-2', 'h5-3', 'h5-4']
    ]
  }
};

export { quranicAyatsGameData };
export default quranicAyatsGameData;
