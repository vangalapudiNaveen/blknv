import Image from 'next/image'
import { HeroType } from './types/HeroTypes'

export default function Hero({
    Heading,
    subHeading,
    BtnLabel,
    ctaURL,
    heroImage
}: HeroType) {
    return (
        <section id="hero">
            <div className="container px-[5%] p-8 m-auto text-white">
                <h1 className="text-4xl pt-[40%] lg:text-8xl text-center lg:pt-[20%]  text-lime-400 font-bold px-auto">{Heading}</h1>
                <p className="text-xl pb-[5%]  lg:text-4xl text-center opacity-50 pt-[5%] lg:pb-[2%] font-semibold ">{subHeading}</p>
                <a href={ctaURL} target="_blank" className="bg-lime-400 text-black font-extrabold rounded-3xl px-6 py-3 mx-auto w-[40%] lg:w-[15%] text-center block">{BtnLabel}</a>
                <Image src={heroImage} alt='visual-proof' className='rounded-2xl pt-[5%] lg:pt-[2%] mx-auto opacity-80' />
            </div>
        </section>
    )
}