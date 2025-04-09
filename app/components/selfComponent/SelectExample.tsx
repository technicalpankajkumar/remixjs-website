import { useState } from "react"
import { CustomSelect, type OptionType } from "~/components/selfComponent/Select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Label } from "~/components/ui/label"

export default function Home() {
  // Example options - expanded list
  const options: OptionType[] = [
    { label: "React", value: "react" },
    { label: "Next.js", value: "nextjs" },
    { label: "TailwindCSS", value: "tailwind" },
    { label: "TypeScript", value: "typescript" },
    { label: "JavaScript", value: "javascript" },
    { label: "Node.js", value: "nodejs" },
    { label: "Express", value: "express" },
    { label: "MongoDB", value: "mongodb" },
    { label: "PostgreSQL", value: "postgresql" },
    { label: "GraphQL", value: "graphql" },
    { label: "React Native", value: "react-native" },
    { label: "Vue.js", value: "vuejs" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Docker", value: "docker" },
    { label: "Kubernetes", value: "kubernetes" },
    { label: "AWS", value: "aws" },
    { label: "Firebase", value: "firebase" },
    { label: "Redux", value: "redux" },
    { label: "Zustand", value: "zustand" },
  ]

  // Single select state
  const [singleValue, setSingleValue] = useState<string>("")

  // Multiple select state
  const [multipleValue, setMultipleValue] = useState<string[]>([])

  // Creatable select state
  const [creatableValue, setCreatableValue] = useState<string[]>([])

  // Server-side searchable state
  const [searchableOptions, setSearchableOptions] = useState<OptionType[]>(options)
  const [isLoading, setIsLoading] = useState(false)

  // Many selected items state
  const [manySelectedValue, setManySelectedValue] = useState<string[]>([
    "react",
    "nextjs",
    "tailwind",
    "typescript",
    "javascript",
    "nodejs",
    "express",
  ])

  // Simulate server-side search
  const handleSearch = (query: string) => {
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      if (!query) {
        setSearchableOptions(options)
      } else {
        const filtered = options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()))
        setSearchableOptions(filtered)
      }
      setIsLoading(false)
    }, 500)
  }

  return (
    <main className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Enhanced Custom Select Component</h1>

      <Tabs defaultValue="basic">
        <TabsList className="mb-4">
          <TabsTrigger value="basic">Basic Examples</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Single Select</CardTitle>
              <CardDescription>Basic single selection with client-side search</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="max-w-sm">
                <Label htmlFor="single-select">Select a technology</Label>
                <CustomSelect
                  options={options}
                  value={singleValue}
                  onChange={(value) => setSingleValue(value as string)}
                  placeholder="Select a technology"
                  searchable={true}
                  className="mt-1.5"
                />
              </div>
              {singleValue && (
                <p className="text-sm text-muted-foreground">
                  Selected: {options.find((opt) => opt.value === singleValue)?.label}
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Multiple Select</CardTitle>
              <CardDescription>Select multiple options with badges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="max-w-sm">
                <Label htmlFor="multiple-select">Select technologies</Label>
                <CustomSelect
                  options={options}
                  value={multipleValue}
                  onChange={(value) => setMultipleValue(value as string[])}
                  placeholder="Select technologies"
                  multiple
                  searchable={true}
                  className="mt-1.5"
                />
              </div>
              {multipleValue.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  Selected: {multipleValue.map((v) => options.find((opt) => opt.value === v)?.label).join(", ")}
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Creatable Select</CardTitle>
              <CardDescription>Create new options if they don't exist</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-sm">
                <Label htmlFor="creatable-select">Select or create technologies</Label>
                <CustomSelect
                  options={options}
                  value={creatableValue}
                  onChange={(value) => setCreatableValue(value as string[])}
                  placeholder="Select or create technologies"
                  multiple
                  creatable
                  searchable={true}
                  className="mt-1.5"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Server-side Search</CardTitle>
              <CardDescription>Search with server-side filtering and loading state</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-sm">
                <Label htmlFor="server-search">Search technologies</Label>
                <CustomSelect
                  options={searchableOptions}
                  value={singleValue}
                  onChange={(value) => setSingleValue(value as string)}
                  placeholder="Search technologies"
                  onSearch={handleSearch}
                  loading={isLoading}
                  className="mt-1.5"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Many Selected Items</CardTitle>
              <CardDescription>Handling many selected items with "show more" functionality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-sm">
                <Label htmlFor="many-selected">Technologies</Label>
                <CustomSelect
                  options={options}
                  value={manySelectedValue}
                  onChange={(value) => setManySelectedValue(value as string[])}
                  placeholder="Select technologies"
                  multiple
                  searchable={true}
                  maxSelectedDisplay={3}
                  className="mt-1.5"
                  badgeVariant="default"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Styling</CardTitle>
              <CardDescription>Custom width, height and badge styling</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="custom-width">Custom Width Popover</Label>
                <CustomSelect
                  options={options}
                  value={multipleValue}
                  onChange={(value) => setMultipleValue(value as string[])}
                  placeholder="Select technologies"
                  multiple
                  searchable={true}
                  popoverWidth="400px"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="custom-height">Custom Max Height</Label>
                <CustomSelect
                  options={options}
                  value={multipleValue}
                  onChange={(value) => setMultipleValue(value as string[])}
                  placeholder="Select technologies"
                  multiple
                  searchable={true}
                  maxHeight="8rem"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="outline-badges">Outline Badges</Label>
                <CustomSelect
                  options={options}
                  value={multipleValue}
                  onChange={(value) => setMultipleValue(value as string[])}
                  placeholder="Select technologies"
                  multiple
                  searchable={true}
                  badgeVariant="outline"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="destructive-badges">Destructive Badges</Label>
                <CustomSelect
                  options={options}
                  value={multipleValue}
                  onChange={(value) => setMultipleValue(value as string[])}
                  placeholder="Select technologies"
                  multiple
                  searchable={true}
                  badgeVariant="destructive"
                  className="mt-1.5"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
