import { Outlet } from "@remix-run/react";
import { BlogFilter } from "~/components/blog/BlogFilter";
import { BlogSidebar } from "~/components/blog/BlogSidebar";
import CommonHeader from "~/components/CommonHeader";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="">
      <CommonHeader title={'Blogs'} description={'Latest Blogs'}/>
        <div className="container mx-auto px-4 py-12 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="order-last lg:order-first lg:col-span-2">
              <Outlet/>
            </div>
            <div className="relative order-first lg:order-last lg:col-span-1">
              <BlogFilter />
              <div className="hidden lg:block"><BlogSidebar /></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

