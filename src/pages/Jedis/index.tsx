import { Link } from 'react-router-dom';
import { useFetchJedis } from '../../api/hooks';

const Jedis = (): JSX.Element => {
    /* { staleTime: Infinity } only triggers refetch if data does not exist in cache */
    const { data } = useFetchJedis({ staleTime: Infinity });

    return (
      <div>
        {data?.results?.map((x) => (
          <Link key={x.id} to={`/jedis/${x.id}`}>{x.name}</Link>
      ))}
      </div>
    );
};

export default Jedis;
