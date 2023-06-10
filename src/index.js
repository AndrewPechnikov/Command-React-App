import React from 'react';
import ReactDOM from 'react-dom/client';
import './glob_style/index.scss';
import RA1 from './components/RA-1';
import MainCard from './components/MainCard';
import RA3 from './components/RA-3';
import LatestNewsSection from './components/LatestNews/LatestNewsSection';

import poster from '../src/components/RA-1/card-img.jpg';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainCard
      title="The Lion King"
      date = "20 April"
      age = "+12"
      languageUA ="UA"
      languageEN = "EN"
    ></MainCard>
    <RA1
      movie={{
        title: 'Wonder Woman 1984',
        src: poster,
        alt: 'Wonder Woman 1984 Poster'
      }}
      btnLink={'#'}
    />

    <RA3></RA3>

    <LatestNewsSection></LatestNewsSection>

  </React.StrictMode>
);
