export type Relative = {
  id: string
  name: string
  arabicName: string
  transliteration: string
  isMahramToMale: boolean
  isMahramToFemale: boolean
  gender: "male" | "female"
  relation: string
  explanationForMale?: string
  explanationForFemale?: string
}

export const relatives: Relative[] = [
  {
    id: "grandpa-paternal",
    name: "Paternal Grandpa",
    arabicName: "جَدّ",
    transliteration: "Jadd",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "male",
    relation: "Father's father",
    explanationForMale: "Direct male ancestor (father's father) is always Mahram.",
    explanationForFemale: "Direct male ancestor (father's father) is always Mahram.",
  },
  {
    id: "grandma-paternal",
    name: "Paternal Grandma",
    arabicName: "جَدَّة",
    transliteration: "Jaddah",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "female",
    relation: "Father's mother",
    explanationForMale: "Direct female ancestor (father's mother) is always Mahram.",
    explanationForFemale: "Direct female ancestor (father's mother) is always Mahram.",
  },
  {
    id: "grandpa-maternal",
    name: "Maternal Grandpa",
    arabicName: "جَدّ لِلأُم",
    transliteration: "Jadd lil-umm",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "male",
    relation: "Mother's father",
    explanationForMale: "Direct male ancestor (mother's father) is always Mahram.",
    explanationForFemale: "Direct male ancestor (mother's father) is always Mahram.",
  },
  {
    id: "grandma-maternal",
    name: "Maternal Grandma",
    arabicName: "جَدَّة لِلأُم",
    transliteration: "Jaddah lil-umm",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "female",
    relation: "Mother's mother",
    explanationForMale: "Direct female ancestor (mother's mother) is always Mahram.",
    explanationForFemale: "Direct female ancestor (mother's mother) is always Mahram.",
  },
  {
    id: "father",
    name: "Father",
    arabicName: "أب",
    transliteration: "Ab",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "male",
    relation: "Father",
    explanationForMale: "Direct male parent is always Mahram.",
    explanationForFemale: "Direct male parent is always Mahram.",
  },
  {
    id: "mother",
    name: "Mother",
    arabicName: "أُمّ",
    transliteration: "Umm",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "female",
    relation: "Mother",
    explanationForMale: "Direct female parent is always Mahram.",
    explanationForFemale: "Direct female parent is always Mahram.",
  },
  {
    id: "uncle-paternal",
    name: "Paternal Uncle",
    arabicName: "عَمّ",
    transliteration: "Amm",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "male",
    relation: "Father's brother",
    explanationForMale: "Father's brother is Mahram.",
    explanationForFemale: "Father's brother is Mahram.",
  },
  {
    id: "uncles-wife",
    name: "Uncle's Wife",
    arabicName: "زَوجَة العَمّ",
    transliteration: "Zawjat al-Amm",
    isMahramToMale: false,
    isMahramToFemale: false,
    gender: "female",
    relation: "Father's brother's wife",
    explanationForMale: "Uncle's wife is not related by blood and is Non-Mahram.",
    explanationForFemale: "Uncle's wife is not related by blood and is Non-Mahram.",
  },
  {
    id: "aunty-paternal",
    name: "Paternal Aunty",
    arabicName: "عَمَّة",
    transliteration: "Ammah",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "female",
    relation: "Father's sister",
    explanationForMale: "Father's sister is Mahram.",
    explanationForFemale: "Father's sister is Mahram.",
  },
  {
    id: "uncle-in-law",
    name: "Uncle in Law",
    arabicName: "زَوج الخَالَة",
    transliteration: "Zawj al-Khalah",
    isMahramToMale: false,
    isMahramToFemale: false,
    gender: "male",
    relation: "Mother's sister's husband",
    explanationForMale: "Aunt's husband is not related by blood and is Non-Mahram.",
    explanationForFemale: "Aunt's husband is not related by blood and is Non-Mahram.",
  },
  {
    id: "aunty-maternal",
    name: "Maternal Aunty",
    arabicName: "خَالَة",
    transliteration: "Khalah",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "female",
    relation: "Mother's sister",
    explanationForMale: "Mother's sister is Mahram.",
    explanationForFemale: "Mother's sister is Mahram.",
  },
  {
    id: "cousin-male",
    name: "Male Cousin",
    arabicName: "اِبن العَمّ / اِبن الخَال",
    transliteration: "Ibn al-Amm / Ibn al-Khal",
    isMahramToMale: false,
    isMahramToFemale: false,
    gender: "male",
    relation: "Uncle's or Aunt's son",
    explanationForMale: "Male cousins are Non-Mahram as they are potential spouses for your sisters/daughters.",
    explanationForFemale: "Male cousins are Non-Mahram as they are potential spouses in Islam.",
  },
  {
    id: "cousin-female",
    name: "Female Cousin",
    arabicName: "بِنت العَمّ / بِنت الخَال",
    transliteration: "Bint al-Amm / Bint al-Khal",
    isMahramToMale: false,
    isMahramToFemale: false,
    gender: "female",
    relation: "Uncle's or Aunt's daughter",
    explanationForMale: "Female cousins are Non-Mahram as they are potential spouses in Islam.",
    explanationForFemale: "Female cousins are Non-Mahram as they are potential spouses for your brothers/sons.",
  },
  {
    id: "brother",
    name: "Brother",
    arabicName: "أخ",
    transliteration: "Akh",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "male",
    relation: "Brother",
    explanationForMale: "Direct male sibling is always Mahram.",
    explanationForFemale: "Direct male sibling is always Mahram.",
  },
  {
    id: "brothers-wife",
    name: "Brother's Wife",
    arabicName: "زَوجَة الأخ",
    transliteration: "Zawjat al-Akh",
    isMahramToMale: false,
    isMahramToFemale: false,
    gender: "female",
    relation: "Brother's wife",
    explanationForMale: "Brother's wife is not related by blood and is Non-Mahram.",
    explanationForFemale: "Brother's wife is not related by blood and is Non-Mahram.",
  },
  {
    id: "sister",
    name: "Sister",
    arabicName: "أُخت",
    transliteration: "Ukht",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "female",
    relation: "Sister",
    explanationForMale: "Direct female sibling is always Mahram.",
    explanationForFemale: "Direct female sibling is always Mahram.",
  },
  {
    id: "sisters-husband",
    name: "Sister's Husband",
    arabicName: "زَوج الأُخت",
    transliteration: "Zawj al-Ukht",
    isMahramToMale: false,
    isMahramToFemale: false,
    gender: "male",
    relation: "Sister's husband",
    explanationForMale: "Sister's husband is not related by blood and is Non-Mahram.",
    explanationForFemale: "Sister's husband is not related by blood and is Non-Mahram.",
  },
  {
    id: "niece",
    name: "Niece",
    arabicName: "بِنت الأخ / بِنت الأُخت",
    transliteration: "Bint al-Akh / Bint al-Ukht",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "female",
    relation: "Brother's or Sister's daughter",
    explanationForMale: "Brother's or Sister's daughter is Mahram.",
    explanationForFemale: "Brother's or Sister's daughter is Mahram.",
  },
  {
    id: "nephew",
    name: "Nephew",
    arabicName: "اِبن الأخ / اِبن الأُخت",
    transliteration: "Ibn al-Akh / Ibn al-Ukht",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "male",
    relation: "Brother's or Sister's son",
    explanationForMale: "Brother's or Sister's son is Mahram.",
    explanationForFemale: "Brother's or Sister's son is Mahram.",
  },
  {
    id: "son",
    name: "Son",
    arabicName: "اِبن",
    transliteration: "Ibn",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "male",
    relation: "Son",
    explanationForMale: "Direct male descendant is always Mahram.",
    explanationForFemale: "Direct male descendant is always Mahram.",
  },
  {
    id: "daughter",
    name: "Daughter",
    arabicName: "بِنت",
    transliteration: "Bint",
    isMahramToMale: true,
    isMahramToFemale: true,
    gender: "female",
    relation: "Daughter",
    explanationForMale: "Direct female descendant is always Mahram.",
    explanationForFemale: "Direct female descendant is always Mahram.",
  },
  {
    id: "sons-wife",
    name: "Son's Wife",
    arabicName: "زَوجَة الاِبن",
    transliteration: "Zawjat al-Ibn",
    isMahramToMale: true,
    isMahramToFemale: false,
    gender: "female",
    relation: "Son's wife",
    explanationForMale: "Son's wife is Mahram to the father (father-in-law relationship).",
    explanationForFemale: "Son's wife is not directly related and is Non-Mahram.",
  },
  {
    id: "daughters-husband",
    name: "Daughter's Husband",
    arabicName: "زَوج البِنت",
    transliteration: "Zawj al-Bint",
    isMahramToMale: false,
    isMahramToFemale: true,
    gender: "male",
    relation: "Daughter's husband",
    explanationForMale: "Daughter's husband is not directly related and is Non-Mahram.",
    explanationForFemale: "Daughter's husband is Mahram to the mother (mother-in-law relationship).",
  },
]

export const mahramTerms = {
  mahram: {
    arabic: "مَحْرَم",
    transliteration: "Mahram",
    definition:
      "A person with whom marriage is permanently forbidden in Islam due to blood relations, marriage, or breastfeeding relationships.",
  },
  nonMahram: {
    arabic: "غَيْر مَحْرَم",
    transliteration: "Ghayr Mahram",
    definition: "A person with whom marriage is potentially permissible in Islam.",
  },
}
