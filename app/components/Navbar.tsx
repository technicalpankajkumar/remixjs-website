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
import { Menu, X, ChevronDown, Home, Info, Settings, Briefcase, Cpu, Phone ,DatabaseBackup,AppWindow,MonitorPause,Code,Bug, Store, Activity, Cross, Building, ShoppingBag, LucideProps} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/components/ui/collapsible"
interface navDataType { 
  id:string,
  name: string; 
  to: string; 
  icon:React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>, 
  description?: string;
  dropdown?:navDataType[]
}
const navData: navDataType[]= [
  { id: "1" , name: "Home", to: "/", icon: Home },
  { id: "2" , name: "About", to: "/about", icon: Info },
  { id: "3", name: "Services", 
    to: "/services", 
    icon: Settings,
    description:"Partner with us to create powerful, scalable solutions that drive growth and efficiency in your organization.",
    dropdown: [
      { id:"31", name: "Custom Software", to: "/services/customsoftware" , icon: AppWindow,description:"In today's competitive landscape, businesses need innovative solutions to stay ahead"},
      { id:"32", name: "SaaS", to: "/services/saas", icon: MonitorPause, description:"Access Anytime, Anywhere: Scalable SaaS Solutions for Modern Businesses." },
      { id:"33", name: "Support's", to: "/services/supports",icon: Code , description:"Always Here for You: Reliable Support Solutions to Keep Your Business Running Smoothly."},
    ],
  },
  {
    id:"4",
    name: "Industries",
    to: "/industries",
    icon: Briefcase,
    description: "Drive growth and efficiency with our specialized software designed to meet the unique needs of your industry." ,
    dropdown: [
      { id:"41",name: "E-Commerce", to: "/industries/ecommerce" ,icon: Store , description: "Transforming Retail: Seamless Shopping Experiences Tailored for Every Customer."},
      { id:"42",name: "Healthcare", to: "/industries/healthcare" ,icon: Activity, description:"Streamlining Healthcare Management with Cutting-Edge Technology and Insights."},
      { id:"43",name: "Fitness", to: "/industries/fitness",icon: Cross,description:"Transforming Lives Through Technology: Innovative Fitness Solutions for a Healthier You." },
      { id:"44",name: "ERP", to: "/industries/erp",icon: ShoppingBag , description: "Integrate, Automate, Elevate: Your All-in-One ERP Solution for Business Efficiency."},
      { id:"45",name: "Others", to: "/industries/others",icon: Building,description: "Your Partner in Progress: Custom Software Services to Meet Every Business Need." },
    ],
  },
  { id:"5",name: "Blogs", to: "/blogs", icon: Cpu },
  { id:"6",name: "Careers", to: "/jobs", icon: DatabaseBackup },
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
        {
          navData?.map(menu => {
            if(menu.dropdown){
              return (<NavigationMenuItem key={menu.id}>
                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] relative bg-cover bg-center" style={{ backgroundImage: `url('https://watermark.lovepik.com/photo/20211130/large/lovepik-customer-service-team-group-picture_501227017.jpg')` }}>
                    <li className="row-span-3 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md "
                          to={menu.to}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                           Our {menu.name}
                          </div>
                          <p className="text-sm leading-tight ">
                           {menu.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {
                      menu?.dropdown?.map( submenu =>{
                        return (<ListItem key={submenu.id} href={submenu.to} title={submenu.name}>
                          {submenu.description}
                          </ListItem>)
                      })
                    }
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>)
            }
            return(<NavigationMenuItem key={menu.id}>
              <Link to={menu.to}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {menu.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>)
          })
        }
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
                      {navData?.map((link, index) => (
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
                                  activeLink.startsWith(link.to) || openSubmenus[link.name] ? "bg-gray-50" : ""
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
                                      to={item.to}
                                      className={`flex py-2 px-3 text-sm rounded-md transition-colors ${
                                        activeLink === item.to
                                          ? "bg-red-50 text-red-500 font-medium"
                                          : "text-slate-600 hover:bg-gray-100 hover:text-red-500"
                                      }`}
                                      onClick={() => handleLinkClick(item.to)}
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
                              to={link.to}
                              className={`flex items-center px-4 py-3 font-medium transition-colors ${
                                activeLink === link.to
                                  ? "bg-gray-50 text-red-500"
                                  : "text-slate-800 hover:bg-gray-50 hover:text-red-500"
                              }`}
                              onClick={() => handleLinkClick(link.to)}
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
                    <Link to={'/contactus'}>
                    <Button
                      className="w-full bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      CONTACT US
                    </Button>
                    </Link>
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
