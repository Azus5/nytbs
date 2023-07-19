import useSWR from 'swr'
import { axiosFetcherGET } from '@/services/api'

function useGenres() {
  const { data, error, isLoading } = useSWR('/lists/names.json', axiosFetcherGET)

  return {
    data,
    isLoading,
    error
  }
}

export default useGenres