import Image from 'next/image'
import { ProblemType } from './types/ProblemTypes'

export default function Problem({
    heading,
    subHeading,
    problemImage
}: ProblemType) {
    return (
        <section id="problem">
            <div className="pt-[37%] lg:pt-[10%] container m-auto  text-center px-[5%] p-8 text-white">
                <h1 className="text-3xl lg:text-5xl mask-b-from-neutral-500 font-bold text-lime-400">{heading}</h1>
                <h3 className="text-2xl lg:text-4xl pt-[5%] mask-b-from-neutral opacity-60 font-semibold px-[3.5%]">{subHeading}</h3>
                <Image src={problemImage} alt='visual proof 2' className=' mx-auto pt-[5%]' />
            </div>
        </section>
    )
}