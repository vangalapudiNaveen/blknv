import { StaticImageData } from "next/image";

export type HeroType = {
    Heading: string;
    subHeading: string;
    BtnLabel: string;
    ctaURL: string;
    heroImage: StaticImageData
}