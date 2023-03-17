import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const delNumber = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const updateInfo = (changedInfo) => {
  const request = axios.put(`${baseUrl}/${changedInfo.id}`, changedInfo)
  return request.then(response => response.data)
}

export default { 
  getAll: getAll, 
  create: create, 
  delNumber: delNumber,
  updateInfo: updateInfo
}