import { Outlet, useLocation } from "@remix-run/react";
import SupportCategories from "~/components/support/SupportCategories";
import SupportContact from "~/components/support/SupportContact";
import SupportFaq from "~/components/support/SupportFaq";
import SupportHeader from "~/components/support/SupportHeader";

export default function Index() {
   const location = useLocation();

  if(location.pathname != "/services/supports"){
    return <Outlet/>
  }

  return (
      <main className="flex-1">
        <SupportHeader />
        <SupportCategories />
        <SupportContact />
        <SupportFaq />
      </main>
  )
}