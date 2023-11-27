import React from 'react'
import Banner from './Banner';
import Services from './Services';
import InfoCommand from './InfoCommand';
import Stocks from './Stocks';
import GeoLocation from './GeoLocation';
import PackagesNewTwo from './PackagesNewTwo';
import { AppContext } from '../App';

const Home = () => {
  const HomeContext = React.useContext(AppContext);
  HomeContext.setThemeHeader('dark');
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