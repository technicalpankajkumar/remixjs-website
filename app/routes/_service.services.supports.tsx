import SupportCategories from "~/components/support/SupportCategories";
import SupportContact from "~/components/support/SupportContact";
import SupportHeader from "~/components/support/SupportHeader";

export default function Index() {
  return (
      <main className="flex-1 pt-16 md:pt-20">
        <SupportHeader />
        <SupportCategories />
        {/* <SupportFaq /> */}
        <SupportContact />
      </main>
  )
}