import Image from "next/image"
import { ReviewTypes } from "./types/ReviewTypes"

export default function Reviews({
    title,
    reviews
}: ReviewTypes) {

    return (
        <section>
            <div className="container m-auto pt-[15%] text-center px-[5%] p-8 text-white mx-auto">
                <h1 className="text-3xl lg:text-5xl mask-b-from-neutral-500 font-bold">{title}</h1>
                <div className="lg:grid grid-cols-3 pt-8 justify-between font-semibold">
                    {reviews.map((review) => (
                        <div key={review.name} className="p-16 lg:text-sm border w-auto border-black text-black bg-lime-400 mx-4 my-4 px-8 rounded-2xl content-center">
                            <Image src={review.profile} alt={review.name} className="rounded-full aspect-square h-30 w-auto mx-auto" />
                            <p className="pt-3">{review.title}</p>
                            <p className="pt-3">{review.rating}</p>
                            <p className="pt-3">{review.name}</p>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}