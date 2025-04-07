import { Outlet, useLocation } from "@remix-run/react";
import { Activity, ArrowRightSquare, BookOpen, Dumbbell, ShoppingCart } from "lucide-react";
import { Button } from "~/components/ui/button";
import { bankAndFinanceIndustry, educationIndustory, erpIndustry, fitnessIndustry, healthIndustory, otherIndustry, telicomIndustry, transportationIndustry } from "~/constants";


const Index = () => {
    const location = useLocation();
    
    if(location.pathname != "/industries"){
        return (<Outlet/>)
    }

    return ( <section className="py-8 overflow-hidden bg-white">
        <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-10 px-4">
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-2"><BookOpen size={20} /></div>
                        <p className="text-slate-900 text-xl font-bold">Education Software Solutions</p>
                    </div>
                {
                educationIndustory?.map(res =><>
                <h4 className="text-lg  text-gray-600 mb-1 font-medium">
                    {res.title}
                    </h4>
                    <p className="text-slate-600 text-base mb-2">
                    {res.description}
                    </p></>
                )}
                <div className="flex gap-2 pt-2">
                <Button className="h-7 py-2 text-sm" >Visit Now <ArrowRightSquare/></Button>
                </div>
                </div>
                <div className="p-4  w-full flex items-center justify-center shadow">
                    <img
                        src="/assets/svg/education_educator.svg"
                        alt="Custom Applications Services"
                        className="w-72 object-cover rounded-lg" // Adjust width and height here
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-10 px-4 bg-slate-100">
            <div className="p-4  w-full flex items-center justify-between shadow">
                    <img
                        src="/assets/svg/hospital.svg"
                        alt="Custom Applications Services"
                        className="w-60 object-cover rounded-lg" // Adjust width and height here
                    />
                    <img
                        src="/assets/svg/health_injury.svg"
                        alt="Custom Applications Services"
                        className="w-52 md:w-72 object-cover rounded-lg" // Adjust width and height here
                    />
                </div>
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-2"><Activity size={20} /></div>
                        <p className="text-slate-900 text-xl font-bold">Health Software Solutions</p>
                    </div>
                {
                healthIndustory?.map(res =><>
                <h4 className="text-lg  text-gray-600 mb-1 font-medium">
                    {res.title}
                    </h4>
                    <p className="text-slate-600 text-base mb-2">
                    {res.description}
                    </p></>
                )}
                <div className="flex gap-2 pt-2">
                <Button className="h-7 py-2 text-sm" >Visit Now <ArrowRightSquare/></Button>
                </div>
                </div>
                
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-10 px-4">
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-2"><Dumbbell size={20} /></div>
                        <p className="text-slate-900 text-xl font-bold">Fitness Software Solutions</p>
                    </div>
                {
                fitnessIndustry?.map(res =><>
                <h4 className="text-lg  text-gray-600 mb-1 font-medium">
                    {res.title}
                    </h4>
                    <p className="text-slate-600 text-base mb-2">
                    {res.description}
                    </p></>
                )}
                <div className="flex gap-2 pt-2">
                <Button className="h-7 py-2 text-sm" >Visit Now <ArrowRightSquare/></Button>
                </div>
                </div>
                <div className="p-4  w-full flex items-center justify-center shadow">
                    <img
                        src="/assets/svg/fitness_yoga.svg"
                        alt="Custom Applications Services"
                        className="w-72 object-cover rounded-lg" // Adjust width and height here
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-10 px-4 bg-slate-100">
            <div className="p-4  w-full flex items-center justify-center shadow">
                    <img
                        src="/assets/svg/banking_security.svg"
                        alt="Custom Applications Services"
                        className="w-72 object-cover rounded-lg" // Adjust width and height here
                    />
                </div>
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-2"><Activity size={20} /></div>
                        <p className="text-slate-900 text-xl font-bold">Banking & Finance Software Solutions</p>
                    </div>
                {
                bankAndFinanceIndustry?.map(res =><>
                <h4 className="text-lg  text-gray-600 mb-1 font-medium">
                    {res.title}
                    </h4>
                    <p className="text-slate-600 text-base mb-2">
                    {res.description}
                    </p></>
                )}
                <div className="flex gap-2 pt-2">
                <Button className="h-7 py-2 text-sm" >Visit Now <ArrowRightSquare/></Button>
                </div>
                </div>
                
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-10 px-4">
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-2"><ShoppingCart size={20} /></div>
                        <p className="text-slate-900 text-xl font-bold">E-Commerce Software Solutions</p>
                    </div>
                {
                fitnessIndustry?.map(res =><>
                <h4 className="text-lg  text-gray-600 mb-1 font-medium">
                    {res.title}
                    </h4>
                    <p className="text-slate-600 text-base mb-2">
                    {res.description}
                    </p></>
                )}
                <div className="flex gap-2 pt-2">
                <Button className="h-7 py-2 text-sm" >Visit Now <ArrowRightSquare/></Button>
                </div>
                </div>
                <div className="p-4  w-full flex items-center justify-center shadow">
                    <img
                        src="/assets/svg/ecom_shopping.svg"
                        alt="Custom Applications Services"
                        className="w-96 object-cover rounded-lg" // Adjust width and height here
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-10 px-4 bg-slate-100">
            <div className="p-4  w-full flex items-center justify-center shadow">
                    <img
                        src="/assets/svg/erp_desk.svg"
                        alt="Custom Applications Services"
                        className="w-96 object-cover rounded-lg" // Adjust width and height here
                    />
                </div>
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-2"><Activity size={20} /></div>
                        <p className="text-slate-900 text-xl font-bold">ERP & Enterprises Software Solutions</p>
                    </div>
                {
                erpIndustry?.map(res =><>
                <h4 className="text-lg  text-gray-600 mb-1 font-medium">
                    {res.title}
                    </h4>
                    <p className="text-slate-600 text-base mb-2">
                    {res.description}
                    </p></>
                )}
                <div className="flex gap-2 pt-2">
                <Button className="h-7 py-2 text-sm" >Visit Now <ArrowRightSquare/></Button>
                </div>
                </div>
                
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-10 px-4">
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-2"><ShoppingCart size={20} /></div>
                        <p className="text-slate-900 text-xl font-bold">Transportation Software Solutions</p>
                    </div>
                {
                transportationIndustry?.map(res =><>
                <h4 className="text-lg  text-gray-600 mb-1 font-medium">
                    {res.title}
                    </h4>
                    <p className="text-slate-600 text-base mb-2">
                    {res.description}
                    </p></>
                )}
                <div className="flex gap-2 pt-2">
                <Button className="h-7 py-2 text-sm" >Visit Now <ArrowRightSquare/></Button>
                </div>
                </div>
                <div className="p-4  w-full flex items-center justify-center shadow">
                    <img
                        src="/assets/svg/transportation_ship.svg"
                        alt="Custom Applications Services"
                        className="w-96 object-cover rounded-lg" // Adjust width and height here
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-10 px-4 bg-slate-100">
            <div className="p-4  w-full flex items-center justify-center shadow">
                    <img
                        src="/assets/svg/telicom_customer.svg"
                        alt="Custom Applications Services"
                        className="w-96 object-cover rounded-lg" // Adjust width and height here
                    />
                </div>
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-2"><Activity size={20} /></div>
                        <p className="text-slate-900 text-xl font-bold">Telicommunication Software Solutions</p>
                    </div>
                {
                telicomIndustry?.map(res =><>
                <h4 className="text-lg  text-gray-600 mb-1 font-medium">
                    {res.title}
                    </h4>
                    <p className="text-slate-600 text-base mb-2">
                    {res.description}
                    </p></>
                )}
                <div className="flex gap-2 pt-2">
                <Button className="h-7 py-2 text-sm" >Visit Now <ArrowRightSquare/></Button>
                </div>
                </div>
                
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-10 px-4">
                <div>
                    <div className="flex items-center mb-3">
                        <div className="mr-2"><ShoppingCart size={20} /></div>
                        <p className="text-slate-900 text-xl font-bold">Other Software Solutions</p>
                    </div>
                {
                otherIndustry?.map(res =><>
                <h4 className="text-lg  text-gray-600 mb-1 font-medium">
                    {res.title}
                    </h4>
                    <p className="text-slate-600 text-base mb-2">
                    {res.description}
                    </p></>
                )}
                <div className="flex gap-2 pt-2">
                <Button className="h-7 py-2 text-sm" >Visit Now <ArrowRightSquare/></Button>
                </div>
                </div>
                <div className="p-4  w-full flex items-center justify-center shadow">
                    <img
                        src="/assets/svg/team.svg"
                        alt="Custom Applications Services"
                        className="w-96 object-cover rounded-lg" // Adjust width and height here
                    />
                </div>
            </div>
        </div>
    </section>)
}

export default Index;