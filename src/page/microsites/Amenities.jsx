import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"

const Amenities = () => {
    return (
        <section className="amenities relative  w-full h-screen px-[20px] lg:px-[100px] py-[40px] lg:py-[100px] bg-[#FBF6F6]">
            <div className="heading">
                <h2 className="text-primaryred font-sangbleu uppercase max-w-[90%] lg:max-w-[70%] tracking-[2px] leading-[40px] text-[13px] lg:text-[20px]">
                    Stunning Luxury Prime Residences, Designed For Life
                </h2>
            </div>

            <div className="grid grid-cols-12 py-10">
                <div className="col-span-6 border-r pr-10">
                    <div className="flex gap-10 ">
                        <div className="amenity bg-transparent hover:bg-red-600 hover:border-0 border rounded-full p-5">
                            <img src="/assets/microsites/estate-residences/amenities/black/1.png" alt="" className="w-[50px] h-[50px]" />
                        </div>
                        <div className="amenity bg-transparent hover:bg-red-600 hover:border-0 border rounded-full p-5">
                            <img src="/assets/microsites/estate-residences/amenities/black/2.png" alt="" className="w-[50px] h-[50px]" />
                        </div>
                        <div className="amenity bg-transparent hover:bg-red-600 hover:border-0 border rounded-full p-5">
                            <img src="/assets/microsites/estate-residences/amenities/black/3.png" alt="" className="w-[50px] h-[50px]" />
                        </div>
                        <div className="amenity bg-transparent hover:bg-red-600 hover:border-0 border rounded-full p-5">
                            <img src="/assets/microsites/estate-residences/amenities/black/4.png" alt="" className="w-[50px] h-[50px]" />
                        </div>
                        <div className="amenity bg-transparent hover:bg-red-600 hover:border-0 border rounded-full p-5">
                            <img src="/assets/microsites/estate-residences/amenities/black/5.png" alt="" className="w-[50px] h-[50px]" />
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="flex gap-10 items-center ps-20">
                        <div className="opacity-70 flex gap-2 justify-end items-center h-full">
                            <div className="amenities-button-prev cursor-pointer">
                                <IoIosArrowRoundBack size={40} />
                            </div>
                            <div className="amenities-button-next cursor-pointer">
                                <IoIosArrowRoundForward size={40} />
                            </div>
                        </div>
                        <div className="amenities-counter font-sangbleu">
                            <div className="counter text-4xl mb-3">
                                01- <span className="text-xl">18</span>
                            </div>
                            <div className="title uppercase tracking-wide text-xl">exclusive amenities</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 py-10">
                <div className="col-span-5">
                    <div className="amenityImg">
                        <img src="/assets/microsites/estate-residences/amenities/swimming-pool.png" alt="" />
                    </div>
                </div>
                <div className="col-span-7">
                    <div className="amenity_about px-20 flex flex-col w-full h-full justify-center">
                        <div className="title font-sangbleu mb-5 text-[13px] lg:text-[20px] leading-[35px]">Leisure All Weather <br /> Swimming Pool</div>
                            <div className="description leading-[30px]">The Estate Residences by Anant Raj Limited is a unique condominium complex, offering apartments designed with Indian values in mind and boasting unobstructed views of the protected Aravalli Range.</div>
                        
                    </div>
                </div>
            </div>
            <img
                src="./assets/pattern-bg.png"
                alt="pattern-bg"
                className="h-[70px] bg-[#FBF6F6] absolute left-0 bottom-0 w-full object-cover"
            />
        </section>
    )
}

export default Amenities