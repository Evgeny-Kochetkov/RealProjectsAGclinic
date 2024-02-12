import { IService } from './servicesСategoryType'
export interface IMenu {
    id: number;
    name: string;
    date_create: string;
    date_update: string;
    order: number;
    path: string;
    nested: 0 | 1;
    category: ICategoty[];
}

export interface ICategoty {
    date_create: string;
    date_update: string;
    description: string;
    id: number;
    img: string;
    level: number;
    parent_category: number;
    path: string;
    value: string;
    services?: IService[];
}