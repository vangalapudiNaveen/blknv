import { AnnouncementType } from "./types/AnnouncementTypes";

export default function Announcement({
    bgColor,
    heading,
    subHeading,
    cta,
    buttonLabel
}: AnnouncementType) {

    return (
        <section>
            <p className={`px-5 font-light text-black lg:mx-auto w-full py-3 lg:font-extralight text-sm text-center fixed  z-50 ` + `${bgColor}`}>{heading}<span className="block lg:inline">{subHeading} <a href={cta} target="_blank" className="underline">{buttonLabel}</a></span></p>
        </section>
    )
}