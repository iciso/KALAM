"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { VerbConjugation, ConjugationForm, VerbExample } from "@/types/conjugation"
import { conjugationService } from "@/services/conjugation-service"
import { AlertCircle, CheckCircle, HelpCircle, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { VerbPatternVisualizer } from "@/components/verb-pattern-visualizer"
import { ConjugationPatternGuide } from "@/components/conjugation-pattern-guide"
import { VerbTransformationAnimator } from "@/components/verb-transformation-animator"
import { ConjugationProcessAnimator } from "@/components/conjugation-process-animator"
import { QuranicExamplesViewer } from "@/components/quranic-examples-viewer"

export function ConjugationBuilder() {
  const [selectedVerb, setSelectedVerb] = useState<VerbConjugation>(conjugationService.getConjugations()[0])
  const [currentFormIndex, setCurrentFormIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [completedForms, setCompletedForms] = useState<number[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [showPatternGuide, setShowPatternGuide] = useState(false)
  const [activeTab, setActiveTab] = useState<"practice" | "animation" | "examples" | "reference">("practice")
  const [formExamples, setFormExamples] = useState<VerbExample[]>([])

  const currentForm = selectedVerb.forms[currentFormIndex]

  // Load examples for the current form
  const loadExamplesForCurrentForm = () => {
    const examples = conjugationService.getExamplesForForm(
      selectedVerb.root.id,
      selectedVerb.tense,
      currentForm.person,
      currentForm.gender,
      currentForm.number,
    )
    setFormExamples(examples)
  }

  const handleVerbChange = (verbId: string) => {
    const newVerb = conjugationService.getConjugations().find((v) => v.root.id === verbId)
    if (newVerb) {
      setSelectedVerb(newVerb)
      setCurrentFormIndex(0)
      setUserAnswer("")
      setIsCorrect(null)
      setShowHint(false)
      setCompletedForms([])

      // Load examples for the new verb's current form
      setTimeout(() => {
        loadExamplesForCurrentForm()
      }, 0)
    }
  }

  const checkAnswer = () => {
    const correct = conjugationService.checkAnswer(
      selectedVerb.root.id,
      selectedVerb.tense,
      currentForm.person,
      currentForm.gender,
      currentForm.number,
      userAnswer,
    )
    setIsCorrect(correct)

    if (correct && !completedForms.includes(currentFormIndex)) {
      setCompletedForms([...completedForms, currentFormIndex])
    }

    // Load examples when checking an answer
    loadExamplesForCurrentForm()
  }

  const nextForm = () => {
    const nextIndex = (currentFormIndex + 1) % selectedVerb.forms.length
    setCurrentFormIndex(nextIndex)
    setUserAnswer("")
    setIsCorrect(null)
    setShowHint(false)

    // Load examples for the next form
    setTimeout(() => {
      loadExamplesForCurrentForm()
    }, 0)
  }

  const resetForm = () => {
    setUserAnswer("")
    setIsCorrect(null)
    setShowHint(false)
  }

  const getFormDescription = (form: ConjugationForm) => {
    return `${form.person} person ${form.gender} ${form.number}`
  }

  const getProgressPercentage = () => {
    return Math.round((completedForms.length / selectedVerb.forms.length) * 100)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl">Conjugation Builder</CardTitle>
          <CardDescription>Learn to conjugate Arabic verbs from the Quran - Phase 1: Past Tense Basics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Label htmlFor="verb-select">Select a verb to practice:</Label>
            <div className="flex gap-4 mt-2">
              {conjugationService.getConjugations().map((conj) => (
                <Button
                  key={conj.root.id}
                  variant={selectedVerb.root.id === conj.root.id ? "default" : "outline"}
                  onClick={() => handleVerbChange(conj.root.id)}
                >
                  <span className="font-arabic mr-2">{conj.root.letters}</span>
                  <span>({conj.root.meaning})</span>
                </Button>
              ))}
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "practice" | "animation" | "examples" | "reference")}
          >
            <TabsList className="mb-4">
              <TabsTrigger value="practice">Practice</TabsTrigger>
              <TabsTrigger value="animation">Animation</TabsTrigger>
              <TabsTrigger value="examples">Quranic Examples</TabsTrigger>
              <TabsTrigger value="reference">Reference</TabsTrigger>
            </TabsList>

            <TabsContent value="practice">
              <div className="bg-muted p-4 rounded-md mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Root: <span className="font-arabic text-xl">{selectedVerb.root.letters}</span> (
                      {selectedVerb.root.transliteration})
                    </h3>
                    <p>Meaning: {selectedVerb.root.meaning}</p>
                  </div>
                  <div>
                    <Button variant="outline" size="sm" onClick={() => setShowExplanation(!showExplanation)}>
                      <HelpCircle className="h-4 w-4 mr-1" />
                      Pattern Help
                    </Button>
                  </div>
                </div>

                {showExplanation && (
                  <Alert className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Conjugation Pattern</AlertTitle>
                    <AlertDescription>
                      {conjugationService.getPatternExplanation(selectedVerb.root.id, selectedVerb.tense)}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Current Form to Practice:</h4>
                    <div className="bg-card p-3 rounded-md">
                      <p className="text-sm text-muted-foreground mb-1">
                        {getFormDescription(currentForm)} - {currentForm.translation}
                      </p>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="answer">Your answer:</Label>
                        <div className="relative flex-1">
                          <Input
                            id="answer"
                            dir="rtl"
                            className="font-arabic text-xl"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Type the Arabic..."
                          />
                          {isCorrect !== null && (
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                              {isCorrect ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                              ) : (
                                <AlertCircle className="h-5 w-5 text-red-500" />
                              )}
                            </div>
                          )}
                        </div>
                        <Button onClick={checkAnswer}>Check</Button>
                      </div>

                      {isCorrect === false && (
                        <div className="mt-2">
                          <Button variant="outline" size="sm" onClick={() => setShowHint(true)}>
                            Show Hint
                          </Button>
                          {showHint && (
                            <p className="mt-1 text-sm">
                              Correct answer: <span className="font-arabic text-lg">{currentForm.arabicText}</span> (
                              {currentForm.transliteration})
                            </p>
                          )}
                        </div>
                      )}
                      {isCorrect !== null && (
                        <VerbPatternVisualizer root={selectedVerb.root} form={currentForm} tense={selectedVerb.tense} />
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Example from Quran:</h4>
                    <div className="bg-card p-3 rounded-md">
                      {selectedVerb.root.examples.length > 0 ? (
                        <div>
                          <p className="font-arabic text-lg mb-2 text-right leading-relaxed" dir="rtl">
                            {selectedVerb.root.examples[0].arabicText}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {selectedVerb.root.examples[0].translationText}
                          </p>
                          <p className="text-xs mt-2">
                            Surah {selectedVerb.root.examples[0].surahNumber}:{selectedVerb.root.examples[0].ayahNumber}
                          </p>
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 mt-1"
                            onClick={() => {
                              loadExamplesForCurrentForm()
                              setActiveTab("examples")
                            }}
                          >
                            View more examples
                          </Button>
                        </div>
                      ) : (
                        <p>No examples available.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div
                    className="bg-emerald-600 h-2.5 rounded-full"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1">
                  {completedForms.length} of {selectedVerb.forms.length} forms mastered ({getProgressPercentage()}%)
                </p>
              </div>
            </TabsContent>

            <TabsContent value="animation">
              <div className="bg-muted p-4 rounded-md mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Animating: <span className="font-arabic text-xl">{currentForm.arabicText}</span>
                    </h3>
                    <p>
                      {getFormDescription(currentForm)} - {currentForm.translation}
                    </p>
                  </div>
                </div>

                <VerbTransformationAnimator root={selectedVerb.root} form={currentForm} tense={selectedVerb.tense} />

                <ConjugationProcessAnimator root={selectedVerb.root} form={currentForm} tense={selectedVerb.tense} />
              </div>
            </TabsContent>

            <TabsContent value="examples">
              <div className="bg-muted p-4 rounded-md mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Quranic Examples for: <span className="font-arabic text-xl">{currentForm.arabicText}</span>
                    </h3>
                    <p>
                      {getFormDescription(currentForm)} - {currentForm.translation}
                    </p>
                  </div>
                </div>

                <QuranicExamplesViewer examples={formExamples} verbForm={currentForm.arabicText} />

                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Seeing the verb in context helps reinforce your understanding of how it's used in the Quran. Pay
                    attention to the surrounding words and the overall meaning of the verse.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reference">
              <div className="bg-muted p-4 rounded-md mb-6">
                <ConjugationPatternGuide tense={selectedVerb.tense} />

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Conjugation Table</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border p-2 text-left">Person</th>
                          <th className="border p-2 text-left">Gender</th>
                          <th className="border p-2 text-left">Number</th>
                          <th className="border p-2 text-right">Arabic</th>
                          <th className="border p-2 text-left">Transliteration</th>
                          <th className="border p-2 text-left">Translation</th>
                          <th className="border p-2 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedVerb.forms.map((form, index) => (
                          <tr key={index} className={completedForms.includes(index) ? "bg-emerald-50" : ""}>
                            <td className="border p-2">{form.person}</td>
                            <td className="border p-2">{form.gender}</td>
                            <td className="border p-2">{form.number}</td>
                            <td className="border p-2 text-right font-arabic text-lg">{form.arabicText}</td>
                            <td className="border p-2">{form.transliteration}</td>
                            <td className="border p-2">{form.translation}</td>
                            <td className="border p-2 text-center">
                              {completedForms.includes(index) ? (
                                <CheckCircle className="h-5 w-5 text-green-500 inline" />
                              ) : (
                                <span className="text-muted-foreground">Not practiced</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={resetForm}>
            <RefreshCw className="h-4 w-4 mr-1" />
            Reset
          </Button>
          <Button onClick={nextForm}>Next Form</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
