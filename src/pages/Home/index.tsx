import { useState } from 'react';
import { useMutation } from 'react-query';
import { postLogin } from '../../api';
import { LoginError, LoginResponse } from '../../types';

const Home = (): JSX.Element => {
  const { mutate } = useMutation<
    LoginResponse,
    LoginError,
    { username: string; password: string }
  >(async ({ username, password }) => postLogin(username, password));

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
      <button onClick={() => mutate({ username, password })} type="submit">
        Login
      </button>
    </div>
  );
};
export default Home;
