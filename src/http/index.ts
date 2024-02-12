import axios from 'axios'

const $api = axios.create({
    baseURL: process.env.API_URL || 'https://api.agclinic.ru'
})

$api.interceptors.request.use((config) => {
    return config
})

export default $api

/* export const API_URL = */ /* 'https://api.agclinic.ru'  'https://agclinic.backend.demowts.ru' *//* process.env.API_URL */