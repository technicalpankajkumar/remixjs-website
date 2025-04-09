import { Button } from "~/components/ui/button"
import CommanSection from "./selfComponent/CommanSection"

export function StrategySection() {
  return (

    <CommanSection
      tag="Our Strategy"
      heading="Build Your Business The Right Way"
      description="YGTW Technology is dedicated to unlocking your business's potential through tailored solutions. Whether
                you're launching a new venture or seeking to optimize your current operations, our experts are here to
                support you every step of the way."
      imgSrc="/assets/svg/banking_md.svg"
    >
      <Button className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-8 py-2 h-auto">
        START TODAY
      </Button>
    </CommanSection>

  )
}

