import { PricingTypes } from "./types/PricingTypes";

export default function Pricing({
    title,
    subTitle,
    pricing,
    preTitle,
    ctmblock,
    cta,
    btnTitle

}: PricingTypes) {

    return (
        <section id="pricing">
            <div className="pt-[37%] lg:pt-[10%] container m-auto px-[5%] text-white">
                <h1 className="text-3xl pb-[5%] lg:text-5xl mask-b-from-neutral-500 font-bold lg:pb-[2%] text-center">{title}</h1>
                <p className="mx-16 text-md  lg:text-center pb-[5%] lg:text-xl font-light">{subTitle}</p>
                <div className="w-auto lg: flex m-auto p-4">
                    <div className="lg:flex gap-10 justify-center m-auto">
                        {pricing.map((price, index) => (
                            <div className="border border-emerald-950 p-4 mb-6 lg:w-[33%]" key={price.title}>
                                <h1 className="text-xl lg:text-2xl font-semibold my-3">{price.title}</h1>
                                <p className="text-3xl lg:text-4xl font-extrabold my-3 ">{price.price}</p>
                                <a className="border border-black font-extrabold bg-lime-400 text-black w-full py-3 rounded-2xl block text-center" href={price.link} target="_blank">{`${index === 2 ? 'Talk to us' : 'Buy Now'}`}</a>
                                <p className="text-lg lg:text-xl font-semibold mt-4">{preTitle}</p>
                                <div className="text-xl font-medium lg:text-2xl flex-col py-4">
                                    <p className="font-semibold py-1.5" >{price.l1}</p>
                                    <p className="font-semibold py-1.5" >{price.l2}</p>
                                    <p className="font-semibold py-1.5" >{price.l3}</p>
                                    <p className="font-semibold py-1.5" >{price.l4}</p>
                                    <p className="font-semibold py-1.5" >{price.l5}</p>
                                    <p className="font-semibold py-1.5" >{price.l6}</p>
                                </div>
                                <p className={`${index === 2 ? 'block  font-semibold mt-[-15%] mx-3' : 'hidden'}`}>{ctmblock} <a href={cta} target="_blank" className="underline ">{btnTitle}</a></p>

                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}