import { StaticImageData } from "next/image"
import { NavItems } from "./NavItemsTypes";
import { PoliciesTypes } from "./PoliciesTypes";

export type Footertypes = {
    logo: StaticImageData;
    title: string;
    subTitle: string;
    navTags: NavItems[];
    contactsTitle: string;
    email: string;
    phone: string;
    policies: PoliciesTypes[];
    tagline: string

}