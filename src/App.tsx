import React from "react";
import MainRouter from "./router";
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <MainRouter />
  </Provider>
);

export default App;
