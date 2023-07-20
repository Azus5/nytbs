import useSWRImmutable from 'swr/immutable'
import { axiosFetcherGET } from '@/services/api'

function useGenres() {
  const { data, error, isLoading } = useSWRImmutable('/lists/names.json', axiosFetcherGET)

  return {
    data,
    isLoading,
    error
  }
}

export default useGenres