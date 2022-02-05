import { useParams } from 'react-router-dom';
import { useFetchJedi } from '../../api/hooks';
import { JediResponse } from '../../types';

const JediDetails = (): JSX.Element => {
  const { jediId } = useParams();
  const { isLoading, data: response } = useFetchJedi(jediId || 'undefined', { staleTime: 5000, cacheTime: 5000 });
  const { status, data, error } = (response || {}) as JediResponse;

  /* ------------ Handle All Errors and use API Response Error ------------ */
  if (error && status && status !== 200) {
    const { detail } = error;

    return <div>{detail}</div>;
  }

  /* ------------ Handle Loading Data ------------ */
  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  /* ------------ Success Response with data ------------ */
  const { name } = data;

  return (
    <div>
      Name:
      {name}
    </div>
  );
};

export default JediDetails;
