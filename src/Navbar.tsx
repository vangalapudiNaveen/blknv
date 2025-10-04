'use client'
import Image from "next/image"
import { useState } from "react"
import { NavbarType } from "./types/NavbarTypes"

export default function Navbar({
    image,
    title,
    items
}: NavbarType) {
    const [isVisisble, setIsVisible] = useState(false)

    return (
        <section className="fixed top-16 lg:top-11 lg:left-0 w-full z-50 pointer-events-auto bg-black">
            <div className="container text-white py-4 m-auto p-2">
                <div className="flex justify-start lg:justify-between">
                    <Image src={image} className="h-8 lg:h-8 w-auto content-center my-2 ml-6" alt="NV Logo" />
                    <div className="mx-2 text-lg content-center w-[95%] lg: my-2  font-bold">{title}</div>
                    <div className="my-2 hidden lg:block content-center">
                        <nav className="flex gap-12 justify-between text-md font-bold max-w-screen w-max">
                            {items.map((val, index) => (
                                <div key={index}>
                                    <a href={val.links}>{val.item}</a>
                                </div>

                            ))}
                        </nav>
                    </div>
                    <div className="my-2 w-[33%] content-center lg:hidden ">
                        <a onClick={() => setIsVisible(!isVisisble)}>
                            <svg
                                className="h-8 w-10 text-white mx-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>

                        </a>
                    </div>
                </div>
                <div className={`${isVisisble ? 'block ' : 'hidden '}` + "bg-lime-300 text-black fixed w-full inset-0 z-50 lg:hidden"}>
                    <div>
                        <a className="float-right m-8" onClick={() => setIsVisible(!isVisisble)}>
                            <svg
                                className="h-6 w-10 text-black"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256" />
                                </g>
                            </svg>

                        </a>
                    </div>
                    <div className="flex-col justify-center mt-24">
                        {items.map((val, index) => (
                            <div key={index} className="text-center py-8 font-semibold text-2xl">
                                <a href={val.links} onClick={() => setIsVisible(!isVisisble)}>{val.item}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}