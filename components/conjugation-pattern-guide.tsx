import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Tense } from "@/types/conjugation"

interface ConjugationPatternGuideProps {
  tense: Tense
}

export function ConjugationPatternGuide({ tense }: ConjugationPatternGuideProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conjugation Pattern Guide</CardTitle>
        <CardDescription>Visual guide to understanding how Arabic verbs change in the {tense} tense</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Pattern Overview</TabsTrigger>
            <TabsTrigger value="persons">Persons & Pronouns</TabsTrigger>
            <TabsTrigger value="examples">Visual Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-medium mb-2">Past Tense Pattern Structure</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-md border">
                    <h4 className="text-sm font-medium text-blue-700 mb-1">Prefixes</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>
                        <span className="font-arabic">أَ</span> (a) - First person singular (I)
                      </li>
                      <li>
                        <span className="font-arabic">نَ</span> (na) - First person plural (we)
                      </li>
                      <li>
                        <span className="font-arabic">تَ</span> (ta) - Second person (you)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <h4 className="text-sm font-medium text-emerald-700 mb-1">Root</h4>
                    <p className="text-sm">The three-letter root forms the base of the verb.</p>
                    <p className="text-sm mt-2">
                      Example: <span className="font-arabic">كتب</span> (k-t-b) - to write
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <h4 className="text-sm font-medium text-amber-700 mb-1">Suffixes</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>
                        <span className="font-arabic">تْ</span> (at) - Third person feminine singular
                      </li>
                      <li>
                        <span className="font-arabic">ا</span> (ā) - Dual
                      </li>
                      <li>
                        <span className="font-arabic">وا</span> (ū) - Third person masculine plural
                      </li>
                      <li>
                        <span className="font-arabic">نَ</span> (na) - Third person feminine plural
                      </li>
                      <li>
                        <span className="font-arabic">تَ</span> (ta) - Second person masculine singular
                      </li>
                      <li>
                        <span className="font-arabic">تِ</span> (ti) - Second person feminine singular
                      </li>
                      <li>
                        <span className="font-arabic">تُمْ</span> (tum) - Second person masculine plural
                      </li>
                      <li>
                        <span className="font-arabic">تُنَّ</span> (tunna) - Second person feminine plural
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-medium mb-2">Voweling Patterns</h3>
                <p className="text-sm mb-3">
                  In the past tense, the base form (third person masculine singular) typically follows the pattern:
                </p>

                <div className="flex justify-center items-center space-x-4 mb-4">
                  <div className="text-center">
                    <div className="font-arabic text-2xl mb-1">فَعَلَ</div>
                    <div className="text-xs text-muted-foreground">fa'ala</div>
                  </div>

                  <div className="text-center">
                    <div className="font-arabic text-2xl mb-1">كَتَبَ</div>
                    <div className="text-xs text-muted-foreground">kataba</div>
                  </div>

                  <div className="text-center">
                    <div className="font-arabic text-2xl mb-1">قَالَ</div>
                    <div className="text-xs text-muted-foreground">qāla</div>
                  </div>
                </div>

                <p className="text-sm">
                  The voweling pattern is typically <span className="font-arabic">َ َ َ</span> (fatha-fatha-fatha), though
                  some verbs have different patterns like <span className="font-arabic">َ ِ َ</span> (fatha-kasra-fatha).
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="persons">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-3">Persons, Pronouns & Conjugation</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 text-left">Person</th>
                      <th className="border p-2 text-left">Gender</th>
                      <th className="border p-2 text-left">Number</th>
                      <th className="border p-2 text-left">Arabic Pronoun</th>
                      <th className="border p-2 text-left">English</th>
                      <th className="border p-2 text-left">Pattern</th>
                      <th className="border p-2 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Third</td>
                      <td className="border p-2">Masculine</td>
                      <td className="border p-2">Singular</td>
                      <td className="border p-2 font-arabic">هُوَ</td>
                      <td className="border p-2">He</td>
                      <td className="border p-2 font-arabic">فَعَلَ</td>
                      <td className="border p-2 font-arabic">كَتَبَ</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Third</td>
                      <td className="border p-2">Feminine</td>
                      <td className="border p-2">Singular</td>
                      <td className="border p-2 font-arabic">هِيَ</td>
                      <td className="border p-2">She</td>
                      <td className="border p-2 font-arabic">فَعَلَتْ</td>
                      <td className="border p-2 font-arabic">كَتَبَتْ</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Third</td>
                      <td className="border p-2">Masculine</td>
                      <td className="border p-2">Dual</td>
                      <td className="border p-2 font-arabic">هُمَا</td>
                      <td className="border p-2">They (2 males)</td>
                      <td className="border p-2 font-arabic">فَعَلَا</td>
                      <td className="border p-2 font-arabic">كَتَبَا</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Third</td>
                      <td className="border p-2">Feminine</td>
                      <td className="border p-2">Dual</td>
                      <td className="border p-2 font-arabic">هُمَا</td>
                      <td className="border p-2">They (2 females)</td>
                      <td className="border p-2 font-arabic">فَعَلَتَا</td>
                      <td className="border p-2 font-arabic">كَتَبَتَا</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Third</td>
                      <td className="border p-2">Masculine</td>
                      <td className="border p-2">Plural</td>
                      <td className="border p-2 font-arabic">هُمْ</td>
                      <td className="border p-2">They (males)</td>
                      <td className="border p-2 font-arabic">فَعَلُوا</td>
                      <td className="border p-2 font-arabic">كَتَبُوا</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Third</td>
                      <td className="border p-2">Feminine</td>
                      <td className="border p-2">Plural</td>
                      <td className="border p-2 font-arabic">هُنَّ</td>
                      <td className="border p-2">They (females)</td>
                      <td className="border p-2 font-arabic">فَعَلْنَ</td>
                      <td className="border p-2 font-arabic">كَتَبْنَ</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Second</td>
                      <td className="border p-2">Masculine</td>
                      <td className="border p-2">Singular</td>
                      <td className="border p-2 font-arabic">أَنْتَ</td>
                      <td className="border p-2">You (male)</td>
                      <td className="border p-2 font-arabic">فَعَلْتَ</td>
                      <td className="border p-2 font-arabic">كَتَبْتَ</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Second</td>
                      <td className="border p-2">Feminine</td>
                      <td className="border p-2">Singular</td>
                      <td className="border p-2 font-arabic">أَنْتِ</td>
                      <td className="border p-2">You (female)</td>
                      <td className="border p-2 font-arabic">فَعَلْتِ</td>
                      <td className="border p-2 font-arabic">كَتَبْتِ</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Second</td>
                      <td className="border p-2">Both</td>
                      <td className="border p-2">Dual</td>
                      <td className="border p-2 font-arabic">أَنْتُمَا</td>
                      <td className="border p-2">You (2)</td>
                      <td className="border p-2 font-arabic">فَعَلْتُمَا</td>
                      <td className="border p-2 font-arabic">كَتَبْتُمَا</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Second</td>
                      <td className="border p-2">Masculine</td>
                      <td className="border p-2">Plural</td>
                      <td className="border p-2 font-arabic">أَنْتُمْ</td>
                      <td className="border p-2">You (males)</td>
                      <td className="border p-2 font-arabic">فَعَلْتُمْ</td>
                      <td className="border p-2 font-arabic">كَتَبْتُمْ</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Second</td>
                      <td className="border p-2">Feminine</td>
                      <td className="border p-2">Plural</td>
                      <td className="border p-2 font-arabic">أَنْتُنَّ</td>
                      <td className="border p-2">You (females)</td>
                      <td className="border p-2 font-arabic">فَعَلْتُنَّ</td>
                      <td className="border p-2 font-arabic">كَتَبْتُنَّ</td>
                    </tr>
                    <tr>
                      <td className="border p-2">First</td>
                      <td className="border p-2">Both</td>
                      <td className="border p-2">Singular</td>
                      <td className="border p-2 font-arabic">أَنَا</td>
                      <td className="border p-2">I</td>
                      <td className="border p-2 font-arabic">فَعَلْتُ</td>
                      <td className="border p-2 font-arabic">كَتَبْتُ</td>
                    </tr>
                    <tr>
                      <td className="border p-2">First</td>
                      <td className="border p-2">Both</td>
                      <td className="border p-2">Plural</td>
                      <td className="border p-2 font-arabic">نَحْنُ</td>
                      <td className="border p-2">We</td>
                      <td className="border p-2 font-arabic">فَعَلْنَا</td>
                      <td className="border p-2 font-arabic">كَتَبْنَا</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="examples">
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-medium mb-3">Visual Pattern Examples</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-md border">
                    <h4 className="text-sm font-medium mb-2">Third Person Masculine Singular (He)</h4>
                    <div className="flex justify-center items-center space-x-2">
                      <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-center font-arabic">
                        كَتَبَ
                      </div>
                    </div>
                    <p className="text-xs text-center mt-2">Root only - no prefix or suffix</p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <h4 className="text-sm font-medium mb-2">Third Person Feminine Singular (She)</h4>
                    <div className="flex justify-center items-center space-x-2">
                      <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-center font-arabic">
                        كَتَبَ
                      </div>
                      <span className="text-sm">+</span>
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-center font-arabic">تْ</div>
                    </div>
                    <p className="text-xs text-center mt-2">Root + feminine suffix</p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <h4 className="text-sm font-medium mb-2">Second Person Masculine Singular (You)</h4>
                    <div className="flex justify-center items-center space-x-2">
                      <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-center font-arabic">
                        كَتَبْ
                      </div>
                      <span className="text-sm">+</span>
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-center font-arabic">تَ</div>
                    </div>
                    <p className="text-xs text-center mt-2">Root + second person suffix</p>
                  </div>

                  <div className="bg-white p-3 rounded-md border">
                    <h4 className="text-sm font-medium mb-2">First Person Singular (I)</h4>
                    <div className="flex justify-center items-center space-x-2">
                      <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-center font-arabic">
                        كَتَبْ
                      </div>
                      <span className="text-sm">+</span>
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md text-center font-arabic">تُ</div>
                    </div>
                    <p className="text-xs text-center mt-2">Root + first person suffix</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-medium mb-3">Pattern Transformation</h3>

                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-white p-3 rounded-md border w-full max-w-md">
                    <h4 className="text-sm font-medium mb-2 text-center">Base Form to Conjugated Forms</h4>

                    <div className="flex justify-center items-center mb-4">
                      <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-md text-center font-arabic text-xl">
                        كَتَبَ
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      <div className="bg-blue-50 border border-blue-200 px-2 py-1 rounded-md text-center font-arabic">
                        كَتَبَتْ
                      </div>
                      <div className="bg-blue-50 border border-blue-200 px-2 py-1 rounded-md text-center font-arabic">
                        كَتَبَا
                      </div>
                      <div className="bg-blue-50 border border-blue-200 px-2 py-1 rounded-md text-center font-arabic">
                        كَتَبُوا
                      </div>
                      <div className="bg-blue-50 border border-blue-200 px-2 py-1 rounded-md text-center font-arabic">
                        كَتَبْتَ
                      </div>
                      <div className="bg-blue-50 border border-blue-200 px-2 py-1 rounded-md text-center font-arabic">
                        كَتَبْتُ
                      </div>
                      <div className="bg-blue-50 border border-blue-200 px-2 py-1 rounded-md text-center font-arabic">
                        كَتَبْنَا
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
