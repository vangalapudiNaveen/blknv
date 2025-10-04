import { PainpointsTypes } from "./types/PainpointsTypes";

export default function Painpoints({
    heading,
    painpoints
}: PainpointsTypes) {

    return (
        <section id="painpoints">
            <div className="lg:pt-[15%] container m-auto  text-center px-[5%] p-8 text-white">
                <h1 className="text-3xl px-[15%] lg:text-5xl mask-b-from-neutral-500 font-bold text-lime-400 pb-[5%]">{heading}</h1>
                <div className="lg:flex justify-center items-center">
                    {
                        painpoints.map((points, index) => (
                            <div key={index} className="pb-[15%] lg:pb-0">
                                <div>
                                    <h1 className="text-xl px-12 lg:text-2xl my-6  font-semibold">{points.name}</h1>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
        </section>
    )
}