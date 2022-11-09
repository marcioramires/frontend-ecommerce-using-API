import axios from 'axios'

export const apiEcommerce = axios.create({
    baseURL: 'https://fakestoreapi.com/',
})
