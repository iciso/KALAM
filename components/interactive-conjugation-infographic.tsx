"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tense } from "@/types/conjugation"
import { conjugationService } from "@/services/conjugation-service"
import { Check, X, HelpCircle } from "lucide-react"

interface InteractiveConjugationInfographicProps {
  initialRootId?: string
}

export function InteractiveConjugationInfographic({ initialRootId }: InteractiveConjugationInfographicProps) {
  const conjugations = conjugationService.getConjugations()
  const [selectedRootId, setSelectedRootId] = useState(initialRootId || conjugations[0].root.id)
  const [selectedTense, setSelectedTense] = useState<Tense>(Tense.Past)
  const [activeCell, setActiveCell] = useState<string | null>(null)
  const [showAnswers, setShowAnswers] = useState(false)
  const [userAnswers, setUserAnswers] = useState<Record<string, boolean>>({})

  const selectedConjugation = conjugationService.getConjugation(selectedRootId, selectedTense)
  const root = selectedConjugation?.root || conjugations[0].root

  // Group forms by person, gender, and number for the grid
  const getFormGrid = () => {
    if (!selectedConjugation) return []

    const grid = [
      // First row: 3rd person
      [
        // 3rd person masculine singular (he)
        selectedConjugation.forms.find(
          (form) => form.person === "third" && form.gender === "masculine" && form.number === "singular",
        ),
        // 3rd person masculine dual (they two m)
        selectedConjugation.forms.find(
          (form) => form.person === "third" && form.gender === "masculine" && form.number === "dual",
        ),
        // 3rd person masculine plural (they m)
        selectedConjugation.forms.find(
          (form) => form.person === "third" && form.gender === "masculine" && form.number === "plural",
        ),
      ],
      // Second row: 3rd person feminine
      [
        // 3rd person feminine singular (she)
        selectedConjugation.forms.find(
          (form) => form.person === "third" && form.gender === "feminine" && form.number === "singular",
        ),
        // 3rd person feminine dual (they two f)
        selectedConjugation.forms.find(
          (form) => form.person === "third" && form.gender === "feminine" && form.number === "dual",
        ),
        // 3rd person feminine plural (they f)
        selectedConjugation.forms.find(
          (form) => form.person === "third" && form.gender === "feminine" && form.number === "plural",
        ),
      ],
      // Third row: 2nd person masculine
      [
        // 2nd person masculine singular (you m)
        selectedConjugation.forms.find(
          (form) => form.person === "second" && form.gender === "masculine" && form.number === "singular",
        ),
        // 2nd person dual (you two)
        selectedConjugation.forms.find((form) => form.person === "second" && form.number === "dual"),
        // 2nd person masculine plural (you all m)
        selectedConjugation.forms.find(
          (form) => form.person === "second" && form.gender === "masculine" && form.number === "plural",
        ),
      ],
      // Fourth row: 2nd person feminine
      [
        // 2nd person feminine singular (you f)
        selectedConjugation.forms.find(
          (form) => form.person === "second" && form.gender === "feminine" && form.number === "singular",
        ),
        null, // Empty cell for alignment
        // 2nd person feminine plural (you all f)
        selectedConjugation.forms.find(
          (form) => form.person === "second" && form.gender === "feminine" && form.number === "plural",
        ),
      ],
      // Fifth row: 1st person
      [
        // 1st person singular (I)
        selectedConjugation.forms.find((form) => form.person === "first" && form.number === "singular"),
        null, // Empty cell for alignment
        // 1st person plural (we)
        selectedConjugation.forms.find((form) => form.person === "first" && form.number === "plural"),
      ],
    ]

    return grid
  }

  const formGrid = getFormGrid()

  const handleCellClick = (cellId: string) => {
    setActiveCell(activeCell === cellId ? null : cellId)
  }

  const checkAnswer = (formId: string, userAnswer: boolean) => {
    setUserAnswers({
      ...userAnswers,
      [formId]: userAnswer,
    })
  }

  const resetAnswers = () => {
    setUserAnswers({})
    setShowAnswers(false)
  }

  const getPatternType = (form: any) => {
    if (!form) return ""

    if (form.person === "third" && form.gender === "masculine" && form.number === "singular") {
      return "base"
    }

    if (form.person === "third") {
      if (form.gender === "feminine" && form.number === "singular") {
        return "suffix-only"
      }
      return "suffix-only"
    }

    if (form.person === "second") {
      return "prefix-suffix"
    }

    if (form.person === "first") {
      if (form.number === "singular") {
        return "prefix-suffix"
      }
      return "prefix-suffix"
    }

    return ""
  }

  const getPatternExplanation = (form: any) => {
    if (!form) return ""

    if (form.person === "third" && form.gender === "masculine" && form.number === "singular") {
      return "Base form - no affixes"
    }

    if (form.person === "third" && form.gender === "feminine" && form.number === "singular") {
      return "Add suffix ـَتْ (at)"
    }

    if (form.person === "third" && form.gender === "masculine" && form.number === "dual") {
      return "Add suffix ـَا (ā)"
    }

    if (form.person === "third" && form.gender === "feminine" && form.number === "dual") {
      return "Add suffix ـَتَا (atā)"
    }

    if (form.person === "third" && form.gender === "masculine" && form.number === "plural") {
      return "Add suffix ـُوا (ū)"
    }

    if (form.person === "third" && form.gender === "feminine" && form.number === "plural") {
      return "Add suffix ـْنَ (na)"
    }

    if (form.person === "second" && form.gender === "masculine" && form.number === "singular") {
      return "Add prefix تَـ (ta) and suffix ـْتَ (ta)"
    }

    if (form.person === "second" && form.gender === "feminine" && form.number === "singular") {
      return "Add prefix تَـ (ta) and suffix ـْتِ (ti)"
    }

    if (form.person === "second" && form.number === "dual") {
      return "Add prefix تَـ (ta) and suffix ـْتُمَا (tumā)"
    }

    if (form.person === "second" && form.gender === "masculine" && form.number === "plural") {
      return "Add prefix تَـ (ta) and suffix ـْتُمْ (tum)"
    }

    if (form.person === "second" && form.gender === "feminine" && form.number === "plural") {
      return "Add prefix تَـ (ta) and suffix ـْتُنَّ (tunna)"
    }

    if (form.person === "first" && form.number === "singular") {
      return "Add prefix أَـ (a) and suffix ـْتُ (tu)"
    }

    if (form.person === "first" && form.number === "plural") {
      return "Add prefix نَـ (na) and suffix ـْنَا (nā)"
    }

    return ""
  }

  const renderColorCodedForm = (form: any) => {
    if (!form) return null

    const patternType = getPatternType(form)
    const arabicText = form.arabicText

    if (patternType === "base") {
      return <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">{arabicText}</span>
    }

    if (patternType === "suffix-only") {
      // For simplicity, we'll assume the last letter or two is the suffix
      // In a real app, this would be more sophisticated
      const rootPart = arabicText.slice(0, 3)
      const suffixPart = arabicText.slice(3)

      return (
        <div className="flex flex-row-reverse items-center gap-1">
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md">{suffixPart}</span>
          <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">{rootPart}</span>
        </div>
      )
    }

    if (patternType === "prefix-suffix") {
      // For simplicity, we'll assume the first letter is the prefix and the last letter is the suffix
      // In a real app, this would be more sophisticated
      const prefixPart = arabicText.slice(0, 1)
      const rootPart = arabicText.slice(1, 4)
      const suffixPart = arabicText.slice(4)

      return (
        <div className="flex flex-row-reverse items-center gap-1">
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md">{suffixPart}</span>
          <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">{rootPart}</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md">{prefixPart}</span>
        </div>
      )
    }

    return <span>{arabicText}</span>
  }

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Interactive Conjugation Map</h3>

          <div className="flex flex-wrap gap-3 mb-4">
            <select
              className="px-3 py-2 border rounded-md"
              value={selectedRootId}
              onChange={(e) => {
                setSelectedRootId(e.target.value)
                resetAnswers()
              }}
            >
              {conjugations.map((conj) => (
                <option key={conj.root.id} value={conj.root.id}>
                  {conj.root.letters} ({conj.root.transliteration}) - {conj.root.meaning}
                </option>
              ))}
            </select>

            <div className="flex">
              <Button
                variant={selectedTense === Tense.Past ? "default" : "outline"}
                onClick={() => {
                  setSelectedTense(Tense.Past)
                  resetAnswers()
                }}
                className="rounded-r-none"
              >
                Past Tense
              </Button>
              <Button
                variant={selectedTense === Tense.Present ? "default" : "outline"}
                onClick={() => {
                  setSelectedTense(Tense.Present)
                  resetAnswers()
                }}
                className="rounded-l-none"
                disabled
              >
                Present Tense (Coming Soon)
              </Button>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold">
                  Root: <span className="font-arabic">{root.letters}</span> ({root.transliteration})
                </h4>
                <p className="text-sm text-muted-foreground">Meaning: {root.meaning}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setShowAnswers(!showAnswers)}>
                  {showAnswers ? "Hide Answers" : "Show Answers"}
                </Button>
                <Button variant="outline" size="sm" onClick={resetAnswers}>
                  Reset
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2 text-center">Person</th>
                    <th className="border p-2 text-center">Singular</th>
                    <th className="border p-2 text-center">Dual</th>
                    <th className="border p-2 text-center">Plural</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Third Person Masculine */}
                  <tr>
                    <td className="border p-2 bg-gray-50">
                      <div className="font-medium">Third Person</div>
                      <div className="text-sm text-muted-foreground">Masculine (He/They)</div>
                    </td>
                    {formGrid[0].map((form, index) => (
                      <td
                        key={`3m-${index}`}
                        className={`border p-2 text-center cursor-pointer transition-colors ${
                          activeCell === `3m-${index}` ? "bg-blue-50" : ""
                        }`}
                        onClick={() => form && handleCellClick(`3m-${index}`)}
                      >
                        {form && (
                          <div className="flex flex-col items-center">
                            <div className="font-arabic text-xl mb-1 dir-rtl">
                              {showAnswers ? renderColorCodedForm(form) : form.arabicText}
                            </div>
                            <div className="text-xs">{form.transliteration}</div>
                            <div className="text-xs text-muted-foreground">{form.translation}</div>

                            {activeCell === `3m-${index}` && (
                              <div className="mt-2 p-2 bg-blue-50 rounded-md text-sm">
                                <p>{getPatternExplanation(form)}</p>
                                <div className="flex justify-center gap-2 mt-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`3m-${index}`, true)
                                    }}
                                  >
                                    <Check className="h-4 w-4 mr-1" /> I know this
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`3m-${index}`, false)
                                    }}
                                  >
                                    <X className="h-4 w-4 mr-1" /> Still learning
                                  </Button>
                                </div>
                              </div>
                            )}

                            {userAnswers[`3m-${index}`] !== undefined && !activeCell && (
                              <div className="mt-1">
                                {userAnswers[`3m-${index}`] ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <HelpCircle className="h-4 w-4 text-amber-500" />
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Third Person Feminine */}
                  <tr>
                    <td className="border p-2 bg-gray-50">
                      <div className="font-medium">Third Person</div>
                      <div className="text-sm text-muted-foreground">Feminine (She/They)</div>
                    </td>
                    {formGrid[1].map((form, index) => (
                      <td
                        key={`3f-${index}`}
                        className={`border p-2 text-center cursor-pointer transition-colors ${
                          activeCell === `3f-${index}` ? "bg-blue-50" : ""
                        }`}
                        onClick={() => form && handleCellClick(`3f-${index}`)}
                      >
                        {form && (
                          <div className="flex flex-col items-center">
                            <div className="font-arabic text-xl mb-1 dir-rtl">
                              {showAnswers ? renderColorCodedForm(form) : form.arabicText}
                            </div>
                            <div className="text-xs">{form.transliteration}</div>
                            <div className="text-xs text-muted-foreground">{form.translation}</div>

                            {activeCell === `3f-${index}` && (
                              <div className="mt-2 p-2 bg-blue-50 rounded-md text-sm">
                                <p>{getPatternExplanation(form)}</p>
                                <div className="flex justify-center gap-2 mt-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`3f-${index}`, true)
                                    }}
                                  >
                                    <Check className="h-4 w-4 mr-1" /> I know this
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`3f-${index}`, false)
                                    }}
                                  >
                                    <X className="h-4 w-4 mr-1" /> Still learning
                                  </Button>
                                </div>
                              </div>
                            )}

                            {userAnswers[`3f-${index}`] !== undefined && !activeCell && (
                              <div className="mt-1">
                                {userAnswers[`3f-${index}`] ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <HelpCircle className="h-4 w-4 text-amber-500" />
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Second Person Masculine */}
                  <tr>
                    <td className="border p-2 bg-gray-50">
                      <div className="font-medium">Second Person</div>
                      <div className="text-sm text-muted-foreground">Masculine (You)</div>
                    </td>
                    {formGrid[2].map((form, index) => (
                      <td
                        key={`2m-${index}`}
                        className={`border p-2 text-center cursor-pointer transition-colors ${
                          activeCell === `2m-${index}` ? "bg-blue-50" : ""
                        }`}
                        onClick={() => form && handleCellClick(`2m-${index}`)}
                      >
                        {form && (
                          <div className="flex flex-col items-center">
                            <div className="font-arabic text-xl mb-1 dir-rtl">
                              {showAnswers ? renderColorCodedForm(form) : form.arabicText}
                            </div>
                            <div className="text-xs">{form.transliteration}</div>
                            <div className="text-xs text-muted-foreground">{form.translation}</div>

                            {activeCell === `2m-${index}` && (
                              <div className="mt-2 p-2 bg-blue-50 rounded-md text-sm">
                                <p>{getPatternExplanation(form)}</p>
                                <div className="flex justify-center gap-2 mt-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`2m-${index}`, true)
                                    }}
                                  >
                                    <Check className="h-4 w-4 mr-1" /> I know this
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`2m-${index}`, false)
                                    }}
                                  >
                                    <X className="h-4 w-4 mr-1" /> Still learning
                                  </Button>
                                </div>
                              </div>
                            )}

                            {userAnswers[`2m-${index}`] !== undefined && !activeCell && (
                              <div className="mt-1">
                                {userAnswers[`2m-${index}`] ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <HelpCircle className="h-4 w-4 text-amber-500" />
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Second Person Feminine */}
                  <tr>
                    <td className="border p-2 bg-gray-50">
                      <div className="font-medium">Second Person</div>
                      <div className="text-sm text-muted-foreground">Feminine (You)</div>
                    </td>
                    {formGrid[3].map((form, index) => (
                      <td
                        key={`2f-${index}`}
                        className={`border p-2 text-center cursor-pointer transition-colors ${
                          activeCell === `2f-${index}` ? "bg-blue-50" : ""
                        } ${!form ? "bg-gray-50" : ""}`}
                        onClick={() => form && handleCellClick(`2f-${index}`)}
                      >
                        {form && (
                          <div className="flex flex-col items-center">
                            <div className="font-arabic text-xl mb-1 dir-rtl">
                              {showAnswers ? renderColorCodedForm(form) : form.arabicText}
                            </div>
                            <div className="text-xs">{form.transliteration}</div>
                            <div className="text-xs text-muted-foreground">{form.translation}</div>

                            {activeCell === `2f-${index}` && (
                              <div className="mt-2 p-2 bg-blue-50 rounded-md text-sm">
                                <p>{getPatternExplanation(form)}</p>
                                <div className="flex justify-center gap-2 mt-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`2f-${index}`, true)
                                    }}
                                  >
                                    <Check className="h-4 w-4 mr-1" /> I know this
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`2f-${index}`, false)
                                    }}
                                  >
                                    <X className="h-4 w-4 mr-1" /> Still learning
                                  </Button>
                                </div>
                              </div>
                            )}

                            {userAnswers[`2f-${index}`] !== undefined && !activeCell && (
                              <div className="mt-1">
                                {userAnswers[`2f-${index}`] ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <HelpCircle className="h-4 w-4 text-amber-500" />
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* First Person */}
                  <tr>
                    <td className="border p-2 bg-gray-50">
                      <div className="font-medium">First Person</div>
                      <div className="text-sm text-muted-foreground">(I/We)</div>
                    </td>
                    {formGrid[4].map((form, index) => (
                      <td
                        key={`1-${index}`}
                        className={`border p-2 text-center cursor-pointer transition-colors ${
                          activeCell === `1-${index}` ? "bg-blue-50" : ""
                        } ${!form ? "bg-gray-50" : ""}`}
                        onClick={() => form && handleCellClick(`1-${index}`)}
                      >
                        {form && (
                          <div className="flex flex-col items-center">
                            <div className="font-arabic text-xl mb-1 dir-rtl">
                              {showAnswers ? renderColorCodedForm(form) : form.arabicText}
                            </div>
                            <div className="text-xs">{form.transliteration}</div>
                            <div className="text-xs text-muted-foreground">{form.translation}</div>

                            {activeCell === `1-${index}` && (
                              <div className="mt-2 p-2 bg-blue-50 rounded-md text-sm">
                                <p>{getPatternExplanation(form)}</p>
                                <div className="flex justify-center gap-2 mt-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`1-${index}`, true)
                                    }}
                                  >
                                    <Check className="h-4 w-4 mr-1" /> I know this
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      checkAnswer(`1-${index}`, false)
                                    }}
                                  >
                                    <X className="h-4 w-4 mr-1" /> Still learning
                                  </Button>
                                </div>
                              </div>
                            )}

                            {userAnswers[`1-${index}`] !== undefined && !activeCell && (
                              <div className="mt-1">
                                {userAnswers[`1-${index}`] ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <HelpCircle className="h-4 w-4 text-amber-500" />
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-medium mb-2">Pattern Legend</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-emerald-100 rounded-sm mr-2"></span>
                <span>Root Letters</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-100 rounded-sm mr-2"></span>
                <span>Prefixes</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-amber-100 rounded-sm mr-2"></span>
                <span>Suffixes</span>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-medium mb-1">Learning Tips:</h5>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Click on any cell to see pattern explanations</li>
                <li>Mark forms you know to track your progress</li>
                <li>Use "Show Answers" to see color-coded patterns</li>
                <li>Practice with different roots to reinforce patterns</li>
              </ul>
            </div>
          </div>
        </div>

        <Tabs defaultValue="patterns">
          <TabsList className="mb-4">
            <TabsTrigger value="patterns">Pattern Overview</TabsTrigger>
            <TabsTrigger value="mnemonics">Memory Aids</TabsTrigger>
            <TabsTrigger value="practice">Quick Practice</TabsTrigger>
          </TabsList>

          <TabsContent value="patterns">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Third Person Patterns</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-24 text-sm">Masculine (He)</div>
                    <div className="font-arabic bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">فَعَلَ</div>
                    <div className="ml-2 text-sm text-muted-foreground">Base form</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-sm">Feminine (She)</div>
                    <div className="flex items-center">
                      <div className="font-arabic bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">فَعَلَ</div>
                      <span className="mx-1">+</span>
                      <div className="font-arabic bg-amber-100 text-amber-800 px-2 py-1 rounded-md">تْ</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-sm">Dual (They 2)</div>
                    <div className="flex items-center">
                      <div className="font-arabic bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">فَعَلَ</div>
                      <span className="mx-1">+</span>
                      <div className="font-arabic bg-amber-100 text-amber-800 px-2 py-1 rounded-md">ا</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-sm">Plural (They)</div>
                    <div className="flex items-center">
                      <div className="font-arabic bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">فَعَلَ</div>
                      <span className="mx-1">+</span>
                      <div className="font-arabic bg-amber-100 text-amber-800 px-2 py-1 rounded-md">وا</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Second Person Patterns</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-24 text-sm">You (m)</div>
                    <div className="flex items-center">
                      <div className="font-arabic bg-blue-100 text-blue-800 px-2 py-1 rounded-md">تَ</div>
                      <span className="mx-1">+</span>
                      <div className="font-arabic bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">فَعَلْ</div>
                      <span className="mx-1">+</span>
                      <div className="font-arabic bg-amber-100 text-amber-800 px-2 py-1 rounded-md">تَ</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-sm">You (f)</div>
                    <div className="flex items-center">
                      <div className="font-arabic bg-blue-100 text-blue-800 px-2 py-1 rounded-md">تَ</div>
                      <span className="mx-1">+</span>
                      <div className="font-arabic bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">فَعَلْ</div>
                      <span className="mx-1">+</span>
                      <div className="font-arabic bg-amber-100 text-amber-800 px-2 py-1 rounded-md">تِ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mnemonics">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-3">Memory Aids for Verb Patterns</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-sm">Third Person (He/She/They)</h5>
                  <p className="text-sm mt-1">
                    Think of the third person masculine singular as the "base form" - it's the simplest form with no
                    additions.
                  </p>
                  <p className="text-sm mt-1">
                    For feminine forms, remember "add <span className="font-arabic">ت</span> (t)" - this is consistent
                    across Arabic grammar.
                  </p>
                  <p className="text-sm mt-1">
                    For dual forms, think "add <span className="font-arabic">ا</span> (alif)" - the letter looks like
                    the number 1, and 1+1=2 (dual).
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-sm">Second Person (You)</h5>
                  <p className="text-sm mt-1">
                    All second person forms start with <span className="font-arabic">تَ</span> (ta) - think "T for Two"
                    (as in second person).
                  </p>
                  <p className="text-sm mt-1">
                    For masculine endings, remember they end with <span className="font-arabic">تَ</span> (ta) - the same
                    letter they start with.
                  </p>
                  <p className="text-sm mt-1">
                    For feminine endings, think "ee" sound (<span className="font-arabic">تِ</span>) - many feminine
                    markers in Arabic have this "ee" sound.
                  </p>
                </div>

                <div>
                  <h5 className="font-medium text-sm">First Person (I/We)</h5>
                  <p className="text-sm mt-1">
                    "I" forms start with <span className="font-arabic">أَ</span> (a) - think "A for I" (first letter of
                    alphabet = first person).
                  </p>
                  <p className="text-sm mt-1">
                    "We" forms start with <span className="font-arabic">نَ</span> (na) - think "N for numerous" (more
                    than one person).
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="practice">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-3">Quick Practice</h4>

              <p className="text-sm mb-4">
                Test your knowledge by matching the correct conjugation to each pronoun. Click on cells in the table
                above to practice specific forms.
              </p>

              <div className="flex justify-center">
                <Button>Start Quick Quiz</Button>
              </div>

              <div className="mt-4 text-sm text-center text-muted-foreground">
                <p>Coming soon: Flashcards, pattern drills, and more interactive exercises!</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
