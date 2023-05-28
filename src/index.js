import React from 'react';
import ReactDOM from 'react-dom/client';
import './glob_style/index.scss';
import RA1 from './components/RA-1';
import MainCard from './components/MainCard';
import RA3 from './components/RA-3';
import RA4 from './components/RA-4';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RA1></RA1>
    <MainCard
       title="The Lion King"
       date = "20 April"
       age = "+12"
       languageUA ="UA"
       languageEN = "EN"
    ></MainCard>
    <RA3></RA3>
    <RA4></RA4>
  </React.StrictMode>
);
