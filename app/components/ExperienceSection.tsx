import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import Heading from "./selfComponent/Heading"
import Paragraph from "./selfComponent/Paragraph"
import { projectCounts } from "~/constants"

export function ExperienceSection() {
  return (
    <section className="relative bg-slate-800 py-6 md:py-8 overflow-hidden">
      {/*  background pattern */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://pic.pikbest.com/02/10/87/58G888piCXPh.jpg!bw700')] bg-cover bg-center"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="h-1 w-12 bg-white mr-4"></div>
                <Heading level={6} className="text-white ">Experience</Heading>
              </div>
              <Heading level={4} className="text-white">Who We Are</Heading>

              <Paragraph level={2} className="text-white">
                Our passion for technology and commitment to excellence fuel us. Our team of skilled, dedicated, and
                forward-thinking professionals drives our success. Backed by a strong, techno-savvy workforce, we
                deliver high-quality, reliable, and scalable solutions that meet the unique needs of our diverse
                clientele.
              </Paragraph>

              <Button className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 py-2 h-auto shadow-md ">
                CONTACT US TODAY
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
              [
                {label:"Projects",count:"10+",id:"1"},
                {label:"Countries",count:"1",id:"1"},
                {label:"Years of Experience",count:"6+",id:"1"}
              ]?.map(res =>  <Card className="bg-white border-2 border-slate-800 shadow-lg" key={res.id}>
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <Heading level={4}>{res.count}</Heading>
                  <Heading level={7}>{res.label}</Heading>
                </CardContent>
              </Card>)
            }
          </div>
        </div>

        {/* Additional stats in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {projectCounts.map((stat, index) => (
            <div key={index} className="text-center">
              <Heading level={3} className="text-white">{stat.number}</Heading>
              <Heading level={7} className="text-white text-center">{stat.label}</Heading>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

