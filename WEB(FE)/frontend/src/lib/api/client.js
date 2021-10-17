import axios from 'axios'

const client = axios.create({
  headers: {
    Authorization: `Token ${localStorage.getItem('token')}`,
  },
  withCredentials: true,
})

export default client;