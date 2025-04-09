import * as React from 'react'
interface commonHeaderInterface{
    title?:String,
    description?:String
}
const CommonHeader:React.FC<commonHeaderInterface>=({title,description})=>{
    return (<>
    {/* Header with background */}
    <div className="relative bg-slate-800 py-12 md:py-18 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://pic.pikbest.com/01/98/19/8888piCt888piCMkn.jpg!bw700')] bg-cover bg-center"></div>
        <div className="container relative z-10 mx-auto px-4">
          <p className="text-white text-lg mb-2">{title || "YGTW  Technology"}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{description || "About Us"}</h1>
        </div>
        {/* White diagonal shape */}
        <div className="absolute bottom-0 right-0 w-1/3 h-16 bg-white transform skew-y-6 translate-y-8"></div>
      </div>
    </>)
}

export default CommonHeader