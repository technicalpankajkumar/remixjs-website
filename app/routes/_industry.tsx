import { Outlet, useLocation } from "@remix-run/react";
import CommonHeader from "~/components/CommonHeader";


const Index = () => {
    const location = useLocation();

    if(location.pathname != "/industries"){
        return (<Outlet/>)
    }

    return (<>
        <CommonHeader title={'Our Industry Area'} description={'Industry where we work.'} />
       <Outlet/>
        </>)

    }

export default Index;