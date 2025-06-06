import { Outlet } from "@remix-run/react"
import { Locate, Mail, Phone, TelescopeIcon } from "lucide-react";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import { Button } from "~/components/ui/button";


const MainLayout = () => {

  return <div className="flex flex-col min-h-screen">
    <div className="bg-slate-800 p-4 flex flex-wrap gap-2 px-4 py-3 text-white text-xs">
      <p className="flex gap-2 items-center"> <Phone size={15}/> <span>(IN) +91-0000000000 , +91-0000000000</span></p>
      <p className="flex gap-2 items-center"> <TelescopeIcon size={15}/> <span>(US-Toll Free) +1-(000)-000-0000</span></p>
      <p className="flex gap-2 items-center"> <Mail size={15}/> <span>pankajkumar@yougotoweb.com</span></p>
      <p className="flex gap-2 items-center"> <Locate size={15}/> <span>Online Uttar Pradesh</span></p>
    </div>
    <div className="bg-white flex flex-wrap justify-between items-center lg:justify-around p-2 md:p-4 sticky top-0 z-50 border-b shadow-sm">
        <span className="text-2xl font-bold">
          <span className="text-blue-400">YGTW</span>
          <span className="text-slate-800 ms-1"></span>
          <span className="ms-1 text-gray-400">Technology</span>
        </span>
        {/* navigation */}
        <Navbar />
    </div>
    <main className="flex-grow ">
      <Outlet />
    </main>
    <Footer/>
  </div>
}

export default MainLayout;