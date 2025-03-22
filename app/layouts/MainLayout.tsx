import { Outlet } from "@remix-run/react"
import { Locate, Mail, Phone, TelescopeIcon } from "lucide-react";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";
import { Button } from "~/components/ui/button";


const MainLayout = () => {

  return <div className="flex flex-col min-h-screen">
    <div className="bg-slate-800 p-4 flex flex-wrap gap-2 px-4 py-3 text-white text-xs">
      <p className="flex gap-2 items-center"> <Phone size={15}/> <span>(IN) +91-7054555657 , +91-7838783478</span></p>
      <p className="flex gap-2 items-center"> <TelescopeIcon size={15}/> <span>(US-Toll Free) +1-(705)-555-6957</span></p>
      <p className="flex gap-2 items-center"> <Mail size={15}/> <span>info@unicodesystems.in</span></p>
      <p className="flex gap-2 items-center"> <Locate size={15}/> <span>Second floor, agile height lucknow</span></p>
    </div>
    <div className="bg-white flex flex-wrap justify-around p-2 sticky top-0 z-50">
      <img src="https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P3A00000kLOtPUAW" width={150} />
      <div className="flex gap-2">
        <Navbar />
        <Button>CONTACT US</Button>
      </div>
    </div>
    <main className="flex-grow ">
      <Outlet />
    </main>
    <Footer/>
  </div>
}

export default MainLayout;