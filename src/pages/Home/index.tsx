import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchJedis } from '../../api';
import { RootState } from '../../store';
import { clearUserDetails, updateUserDetails } from '../../store/userDetails/action';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const { data } = useQuery('fetchJedis', fetchJedis);

  const userDetails = useSelector((state: RootState) => state.userDetails);

  return (
    <div>
      Home
      <input
        type="text"
        onChange={(e) => {
          dispatch(updateUserDetails('name', e.target.value));
        }}
        value={userDetails.name}
      />
      <Link to="/jedis">
        Jedis(
        {data?.count})
      </Link>
      <button
        type="button"
        onClick={() => {
          dispatch(clearUserDetails());
        }}
      >
        Clear Name
      </button>
    </div>
  );
};

export default Home;
