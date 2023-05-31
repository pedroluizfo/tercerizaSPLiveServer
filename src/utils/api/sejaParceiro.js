import { axiosClient } from "./axiosClient"


const sejaParceiroApi = {
  create: (params) => axiosClient.post(`/sejaParceiro/create`, params),
  update: (params,id) => axiosClient.put(`sejaParceiro/update/${id}`, params),
  getOne: (id) => axiosClient.get(`sejaParceiro/get/${id}`),
  getAll: () => axiosClient.get('sejaParceiro'),    
  delete: (id) => axiosClient.delete(`sejaParceiro/${id}`)
}

export default sejaParceiroApi