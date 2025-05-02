"use client"

import { useState } from "react"
import { relatives, type Relative } from "@/data/mahram-game-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserIcon as Male, UserIcon as Female } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type PlayerGender = "male" | "female"
type TreeNode = {
  id: string
  name: string
  arabicName: string
  gender: "male" | "female"
  isMahram: boolean
  children?: TreeNode[]
  spouseId?: string
  level: number
  position: number
}

type FamilyTreeProps = {
  playerGender: PlayerGender
  onClose?: () => void
}

const FamilyTreeVisualizer = ({ playerGender, onClose }: FamilyTreeProps) => {
  const [viewMode, setViewMode] = useState<"tree" | "list">("tree")
  const [showArabic, setShowArabic] = useState(false)

  // Get Mahram status based on player gender
  const getMahramStatus = (relative: Relative): boolean => {
    return playerGender === "male" ? relative.isMahramToMale : relative.isMahramToFemale
  }

  // Build the family tree structure
  const buildFamilyTree = (): TreeNode[] => {
    // Create a map for quick lookup
    const relativeMap = new Map<string, Relative>()
    relatives.forEach((relative) => {
      relativeMap.set(relative.id, relative)
    })

    // Start with grandparents at the top
    const tree: TreeNode[] = []

    // Add paternal grandparents
    const paternalGrandpa = relativeMap.get("grandpa-paternal")
    const paternalGrandma = relativeMap.get("grandma-paternal")

    if (paternalGrandpa && paternalGrandma) {
      const grandpaNode: TreeNode = {
        id: paternalGrandpa.id,
        name: paternalGrandpa.name,
        arabicName: paternalGrandpa.arabicName,
        gender: paternalGrandpa.gender,
        isMahram: getMahramStatus(paternalGrandpa),
        level: 1,
        position: 1,
        spouseId: paternalGrandma.id,
        children: [],
      }

      const grandmaNode: TreeNode = {
        id: paternalGrandma.id,
        name: paternalGrandma.name,
        arabicName: paternalGrandma.arabicName,
        gender: paternalGrandma.gender,
        isMahram: getMahramStatus(paternalGrandma),
        level: 1,
        position: 2,
      }

      // Add father
      const father = relativeMap.get("father")
      const mother = relativeMap.get("mother")

      if (father && mother) {
        const fatherNode: TreeNode = {
          id: father.id,
          name: father.name,
          arabicName: father.arabicName,
          gender: father.gender,
          isMahram: getMahramStatus(father),
          level: 2,
          position: 1,
          spouseId: mother.id,
          children: [],
        }

        const motherNode: TreeNode = {
          id: mother.id,
          name: mother.name,
          arabicName: mother.arabicName,
          gender: mother.gender,
          isMahram: getMahramStatus(mother),
          level: 2,
          position: 2,
        }

        // Add siblings
        const brother = relativeMap.get("brother")
        const sister = relativeMap.get("sister")

        if (brother) {
          const brotherNode: TreeNode = {
            id: brother.id,
            name: brother.name,
            arabicName: brother.arabicName,
            gender: brother.gender,
            isMahram: getMahramStatus(brother),
            level: 3,
            position: 1,
          }
          fatherNode.children?.push(brotherNode)
        }

        // Add "Me" node
        const meNode: TreeNode = {
          id: "me",
          name: "Me",
          arabicName: "أنا",
          gender: playerGender,
          isMahram: true, // Self is always considered Mahram
          level: 3,
          position: 2,
          children: [],
        }
        fatherNode.children?.push(meNode)

        if (sister) {
          const sisterNode: TreeNode = {
            id: sister.id,
            name: sister.name,
            arabicName: sister.arabicName,
            gender: sister.gender,
            isMahram: getMahramStatus(sister),
            level: 3,
            position: 3,
          }
          fatherNode.children?.push(sisterNode)
        }

        // Add children to "Me"
        const son = relativeMap.get("son")
        const daughter = relativeMap.get("daughter")

        if (son) {
          const sonNode: TreeNode = {
            id: son.id,
            name: son.name,
            arabicName: son.arabicName,
            gender: son.gender,
            isMahram: getMahramStatus(son),
            level: 4,
            position: 1,
          }
          meNode.children?.push(sonNode)
        }

        if (daughter) {
          const daughterNode: TreeNode = {
            id: daughter.id,
            name: daughter.name,
            arabicName: daughter.arabicName,
            gender: daughter.gender,
            isMahram: getMahramStatus(daughter),
            level: 4,
            position: 2,
          }
          meNode.children?.push(daughterNode)
        }

        // Add paternal uncle and aunt
        const paternalUncle = relativeMap.get("uncle-paternal")
        const paternalAunt = relativeMap.get("aunty-paternal")

        if (paternalUncle) {
          const uncleNode: TreeNode = {
            id: paternalUncle.id,
            name: paternalUncle.name,
            arabicName: paternalUncle.arabicName,
            gender: paternalUncle.gender,
            isMahram: getMahramStatus(paternalUncle),
            level: 2,
            position: 3,
            children: [],
          }

          // Add male cousin
          const maleCousin = relativeMap.get("cousin-male")
          if (maleCousin) {
            const cousinNode: TreeNode = {
              id: maleCousin.id,
              name: maleCousin.name,
              arabicName: maleCousin.arabicName,
              gender: maleCousin.gender,
              isMahram: getMahramStatus(maleCousin),
              level: 3,
              position: 4,
            }
            uncleNode.children?.push(cousinNode)
          }

          grandpaNode.children?.push(uncleNode)
        }

        if (paternalAunt) {
          const auntNode: TreeNode = {
            id: paternalAunt.id,
            name: paternalAunt.name,
            arabicName: paternalAunt.arabicName,
            gender: paternalAunt.gender,
            isMahram: getMahramStatus(paternalAunt),
            level: 2,
            position: 4,
            children: [],
          }

          // Add female cousin
          const femaleCousin = relativeMap.get("cousin-female")
          if (femaleCousin) {
            const cousinNode: TreeNode = {
              id: femaleCousin.id,
              name: femaleCousin.name,
              arabicName: femaleCousin.arabicName,
              gender: femaleCousin.gender,
              isMahram: getMahramStatus(femaleCousin),
              level: 3,
              position: 5,
            }
            auntNode.children?.push(cousinNode)
          }

          grandpaNode.children?.push(auntNode)
        }

        grandpaNode.children?.push(fatherNode)
        tree.push(grandpaNode, grandmaNode, motherNode)
      }
    }

    // Add maternal grandparents
    const maternalGrandpa = relativeMap.get("grandpa-maternal")
    const maternalGrandma = relativeMap.get("grandma-maternal")

    if (maternalGrandpa && maternalGrandma) {
      const grandpaNode: TreeNode = {
        id: maternalGrandpa.id,
        name: maternalGrandpa.name,
        arabicName: maternalGrandpa.arabicName,
        gender: maternalGrandpa.gender,
        isMahram: getMahramStatus(maternalGrandpa),
        level: 1,
        position: 3,
        spouseId: maternalGrandma.id,
      }

      const grandmaNode: TreeNode = {
        id: maternalGrandma.id,
        name: maternalGrandma.name,
        arabicName: maternalGrandma.arabicName,
        gender: maternalGrandma.gender,
        isMahram: getMahramStatus(maternalGrandma),
        level: 1,
        position: 4,
      }

      tree.push(grandpaNode, grandmaNode)
    }

    return tree
  }

  const familyTree = buildFamilyTree()

  // Group nodes by level for rendering
  const nodesByLevel = new Map<number, TreeNode[]>()
  familyTree.forEach((node) => {
    if (!nodesByLevel.has(node.level)) {
      nodesByLevel.set(node.level, [])
    }
    nodesByLevel.get(node.level)?.push(node)

    // Add children to their respective levels
    const processChildren = (parentNode: TreeNode) => {
      if (parentNode.children && parentNode.children.length > 0) {
        parentNode.children.forEach((child) => {
          if (!nodesByLevel.has(child.level)) {
            nodesByLevel.set(child.level, [])
          }
          nodesByLevel.get(child.level)?.push(child)

          if (child.children && child.children.length > 0) {
            processChildren(child)
          }
        })
      }
    }

    processChildren(node)
  })

  // Sort levels and nodes within levels
  const sortedLevels = Array.from(nodesByLevel.keys()).sort((a, b) => a - b)
  sortedLevels.forEach((level) => {
    const nodes = nodesByLevel.get(level) || []
    nodes.sort((a, b) => a.position - b.position)
  })

  // Render a node in the tree
  const renderNode = (node: TreeNode) => {
    const bgColor =
      node.id === "me"
        ? playerGender === "male"
          ? "bg-blue-200"
          : "bg-pink-200"
        : node.gender === "male"
          ? "bg-blue-100"
          : "bg-pink-100"

    const borderColor =
      node.id === "me"
        ? playerGender === "male"
          ? "border-blue-500"
          : "border-pink-500"
        : node.isMahram
          ? "border-green-500"
          : "border-amber-500"

    return (
      <div
        key={node.id}
        className={`relative p-2 rounded-lg border-2 ${borderColor} ${bgColor} flex flex-col items-center min-w-[100px] mx-1`}
      >
        <div className="absolute top-0 right-0 -mt-2 -mr-2">
          <Badge variant={node.isMahram ? "success" : "warning"} className="text-xs">
            {node.isMahram ? "Mahram" : "Non-Mahram"}
          </Badge>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
            node.gender === "male" ? "bg-blue-200" : "bg-pink-200"
          }`}
        >
          {node.gender === "male" ? "👨" : "👩"}
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold">{node.name}</div>
          {showArabic && (
            <div className="text-xs font-arabic mt-1" dir="rtl">
              {node.arabicName}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Render the tree view
  const renderTreeView = () => {
    return (
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[800px]">
          {sortedLevels.map((level) => {
            const nodes = nodesByLevel.get(level) || []
            return (
              <div key={level} className="flex justify-center my-6 relative">
                {/* Draw connecting lines */}
                {level > 1 && (
                  <div className="absolute top-0 left-0 right-0 h-full -z-10">
                    {nodes.map((node) => {
                      // Find parent node
                      let parentNode: TreeNode | undefined
                      for (const [parentLevel, parentNodes] of nodesByLevel.entries()) {
                        if (parentLevel < level) {
                          for (const parent of parentNodes) {
                            if (parent.children?.some((child) => child.id === node.id)) {
                              parentNode = parent
                              break
                            }
                          }
                        }
                        if (parentNode) break
                      }

                      if (!parentNode) return null

                      // Calculate positions for lines
                      const parentIndex = (nodesByLevel.get(parentNode.level) || []).findIndex(
                        (n) => n.id === parentNode?.id,
                      )
                      const childIndex = nodes.findIndex((n) => n.id === node.id)

                      if (parentIndex === -1 || childIndex === -1) return null

                      return (
                        <div
                          key={`line-${parentNode.id}-${node.id}`}
                          className="absolute border-t-2 border-gray-300"
                          style={{
                            top: "-20px",
                            left: `${(parentIndex + 0.5) * 120}px`,
                            width: `${(childIndex - parentIndex) * 120}px`,
                            height: "20px",
                          }}
                        />
                      )
                    })}
                  </div>
                )}
                <div className="flex space-x-4">{nodes.map(renderNode)}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Render the list view
  const renderListView = () => {
    // Group relatives by their Mahram status
    const mahramRelatives = relatives.filter((rel) => getMahramStatus(rel))
    const nonMahramRelatives = relatives.filter((rel) => !getMahramStatus(rel))

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 border-green-300 bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-4 text-center">Mahram Relatives</h3>
          <div className="space-y-2">
            {mahramRelatives.map((relative) => (
              <div key={relative.id} className="flex items-center p-2 bg-white rounded-lg">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    relative.gender === "male" ? "bg-blue-100" : "bg-pink-100"
                  }`}
                >
                  {relative.gender === "male" ? "👨" : "👩"}
                </div>
                <div>
                  <div className="text-sm font-semibold">{relative.name}</div>
                  {showArabic && (
                    <div className="text-xs font-arabic" dir="rtl">
                      {relative.arabicName}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-2 border-amber-300 bg-amber-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-4 text-center">Non-Mahram Relatives</h3>
          <div className="space-y-2">
            {nonMahramRelatives.map((relative) => (
              <div key={relative.id} className="flex items-center p-2 bg-white rounded-lg">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    relative.gender === "male" ? "bg-blue-100" : "bg-pink-100"
                  }`}
                >
                  {relative.gender === "male" ? "👨" : "👩"}
                </div>
                <div>
                  <div className="text-sm font-semibold">{relative.name}</div>
                  {showArabic && (
                    <div className="text-xs font-arabic" dir="rtl">
                      {relative.arabicName}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Family Tree Visualizer</span>
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                playerGender === "male"
                  ? "bg-blue-100 border-2 border-blue-500"
                  : "bg-pink-100 border-2 border-pink-500"
              }`}
            >
              {playerGender === "male" ? <Male className="h-4 w-4" /> : <Female className="h-4 w-4" />}
            </div>
            <span className="text-sm">Viewing as: {playerGender === "male" ? "Male" : "Female"}</span>
          </div>
        </CardTitle>
        <CardDescription>Visualize Mahram relationships from your perspective</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Tabs defaultValue="tree" onValueChange={(value) => setViewMode(value as "tree" | "list")}>
            <TabsList>
              <TabsTrigger value="tree">Tree View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowArabic(!showArabic)}>
              {showArabic ? "Hide Arabic" : "Show Arabic"}
            </Button>
            {onClose && (
              <Button variant="outline" size="sm" onClick={onClose}>
                Close
              </Button>
            )}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-green-500 bg-green-100"></div>
              <span className="text-xs">Mahram</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-amber-500 bg-amber-100"></div>
              <span className="text-xs">Non-Mahram</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-100"></div>
              <span className="text-xs">Male</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-pink-100"></div>
              <span className="text-xs">Female</span>
            </div>
          </div>

          {viewMode === "tree" ? renderTreeView() : renderListView()}
        </div>
      </CardContent>
    </Card>
  )
}

export default FamilyTreeVisualizer
