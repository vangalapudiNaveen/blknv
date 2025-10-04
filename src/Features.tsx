import Image from "next/image";
import { FeaturesTypes } from "./types/FeaturesTypes";

export default function Features({
    heading,
    features
}: FeaturesTypes) {

    return (
        <section id="features">
            <div className="pt-[37%] lg:pt-[15%] container m-auto  text-center px-[5%] p-8 text-white">
                <h1 className="text-3xl lg:text-5xl mask-b-from-neutral-500 font-bold text-lime-400">{heading}</h1>
                <div className="grid grid-cols-1 gap-10 lg:gap-24 pt-[5%]">
                    {features.map((feature, index) => (
                        <div className={`lg:flex gap-3 content-center` + `${index % 2 == 0 ? ' flex-row' : '  flex-row-reverse '}`} key={feature.title}>
                            <div className="my-auto w-auto lg:w-[80%]">
                                <h1 className="text-3xl lg:text-5xl my-6 font-semibold">{feature.title}</h1>
                                <p className="text-sm my-4 lg:text-xl font-normal mx-12">{feature.description}</p>
                            </div>
                            <div >
                                <Image src={feature.source} alt="visual" className={`p-6 rounded-2xl` + ` ${feature.colour}`} />

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}