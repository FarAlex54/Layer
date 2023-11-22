import React from 'react'
import Banner from './Banner';
import Services from './Services';
import InfoCommand from './InfoCommand';
import Stocks from './Stocks';
import GeoLocation from './GeoLocation';
import PackagesNewTwo from './PackagesNewTwo';

const Home = () => {
  return (
    <div>
        <Banner />
        <Services/>
        <InfoCommand/>
        <PackagesNewTwo/>
        <Stocks/>
        <GeoLocation />
    </div>
  )
}

export default Home