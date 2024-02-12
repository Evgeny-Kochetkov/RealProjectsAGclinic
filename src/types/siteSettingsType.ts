import { IService } from './servicesСategoryType'

export enum SiteSettingsActionType {
    CHANGE_SITE_SETTING = 'CHANGE_SITE_SETTING'
}

export interface SiteSettingsState {
    siteSettings: ISiteSettings | null;
}

export interface SiteSettingsAction {
    type: string;
    payload: ISiteSettings;
}

export interface ISiteSettings {
    id: number;
    city_id: number;
    phone: string[];
    short_phone: string[];
    address: string;
    schedule: string;
    start_schedule: string;
    end_schedule: string;
    logo: string;
    x: number;
    y: number;
    z: number;
    social_network: ISocialNetwork[];
    city: ICity;
    menu: IMenu[];
}

interface ISocialNetwork {
    id: number;
    name: string;
    url: string;
}

interface ICity {
    id: number;
    name: string;
    date_create: string;
    date_update: string;
}

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

interface ICategoty {
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