import { ISeo } from '@/types/seoType'

export interface ISpecialists {
    biography: string;
    date_create: string;
    date_update: string;
    experience: number;
    fio: string;
    id: number;
    main_description: string;
    main_img: string;
    path: string;
    preview_description: string;
    preview_img: string;
    specialization: string;
    specializations: ISpecialization[];
    beforeAfter: IBeforeAfter[];
    seo: ISeo;
    certificate: ICertificate[];
}

interface ISpecialization {
    title: string;
    path: string;
}

interface IBeforeAfter {
    after_img: string;
    before_img: string;
    date_create: string;
    date_update: string;
    id: number;
    specialist_id: number;
    title: string;
}

interface ICertificate {
    id: number;
    specialist_id: number;
    url: string | string[];
    status: 0 | 1;
    date_create: string;
    date_update: string;
}