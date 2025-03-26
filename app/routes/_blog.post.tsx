import { Outlet, useLocation } from "@remix-run/react"
import BlogComments from "~/components/blog/BlogComments"


export default function Index() {
    // In a real app, you would fetch the blog post data based on the slug
    const slug = useLocation();

    return (<>
        <Outlet context={slug?.pathname} />
        <BlogComments />
    </>
    )
}
