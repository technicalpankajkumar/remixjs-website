import { Button } from "~/components/ui/button"

export function StrategySection() {
  return (
    <section className="py-8 md:pt-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="h-1 w-12 bg-slate-800 mr-4"></div>
                <p className="text-slate-700 text-lg">Our Strategy</p>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Build Your Business The Right Way.
              </h2>

              <p className="text-slate-600 text-lg mb-8">
              YGTW  Technology is dedicated to unlocking your business's potential through tailored solutions. Whether
                you're launching a new venture or seeking to optimize your current operations, our experts are here to
                support you every step of the way.
              </p>

              <Button className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-8 py-2 h-auto">
                START TODAY
              </Button>
            </div>
          </div>

          <div className="h-[300px] lg:h-[400px]">
            <img
              src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346666.jpg?t=st=1742651077~exp=1742654677~hmac=05298b57b011df6c2c114ba9726dcfc437958b7edd00122682ea2e22b3446dac&w=996"
              alt="Business professionals in a meeting"
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

