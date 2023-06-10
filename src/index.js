import React from 'react';
import ReactDOM from 'react-dom/client';
import './glob_style/index.scss';
import RA1 from './components/RA-1';
import MainCard from './components/MainCard';
import RA3 from './components/RA-3';
import EventSection from './components/EventSection/EventSection';
import LatestNewsMainBlock from './components/RA-4/LatestNewsMainBlock';

import poster from '../src/components/RA-1/card-img.jpg';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MainCard
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
    <LatestNewsMainBlock 
      title='New American films on the screen of Nizami Cinema Center'
      date='25.06.2022'
      news='US-produced "Independence Day: Revival" at Nizami Cinema Center. "Neighbours. 2 in wartime ”films have been shown. "Independence Day: Revival" is based on a screenplay by Nicholas Wright and directed by Roland Emmerich in the genres of science fiction, adventure and war. Slogan: “We had 20 years to prepare.'
    /> */}
    <EventSection/>

    
  </React.StrictMode>
);
