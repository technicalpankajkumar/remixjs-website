import { Outlet, useLocation } from "@remix-run/react";
import CommonHeader from "~/components/CommonHeader";

interface ServiceData {
    title: string;
    description: string;
}

interface Services {
    [key: string]: ServiceData;
}


const Index = () => {
    const location = useLocation();

    const data:Services = {
        "/applicationservice":{
            title: 'Our Services',
            description: 'Application Services'
        },
        "/automationservice": {
            title: 'Our Services',
            description:'Automation Services'
        },
        "/qaservice": {
            title: 'Our Services',
            description: 'Q&A Services'
        }
    }

    return (<>
        <CommonHeader title={'Our Service'} description={data[location.pathname].description} />
        <Outlet />
    </>)
}

export default Index;