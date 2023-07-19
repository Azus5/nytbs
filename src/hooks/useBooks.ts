import useSWR from 'swr'
import { axiosFetcherGET } from '@/services/api'

type Params = {
  list: string,
  'bestsellers-date'?: string, // YYYY-MM-DD
  'published-date'?: string,
  offset?: number
}

function useBooks(params: Params) {
  const { data, error, isLoading, mutate } = useSWR(['/lists.json', params], ([url, params]) => axiosFetcherGET(url, params))

  return {
    data,
    isLoading,
    error,
    mutate
  }
}

export default useBooks