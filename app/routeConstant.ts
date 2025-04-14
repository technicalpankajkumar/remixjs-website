import { Activity, AppWindow, Briefcase, Building, Code, Cpu, Cross, DatabaseBackup, Home, Info, LucideProps, MonitorPause, Settings, ShoppingBag, Store } from "lucide-react";
import React from 'react';

interface navDataType { 
  id:string,
  name: string; 
  to: string; 
  icon:React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>, 
  description?: string;
  dropdown?:navDataType[]
}
export const navData: navDataType[]= [
  { id: "1" , name: "Home", to: "/", icon: Home },
  { id: "2" , name: "About", to: "/about", icon: Info },
  { id: "3", name: "Services", 
    to: "/services", 
    icon: Settings,
    description:"Partner with us to create powerful, scalable solutions that drive growth and efficiency in your organization.",
    dropdown: [
      { id:"31", name: "Custom Application", to: "/services/customapplication" , icon: AppWindow,description:"In today's competitive landscape, businesses need innovative solutions to stay ahead"},
      { id:"32", name: "SaaS", to: "/services/saas", icon: MonitorPause, description:"Access Anytime, Anywhere: Scalable SaaS Solutions for Modern Businesses." },
      { id:"33", name: "Support's", to: "/services/supports",icon: Code , description:"Always Here for You: Reliable Support Solutions to Keep Your Business Running Smoothly."},
    ],
  },
  {
    id:"4",
    name: "Industries",
    to: "/industries",
    icon: Briefcase,
    description: "Drive growth and efficiency with our specialized software designed to meet the unique needs of your industry." ,
    dropdown: [
      { id:"41",name: "E-Commerce", to: "/industries/ecommerce" ,icon: Store , description: "Transforming Retail: Seamless Shopping Experiences Tailored for Every Customer."},
      { id:"42",name: "Healthcare", to: "/industries/healthcare" ,icon: Activity, description:"Streamlining Healthcare Management with Cutting-Edge Technology and Insights."},
      { id:"43",name: "Fitness", to: "/industries/fitness",icon: Cross,description:"Transforming Lives Through Technology: Innovative Fitness Solutions for a Healthier You." },
      { id:"44",name: "ERP", to: "/industries/erp",icon: ShoppingBag , description: "Integrate, Automate, Elevate: Your All-in-One ERP Solution for Business Efficiency."},
      { id:"44",name: "Education", to: "/industries/education",icon: ShoppingBag , description: "Integrate, Automate, Elevate: Your All-in-One ERP Solution for Business Efficiency."},
      { id:"44",name: "Transportation", to: "/industries/transportation",icon: ShoppingBag , description: "Integrate, Automate, Elevate: Your All-in-One ERP Solution for Business Efficiency."},
      { id:"44",name: "Banking & Finance", to: "/industries/banking",icon: ShoppingBag , description: "Integrate, Automate, Elevate: Your All-in-One ERP Solution for Business Efficiency."},
      { id:"44",name: "Telecommunication", to: "/industries/telecommunication",icon: ShoppingBag , description: "Enabling communication service providers with software for network management, billing, and customer service."},
      { id:"45",name: "Others", to: "/industries/others",icon: Building,description: "Your Partner in Progress: Custom Software Services to Meet Every Business Need." },
    ],
  },
  { id:"5",name: "Blogs", to: "/blogs", icon: Cpu },
  { id:"6",name: "Careers", to: "/jobs", icon: DatabaseBackup },
]