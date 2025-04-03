import { Link } from "@remix-run/react"
import {
    Megaphone,
    Layout,
    Settings,
    Rocket,
    Server,
    ShieldCheck,
    CreditCard,
    MessageSquare,
    Headphones,
    ChevronRight
  } from "lucide-react"

  
  interface CategoryHeaderProps {
    title: string
    description: string
    color: string
    icon: string
  }
  
  export function CategoryHeader({ title, description, color, icon }: CategoryHeaderProps) {
    const getIcon = (iconName: string) => {
      switch (iconName) {
        case "Megaphone":
          return <Megaphone className="h-10 w-10 text-white" />
        case "Layout":
          return <Layout className="h-10 w-10 text-white" />
        case "Settings":
          return <Settings className="h-10 w-10 text-white" />
        case "Rocket":
          return <Rocket className="h-10 w-10 text-white" />
        case "Server":
          return <Server className="h-10 w-10 text-white" />
        case "ShieldCheck":
          return <ShieldCheck className="h-10 w-10 text-white" />
        case "CreditCard":
          return <CreditCard className="h-10 w-10 text-white" />
        case "MessageSquare":
          return <MessageSquare className="h-10 w-10 text-white" />
        case "Headphones":
          return <Headphones className="h-10 w-10 text-white" />
        default:
          return <Megaphone className="h-10 w-10 text-white" />
      }
    }
  
    return (
      <section className={`${color} py-8 md:py-12`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center text-white text-sm mb-4">
            <Link to="/services/supports" className="hover:underline">
              Help Center
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{title}</span>
          </div>
  
          <div className="flex items-center mb-4">
            <div className="bg-white/20 p-3 rounded-lg mr-4">{getIcon(icon)}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          </div>
  
          <p className="text-white/90 text-lg max-w-3xl">{description}</p>
        </div>
      </section>
    )
  }
  
  