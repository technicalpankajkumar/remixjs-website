import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu"
import { Link } from "@remix-run/react"
import { cn } from "~/lib/utils"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Menu, X, ChevronDown, Home, Info, Settings, Briefcase, Cpu, Phone ,DatabaseBackup,AppWindow,MonitorPause,Code,Bug, Store, Activity, Cross, Building} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/components/ui/collapsible"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", 
    href: "#service", 
    icon: Settings,
    dropdown: [
      { name: "Application", href: "/applicationservice" , icon: AppWindow},
      { name: "Automation", href: "/automationservice", icon: MonitorPause },
      { name: "Development", href: "/developmentservice",icon: Code },
      { name: "Q&A", href: "/qaservice" ,icon: Bug},
    ],
  },
  {
    name: "Industries",
    href: "#industries",
    icon: Briefcase,
    dropdown: [
      { name: "E-Commerce", href: "/industries/ecommerce" ,icon: Store},
      { name: "Healthcare", href: "/industries/healthcare" ,icon: Activity},
      { name: "Fintech", href: "/industries/fintech",icon: Cross },
      { name: "Other", href: "/industries/other",icon: Building },
    ],
  },
  { name: "Blogs", href: "/blogs", icon: Cpu },
  { name: "Careers", href: "/jobs", icon: DatabaseBackup },
  { name: "Contact", href: "/contactus", icon: Phone },
]
export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openSubmenus, setOpenSubmenus] = React.useState<Record<string, boolean>>({})
  const [activeLink, setActiveLink] = React.useState<string>("/")
  const mobileMenuRef = React.useRef<HTMLDivElement>(null)

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set active link based on current path
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname)
    }
  }, [])

  // Toggle submenu without closing the sheet
  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  // Handle link click - close the mobile menu
  const handleLinkClick = (href: string) => {
    setActiveLink(href)
    setIsMobileMenuOpen(false) // Close the drawer when a link is clicked
  }

  return (
    <>
    <div className="hidden lg:flex items-center space-x-8">
    <NavigationMenu>
      <NavigationMenuList className="flex flex-wrap">
      <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link  to="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Service</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gray-900 bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/applicationservice"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Our Services
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    In today's competitive landscape, businesses need innovative solutions to stay ahead.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/automationservice" title="Our Automation">
                Our Automation service to help automate your business with custom softwares.
              </ListItem>
              <ListItem href="/developmentservice" title="Our Development">
              Our Development service to help create Custom software as per your need and requirement.
              </ListItem>
              <ListItem href="/supportservice" title="Our Support">
                Our Support Service helps to you 24/7 with Technical or Software supports.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Industry</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link  to="/blogs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link  to="/jobs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Careers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <Link to={'/contactus'} className="flex items-center bg-gray-800 bg-gradient-to-from px-2 py-1 md:py-2 rounded-lg text-white">CONTACT US</Link>
    </div>

     {/* Mobile Menu Button */}
     <div className="lg:hidden" ref={mobileMenuRef}>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="destructive"
                  size="icon"
                  className={isScrolled ? "text-slate-800" : "text-white"}
                  aria-label="Menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[350px] p-0" >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link to="/" className="flex items-center">
                    <span className="text-2xl font-bold">
                      <span className="text-blue-400">SG</span>
                      <span className="text-red-500 ms-1">TECH</span>
                      <span className="ms-1 text-gray-400">Technology</span>
                    </span>
                    </Link>
                  </div>

                  <div className="flex-1 overflow-auto py-4">
                    <nav className="flex flex-col">
                      {navLinks.map((link, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-b-0">
                          {link.dropdown ? (
                            <Collapsible
                              open={openSubmenus[link.name] || false}
                              onOpenChange={(open) => {
                                setOpenSubmenus((prev) => ({
                                  ...prev,
                                  [link.name]: open,
                                }))
                              }}
                            >
                              <div
                                className={`flex items-center px-4 py-3 cursor-pointer ${
                                  activeLink.startsWith(link.href) || openSubmenus[link.name] ? "bg-gray-50" : ""
                                } hover:bg-gray-50`}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleSubmenu(link.name)
                                }}
                              >
                                <link.icon className="h-5 w-5 text-slate-500 mr-3" />
                                <div className="font-medium text-slate-800">{link.name}</div>
                                <CollapsibleTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="p-1 ml-auto"
                                    onClick={(e) => {
                                      e.stopPropagation() // Prevent parent click handler
                                      toggleSubmenu(link.name)
                                    }}
                                  >
                                    <ChevronDown
                                      className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                                        openSubmenus[link.name] ? "rotate-180" : ""
                                      }`}
                                    />
                                    
                                  </Button>
                                </CollapsibleTrigger>
                              </div>
                              <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out">
                                <div className="pl-12 pr-4 py-2 space-y-1 bg-gray-50">
                                  {link.dropdown.map((item, idx) => (
                                    <Link
                                      key={idx}
                                      to={item.href}
                                      className={`flex py-2 px-3 text-sm rounded-md transition-colors ${
                                        activeLink === item.href
                                          ? "bg-red-50 text-red-500 font-medium"
                                          : "text-slate-600 hover:bg-gray-100 hover:text-red-500"
                                      }`}
                                      onClick={() => handleLinkClick(item.href)}
                                    >
                                      <item.icon className="h-4 w-4 text-slate-500 mr-3" />
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          ) : (
                            <Link
                              to={link.href}
                              className={`flex items-center px-4 py-3 font-medium transition-colors ${
                                activeLink === link.href
                                  ? "bg-gray-50 text-red-500"
                                  : "text-slate-800 hover:bg-gray-50 hover:text-red-500"
                              }`}
                              onClick={() => handleLinkClick(link.href)}
                            >
                              <link.icon className="h-5 w-5 mr-3" />
                              {link.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>

                  <div className="p-4 border-t">
                    <Button
                      className="w-full bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
     </div>

    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
