import { ISeo } from '@/types/seoType'

export interface ICategoryServices {
    id: number;
    img: string;
    date_create: string;
    date_update: string;
    level: number;
    parent_category: number;
    value: string;
    description: string;
    path: string;
    services: IService[];
    seo: ISeo;
}
  
export interface IService {
    id: number;
    category_id: number;
    date_create: string;
    date_update: string;
    main_img: string;
    preview_description: string;
    preview_img: string;
    text: string;
    title: string;
    path: string;
    seo: ISeo;
    troubles: string;
}
  
/* interface IDescription {
    name: string;
    desc: IParagraph[];
}
  
interface IParagraph {
    border: boolean;
    text?: string;
    ul?: string[]
} */