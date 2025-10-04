import { CallToActionTypes } from "./types/CallToActionTypes";

export default function CallToAction({
    title,
    ctaURL,
    ctaBtn
}: CallToActionTypes) {
    return (
        <section id="booknow">
            <div className="pt-[37%] lg:pt-[15%] container h-1/2 m-auto p-8 text-center px-[5%] pb-[5%] text-white">
                <h1 className="text-3xl lg:text-5xl mask-b-from-neutral-500 font-bold pb-[5%] text-center">{title}</h1>
                <a href={ctaURL} target="_blank" className="border border-black bg-lime-400 text-black font-extrabold rounded-full px-6 py-3  text-center">{ctaBtn}</a>
            </div>
        </section>
    )
}