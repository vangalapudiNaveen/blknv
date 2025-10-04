import Image from "next/image";
import { Footertypes } from "./types/FooterTypes";

export default function Footer({
    logo,
    title,
    subTitle,
    navTags,
    contactsTitle,
    email,
    phone,
    policies,
    tagline

}: Footertypes) {

    return (
        <section className="bg-lime-400">
            <div className="container p-8 text-black mx-auto">
                <div className="lg:flex justify-between items-center">
                    <div className="lg:flex-row justify-center items-center lg:w-[30%]">
                        <span className="flex">
                            <Image src={logo} className="h-8 lg:h-8 w-auto content-center mx-2" alt="NV Logo" />
                            <p className="my-2 text-lg font-semibold">{title}</p>
                        </span>
                        <p className="text-md font-extralight lg:mx-4">{subTitle}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3 items-center mb-8 lg:mb-0">
                        {navTags.map((nav, index) => (
                            <a key={index} href={nav.links}>{nav.item}</a>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-3 items-center mb-8 lg:mb-0">
                        <p className="font-bold underline">{contactsTitle}</p>
                        <a href="">{email}</a>
                        <a href="">{phone}</a>
                        <a href=""></a>
                    </div>
                    <div className="grid grid-cols-1 gap-3 items-center">
                        {policies.map((policy, index) => (
                            <a key={index} href={policy.link} target="_blank">{policy.name}</a>
                        ))}
                    </div>


                </div>
                <div className="border border-t-2 my-4 mx-auto"></div>
                <div>{tagline}</div>


            </div>
        </section>
    )
}