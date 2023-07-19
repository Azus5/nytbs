import axios from 'axios'

// axios config
axios.defaults.baseURL = 'https://api.nytimes.com/svc/books/v3/'
axios.defaults.params = { 'api-key': import.meta.env.VITE_API_KEY }

export const axiosFetcherGET = (url: string) => axios.get(url).then(res => res.data)
