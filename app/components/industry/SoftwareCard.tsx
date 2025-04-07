import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

export default function SoftwareCard({ title, icon, description, features,imgSrc }:any) {
    const [expanded, setExpanded] = useState(false)
  
    return (
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center gap-4 ">
          {icon}
          <div>
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
        <CardDescription className="w-full flex justify-center">
          <img src={imgSrc || "/assets/svg/education_educator.svg"} className="object-cover mb-2 h-56"/>
        </CardDescription>
          <CardDescription className="text-base mb-4">{description}</CardDescription>
          
          <div className="space-y-4">
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  <span>Show Features</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
  
            {expanded && (
              <div className="mt-4 space-y-2 text-sm animate-in fade-in-50 duration-300">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  {features.map((feature:any, index:any) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
  