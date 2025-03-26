import { Outlet } from "@remix-run/react";
import CommonHeader from "~/components/CommonHeader";

export default function Index() {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <main className="">
        <CommonHeader title={'Career'} description={'Latest Job Posts'}/>
          <div className="container mx-auto px-2 py-4">
                <Outlet/>
          </div>
        </main>
      </div>
    )
  }