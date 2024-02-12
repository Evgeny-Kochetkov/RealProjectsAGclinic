import { ISeo } from '@/types/seoType'

export interface INews {
    author: string;
    city: ICity[];
    date_create: string;
    date_update: string;
    description: string;
    discount: number;
    end_of_term: string;
    id: number;
    img: string;
    main_img: string;
    preview_description: string;
    title: string;
    type: number;
    path: string;
    seo: ISeo;
}

interface ICity {
    id: number;
    name: string;
    date_create: string;
    date_update: string;
}