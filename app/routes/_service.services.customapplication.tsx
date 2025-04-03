import customerservice from "/assets/customservice.webp"
import appdevelopment from "/assets/appdevelopmentsvg.png"
import { CheckSquare } from "lucide-react"

const data:{id:string,heading:string,description:string,img:string}[] = [
    {
        id:"1",
        heading:"Accelerate your business with our custom applications",
        description:"Our custom web development services focus on creating dynamic, user-friendly websites that cater to your specific business requirements. From responsive designs to robust back-end systems, we leverage the latest technologies to build scalable and secure web applications. Whether you need an e-commerce platform, a content management system, or a corporate website, our team of experienced developers will work closely with you to deliver a solution that enhances your online presence and drives engagement",
        img: customerservice
    },
    {
        id:"2",
        heading:"Accelerate your business with our custom Cross-Platform App",
        description:"In today’s multi-device world, having a presence on various platforms is crucial. Our cross-platform app development services enable you to reach a wider audience by creating applications that run smoothly on desktop, Android, and iOS devices. Utilizing frameworks like React Native and Flutter, we build high-performance apps that provide a native-like experience, ensuring consistency and functionality across all platforms. Whether you’re looking to develop a mobile app, a desktop application, or both, we deliver solutions that are efficient, cost-effective, and tailored to your business goals.",
        img: appdevelopment
    }
]
const Index = () => {

    return (<>
        {/* automation hero section start here*/}
        <section className="py-12 md:py-18 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {
                   data?.map((res,ind)=>{
                    return (<div key={res.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 p-2 items-center place-content-center 
                        ${ (ind/2 ==0) ? 'bg-white':'bg-gray-50'}`}>
                        <div className={`${ (ind/2 == 0) ? "order-last lg:order-first " : "order-first lg:order-last " }`}>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                                {res.heading}
                            </h2>
                            <p className="text-slate-600 mb-4">
                                {res.description}
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative md:w-[400px] lg:w-[500px] text-end">
                                <img
                                    src={res.img}
                                    alt="Business Automation"
                                    className="w-full object-cover rounded-lg "
                                />
                            </div>
                        </div>
                    </div>)
                   }) 
                }
            </div>
            
        </section>
        {/* automation hero section end here */}
         {/* why choose section start*/}
         <section className="mb-4">
            <div className="container mx-auto px-4 lg:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Why Choose Custom Applications?</h2>
                        <p className="text-slate-600 text-lg">
                            Custom applications provide a competitive edge by offering tailored solutions to unique business
                            challenges. They streamline workflows, enhance productivity, and improve overall business performance.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <CheckSquare className="h-6 w-6 text-slate-800 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Enhanced Efficiency</h3>
                                <p className="text-slate-600">Streamline workflows, automate tasks, and reduce errors.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <CheckSquare className="h-6 w-6 text-slate-800 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Increased Productivity</h3>
                                <p className="text-slate-600">Empower your team with user-friendly tools that boost productivity.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <CheckSquare className="h-6 w-6 text-slate-800 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Improved Decision-Making</h3>
                                <p className="text-slate-600">Gain valuable insights from data-driven analytics and reporting.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <CheckSquare className="h-6 w-6 text-slate-800 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Competitive Advantage</h3>
                                <p className="text-slate-600">Differentiate your business with unique features and functionalities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* why choose section end*/}

    </>)
}

export default Index;