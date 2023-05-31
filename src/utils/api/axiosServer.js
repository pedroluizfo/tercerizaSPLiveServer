import axios from 'axios'
import queryString from 'query-string'



export default function getAPIClient (ctx) {
   


    const baseUrl = 'http://localhost:8080/api/'

    // const token = localStorage.getItem('token')

    const axiosServer = axios.create({
    baseURL: baseUrl,
    paramsSerializer: params => queryString.stringify({ params })
    })

  
    return axiosServer
}