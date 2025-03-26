import type React from "react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"

interface EmptyStateCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  action?: {
    label: string
    onClick: () => void
  }
}

export  default function EmptyJobCard({ title, description, icon, action }: EmptyStateCardProps) {
  return (
    <Card className="border-gray-200 bg-white">
      <CardHeader className="text-center">
        {icon && <div className="mb-4 text-gray-300 mx-auto">{icon}</div>}
        <CardTitle className="text-xl font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-500 max-w-md mx-auto">{description}</p>
      </CardContent>
      {action && (
        <CardFooter className="flex justify-center pb-6">
          <Button onClick={action.onClick}>{action.label}</Button>
        </CardFooter>
      )}
    </Card>
  )
}

