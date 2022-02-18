import { useMutation } from 'react-query';
import { postLogin } from '../../api';
import { LoginError, LoginResponse } from '../../types';

const Home = (): JSX.Element => {
  const { mutate } = useMutation<
    LoginResponse,
    LoginError,
    { username: string; password: string }
  >(async ({ username, password }) => postLogin(username, password));

  return (
    <div>
      <input type="text" />
      <input type="password" />
      <button onClick={() => mutate({ username: 'hi', password: 'hi' })} type="submit">
        Login
      </button>
    </div>
  );
};
export default Home;
