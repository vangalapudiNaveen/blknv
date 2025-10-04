import { StaticImageData } from "next/image";
import { NavItems } from "./NavItemsTypes"

export type NavbarType = {
    image: StaticImageData;
    title: string;
    items: NavItems[]
}