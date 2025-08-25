import { SlArrowUp } from "react-icons/sl"

const HighlightsSpecifications = () => {
  return (
    <section className="highlights_specifications relative  w-full h-screen px-[20px] lg:px-[100px] py-[40px] lg:py-[100px] bg-white">
      <div className="heading">
        <h2 className="text-primaryred font-sangbleu uppercase max-w-[90%] lg:max-w-[70%] tracking-[2px] leading-[40px] text-[13px] lg:text-[20px]">
          THE HIGH POINTS Of ESTATE RESIDENCES
        </h2>
      </div>

      <div className="highlights">
        <div className="top_nav relative flex  flex-wrap items-center text-primaryred font-sangbleu uppercase">
          <div className="heading basis-[20%]"><h3>highlights</h3></div>
          <div className="basis-[25%] w-full text-center h-[1px] bg-black"></div>
          <div className="basis-[10%] flex justify-center"><SlArrowUp size={30} /></div>
          <div className="basis-[25%] text-center w-full h-[1px] bg-black"></div>
          <div className="close basis-[20%] text-end"><h3>close</h3></div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsSpecifications