import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { fetchJedis } from '..';
import { JedisResponse } from '../../types';
import { getLastUrlSegment } from '../../utils';

type Options = Omit<
  UseQueryOptions<JedisResponse, Error, JedisResponse, 'fetchJedis'>,
  'queryKey' | 'queryFn'
>;

export const useFetchJedis = (options?: Options): UseQueryResult<JedisResponse, Error> => {
  const query = useQuery('fetchJedis', fetchJedis, {
    ...options,
    select: (res: JedisResponse) => {
      /* ------------ Insert transform logic ------------ */
      if (res?.results) {
        /* ------------ Create id property via [url] value ------------ */
        const results = res?.results?.map((x) => ({
          ...x,
          id: getLastUrlSegment(x.url),
        }));

        return { ...res, results };
      }

      return res;
    },
  });

  return query;
};

export default useFetchJedis;
