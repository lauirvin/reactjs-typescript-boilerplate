import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventDetails from '../pages/JediDetails';
import Jedis from '../pages/Jedis';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="jedis" element={<Jedis />} />
      <Route path="jedis/:jediId" element={<EventDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
