import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";

import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import RegForm from './pages/RegistrationForm/RegForm';
import { store } from './store/store'


function App() {
  

  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registrationuser' element={<RegForm/>} />
    </Routes>
    </div>
    </Provider>
  );
}

export default App;
