import React from 'react'
import Banner from './Banner';
import Services from './Services';
import InfoCommand from './InfoCommand';
import Packages from './Packages';
import Stocks from './Stocks';
import GeoLocation from './GeoLocation';
import PackagesNew from './PackagesNew';

const Home = () => {
  return (
    <div>
        <Banner/>
        <Services/>
        <InfoCommand/>
        <PackagesNew/>
        <Packages/>
        <Stocks/>
        <GeoLocation />
    </div>
  )
}

export default Home