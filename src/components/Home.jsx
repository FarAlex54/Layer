import React from 'react'
import Banner from './Banner';
import Services from './Services';
import InfoCommand from './InfoCommand';
import Stocks from './Stocks';
import GeoLocation from './GeoLocation';
import PackagesNewTwo from './PackagesNewTwo';
import { AppContext } from '../App';
import { useLocation } from "react-router";

const Home = () => {
  const HomeContext = React.useContext(AppContext);
  const location = useLocation();
  if(location.pathname==='/'){HomeContext.setThemeHeader('light')}
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