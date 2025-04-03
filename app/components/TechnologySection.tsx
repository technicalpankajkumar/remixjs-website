import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"

export function TechnologySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Section header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="h-1 w-12 bg-slate-800 mr-4"></div>
                <p className="text-slate-700 text-lg">Technology</p>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Investing In Technology
              </h2>

              <p className="text-slate-600 text-lg mb-8">
                Investing in cutting-edge technology is at the heart of what we do. We harness the latest innovations to
                deliver solutions that drive your business forward. Let's build a future-proof strategy together.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6">
                  <Link to="#solutions">Our Solutions</Link>
                </Button>

                <Button asChild variant="outline" className="border-slate-300 text-slate-800">
                  <Link to="#case-studies">Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="https://img.pikbest.com/origin/09/18/24/73ipIkbEsTPWp.jpg!w700wp"
              alt="Modern technology workspace"
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Technology stack */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Technologies We Work With</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                <div className="rounded w-24 py-1 flex items-center justify-center">
                  <img
                    src={`https://techpile.in/Content/img/logo.png`}
                    alt={`Technology 1`}
                    width={100}
                    height={60}
                  />
                </div>
              <div className="rounded w-24 py-1 flex items-center justify-center">
                <img
                  src={`https://www.softros.com/img/softros-logo.png`}
                  alt={`Technology 2`}
                  width={100}
                  height={60}
                />
              </div>
              <div className="rounded w-24 py-1 flex items-center justify-center">
                Jemtech
                <img
                  src={`https://www.jemtech.co.uk/wp-content/themes/jemtech/images/jemtech-logo-white-new.svg`}
                  alt={`Technology 3`}
                  width={100}
                  height={60}
                />
              </div>
              <div className="rounded w-24 py-1 flex items-center justify-center">
                  <img
                    src={`https://techpile.in/Content/img/logo.png`}
                    alt={`Technology 1`}
                    width={100}
                    height={60}
                  />
                </div>
              <div className="rounded w-24 py-1 flex items-center justify-center">
                <img
                  src={`https://www.softros.com/img/softros-logo.png`}
                  alt={`Technology 2`}
                  width={100}
                  height={60}
                />
              </div>
              <div className="rounded w-24 py-1 flex items-center justify-center">
                Jemtech
                <img
                  src={`https://www.jemtech.co.uk/wp-content/themes/jemtech/images/jemtech-logo-white-new.svg`}
                  alt={`Technology 3`}
                  width={100}
                  height={60}
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

