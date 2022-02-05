import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { fetchJedi } from '..';
import { JediResponse } from '../../types';

type Options = Omit<
  UseQueryOptions<JediResponse, Error, JediResponse, string[]>,
  'queryKey' | 'queryFn'
>;

export const useFetchJedi = (id: string, options?: Options): UseQueryResult<JediResponse, Error> =>
  useQuery(['fetchJedi', id], () => fetchJedi(id), options);

export default useFetchJedi;
