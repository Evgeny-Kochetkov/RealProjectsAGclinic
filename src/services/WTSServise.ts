import $api from '../http'
import { AxiosResponse } from 'axios'
const city = process.env.TOWN

export default class WTSServise {
    static async city(): Promise<AxiosResponse> {
        return $api.get('/api/city')
    }

    static async siteSettings(id: string): Promise<AxiosResponse> {
        return $api.get(`/api/site_settings/${id}`)
    }

    static async banners(id: string): Promise<AxiosResponse> {
        return $api.get(`/api/banners/city/${id}`)
    }

    static async menubar(id: string): Promise<AxiosResponse> {
        return $api.get(`/api/menu_bar/city/${id}`)
    }

    static async servicesСategory(id: string): Promise<AxiosResponse> {
        return $api.get(`/api/services_category/city/${id}`)
    }

    static async category(path: string): Promise<AxiosResponse> {
        return $api.get(`/api/services_category/path/${path}?city_id=${city}`)
    }

    static async service(path: string): Promise<AxiosResponse> {
        return $api.get(`/api/services/path/${path}?city_id=${city}`)
    }

    static async allServices(id: string): Promise<AxiosResponse> {
        return $api.get(`api/services/city/${id}`)
    }

    static async specialists(id: string): Promise<AxiosResponse> {
        return $api.get(`/api/specialist/city/${id}`)
    }

    static async specialist(path: string): Promise<AxiosResponse> {
        return $api.get(`/api/specialist/path/${path}`)
    }

    static async news(): Promise<AxiosResponse> {
        return $api.get('/api/publication?type=0')
    }

    static async newsItem(path: string): Promise<AxiosResponse> {
        return $api.get(`/api/publication/path/${path}?city_id=${city}`)
    }

    static async stocks(id: string): Promise<AxiosResponse> {
        return $api.get(`/api/publication/city/${id}?type=1`)
    }

    static async price(id: string): Promise<AxiosResponse> {
        return $api.get(`/api/price/section/tree?city_id=${id}`)
    }

    static async mainPagesSeo(param: string, id: string): Promise<AxiosResponse> {
        return $api.get(`/api/seo/info/${param}?city_id=${id}`)
    }

    static async partners(): Promise<AxiosResponse> {
        return $api.get(`/api/partners`)
    }

    static async reviews(id: string): Promise<AxiosResponse> {
        return $api.get(`/api/reviews/city/${id}`)
    }

    static async vacancies(id: string): Promise<AxiosResponse> {
        return $api.get(`/api/vacancy/city/${id}`)
    }

    static async addComment(city_id: string, name: string, description: string, img?: File): Promise<AxiosResponse> {
        const formData = new FormData()
        formData.append('city_id', city_id)
        formData.append('name', name)
        formData.append('description', description)
        if(img) {
            formData.append('img', img)
        }
        return $api.post(`/api/reviews`, formData)
    }

    static async document(): Promise<AxiosResponse> {
        return $api.get(`/api/documents`)
    }

    static async problems(id: string): Promise<AxiosResponse> {
        return $api.get(`api/troubles/city/${id}`)
    }

    static async signUp(city_id: string, name: string, phone: string, services?: string): Promise<AxiosResponse> {
        const formData = new FormData()
        formData.append('city_id', city_id)
        formData.append('name', name)
        formData.append('phone', phone)
        if(services) {
            formData.append('services', services)
        }
        return $api.post(`/api/recording_to_procedure`, formData)
    }

    static async recordingToSpecialist(city_id: string, name: string, phone: string, specialist: string): Promise<AxiosResponse> {
        const formData = new FormData()
        formData.append('city_id', city_id)
        formData.append('name', name)
        formData.append('phone', phone)
        formData.append('specialist_id', specialist)
        return $api.post(`/api/recording_to_specialist`, formData)
    }
}