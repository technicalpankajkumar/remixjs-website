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
import { Link, useLocation } from "@remix-run/react"
import { cn } from "~/lib/utils"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Menu, X, ChevronDown, Home, Info, Settings, Briefcase, Cpu, Phone ,DatabaseBackup,AppWindow,MonitorPause,Code,Bug, Store, Activity, Cross, Building, ShoppingBag, LucideProps} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "~/components/ui/collapsible";
import image from '/assets/customerimg2.png'
import image2 from '/assets/customerimg.png'
import { navData } from "~/routeConstant"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openSubmenus, setOpenSubmenus] = React.useState<Record<string, boolean>>({})
  const [activeLink, setActiveLink] = React.useState<string>("/")
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  const location = useLocation().pathname
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
      setActiveLink(location)
    }
  }, [location])
  
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
    <div className="hidden lg:flex items-center space-x-8 ">
    <NavigationMenu>
      <NavigationMenuList className="flex flex-wrap">
        {
          navData?.map(menu => {
            if(menu.dropdown){
              return (<NavigationMenuItem key={menu.id}>
                <NavigationMenuTrigger className={`${(menu.to == activeLink || menu.to == `/${activeLink.split("/")?.[1]}`) ? 'text-white bg-blue-500 opacity-75' : ""}`}>{menu.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={`grid gap-3 p-2 ${(menu.name).toLocaleLowerCase() == 'services' ? " md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]" : "md:w-[500px] lg:w-[650px]  lg:grid-cols-3"}`}>
                  <li className="row-span-3 rounded-lg relative" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                    <div
                      style={{
                        backgroundImage: `url(${menu.id == "3" ? image : image2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      className="w-full h-full rounded-lg relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-85 text-white">
                        <NavigationMenuLink asChild>
                          <Link
                            className={`flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md ${menu.to == activeLink ? 'text-white bg-blue-500 opacity-75' : ""}`}
                            to={menu.to}
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {menu.name}
                            </div>
                            <p className="text-sm leading-tight">
                              {menu.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </li>
                    {
                      menu?.dropdown?.map( submenu =>{
                        return (<ListItem key={submenu.id} href={submenu.to} title={submenu.name} defaultValue={activeLink}>
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
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${menu.to == activeLink ? 'text-white bg-blue-500 opacity-75' : ""}`}>
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
                  className={isScrolled ? "text-slate-100" : "text-white"}
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
                      <span className="text-blue-400">YGTW</span>
                      <span className="text-slate-800 ms-1"></span>
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
                                          ? "text-white bg-blue-500 opacity-75"
                                          : "text-slate-600 hover:bg-gray-100 hover:text-slate-800"
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
                                  ? "text-white bg-blue-500 opacity-75"
                                  : "text-slate-800 hover:bg-gray-50 hover:text-slate-800"
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
                      className="w-full bg-slate-800 hover:bg-slate-700 text-white"
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
      <NavigationMenuLink asChild className={`${props.href == props.defaultValue ? 'bg-accent text-blue-700 font-semibold' : ""}`}>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <span className="text-sm font-medium leading-none">{title}</span>
          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </span>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
