import { ISeo } from "./seoType";

export interface IPrices {
    date_create: string;
    date_update: string;
    id: number;
    value: string;
    category: ICategory[];
    path: string;
    seo: ISeo;
}

interface ICategory {
    date_create: string;
    date_update: string;
    id: number;
    value: string;
    section_id: number;
    price: IPrice[];
}

interface IPrice {
    date_create: string;
    date_update: string;
    id: number;
    category_id: number;
    cost: number;
    discount: IDiscount[];
    duration: number;
    notes: string | null;
    title: string;
}

interface IDiscount {
    id: number;
    city_id: number;
    price_id: number;
    discount_cost: number;
    discount_end: number;
}