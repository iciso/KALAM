"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Grid3X3, List, Info } from "lucide-react"
import { divineNames, type DivineName } from "@/data/divine-names-data"
import { motion } from "framer-motion"

export default function DivineNamesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredNames, setFilteredNames] = useState(divineNames)
  const [selectedName, setSelectedName] = useState<DivineName | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  useEffect(() => {
    const filtered = divineNames.filter(
      (name) =>
        name.arabic.includes(searchTerm) ||
        name.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        name.transliteration.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredNames(filtered)
  }, [searchTerm])

  const handleNameClick = (name: DivineName) => {
    setSelectedName(name)
  }

  const closeDetails = () => {
    setSelectedName(null)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">The 99 Names of Allah</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore the beautiful names of Allah (Asma ul-Husna) and their meanings. These names reflect the attributes of
          Allah as mentioned in the Quran and Hadith.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search by name or meaning..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            title="Grid View"
          >
            <Grid3X3 size={18} />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            title="List View"
          >
            <List size={18} />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Names</TabsTrigger>
          <TabsTrigger value="mercy">Names of Mercy</TabsTrigger>
          <TabsTrigger value="power">Names of Power</TabsTrigger>
          <TabsTrigger value="wisdom">Names of Wisdom</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredNames.map((name) => (
                <motion.div
                  key={name.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNameClick(name)}
                >
                  <Card className="cursor-pointer hover:border-emerald-500 transition-colors">
                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-center font-arabic text-2xl">{name.arabic}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-2">
                      <p className="font-semibold">{name.transliteration}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{name.english}</p>
                    </CardContent>
                    <CardFooter className="pt-0 pb-4 justify-center">
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <Info size={16} className="mr-1" /> Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredNames.map((name) => (
                <motion.div
                  key={name.id}
                  whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                  className="rounded-lg p-3 cursor-pointer"
                  onClick={() => handleNameClick(name)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {name.id}
                      </div>
                      <div>
                        <p className="font-arabic text-xl">{name.arabic}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{name.transliteration}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{name.english}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="mercy">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
            Names that emphasize Allah's mercy, compassion, and forgiveness.
          </p>
          {/* Filter names related to mercy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {divineNames
              .filter((name) =>
                ["الرحمن", "الرحيم", "الغفار", "التواب", "العفو", "الرؤوف", "الودود"].includes(name.arabic),
              )
              .map((name) => (
                <motion.div
                  key={name.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNameClick(name)}
                >
                  <Card className="cursor-pointer hover:border-emerald-500 transition-colors">
                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-center font-arabic text-2xl">{name.arabic}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-2">
                      <p className="font-semibold">{name.transliteration}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{name.english}</p>
                    </CardContent>
                    <CardFooter className="pt-0 pb-4 justify-center">
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <Info size={16} className="mr-1" /> Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="power">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
            Names that emphasize Allah's power, might, and sovereignty.
          </p>
          {/* Filter names related to power */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {divineNames
              .filter((name) =>
                ["العزيز", "القوي", "المتين", "القهار", "الجبار", "المتكبر", "الملك"].includes(name.arabic),
              )
              .map((name) => (
                <motion.div
                  key={name.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNameClick(name)}
                >
                  <Card className="cursor-pointer hover:border-emerald-500 transition-colors">
                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-center font-arabic text-2xl">{name.arabic}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-2">
                      <p className="font-semibold">{name.transliteration}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{name.english}</p>
                    </CardContent>
                    <CardFooter className="pt-0 pb-4 justify-center">
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <Info size={16} className="mr-1" /> Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="wisdom">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
            Names that emphasize Allah's wisdom, knowledge, and guidance.
          </p>
          {/* Filter names related to wisdom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {divineNames
              .filter((name) => ["العليم", "الحكيم", "الخبير", "البصير", "السميع", "الهادي"].includes(name.arabic))
              .map((name) => (
                <motion.div
                  key={name.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNameClick(name)}
                >
                  <Card className="cursor-pointer hover:border-emerald-500 transition-colors">
                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-center font-arabic text-2xl">{name.arabic}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-2">
                      <p className="font-semibold">{name.transliteration}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{name.english}</p>
                    </CardContent>
                    <CardFooter className="pt-0 pb-4 justify-center">
                      <Button variant="ghost" size="sm" className="text-emerald-600">
                        <Info size={16} className="mr-1" /> Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Name Details Modal */}
      {selectedName && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="font-arabic text-4xl mb-2">{selectedName.arabic}</h2>
                <p className="text-xl font-semibold">{selectedName.transliteration}</p>
                <p className="text-lg text-gray-600 dark:text-gray-300">{selectedName.english}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Meaning</h3>
                  <p className="text-gray-700 dark:text-gray-300">{selectedName.meaning}</p>
                </div>

                {selectedName.quranReference && (
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quranic Reference</h3>
                    <p className="text-gray-700 dark:text-gray-300">{selectedName.quranReference}</p>
                  </div>
                )}

                {selectedName.benefits && (
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Benefits of Recitation</h3>
                    <p className="text-gray-700 dark:text-gray-300">{selectedName.benefits}</p>
                  </div>
                )}
              </div>

              <div className="mt-8 text-center">
                <Button onClick={closeDetails}>Close</Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {filteredNames.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">No names found matching your search.</p>
        </div>
      )}
    </div>
  )
}
