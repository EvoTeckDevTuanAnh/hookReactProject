import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from './component/layout/Sidebar';
import Header from './component/layout/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container-fluid " >
    <div className="row ">
      <BrowserRouter>
        <div className="col-2 px-0">
          <Sidebar />
        </div>
        <div className="col-10 h-100 px-0">
          <Header />

          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
