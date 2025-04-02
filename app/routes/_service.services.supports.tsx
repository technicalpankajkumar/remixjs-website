import { Outlet } from "@remix-run/react";
import SupportCategories from "~/components/support/SupportCategories";
import SupportContact from "~/components/support/SupportContact";
import SupportFaq from "~/components/support/SupportFaq";
import SupportHeader from "~/components/support/SupportHeader";

export default function Index() {
  return (
      <main className="flex-1">
        <SupportHeader />
        <SupportCategories />
        <SupportContact />
        <SupportFaq />
      </main>
  )
}