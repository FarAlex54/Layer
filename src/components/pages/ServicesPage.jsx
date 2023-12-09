import React, { useEffect } from 'react'
import './../../App.css';
import Container from 'react-bootstrap/Container';
import { AppContext } from '../../App';
import CardForServices from '../cards/CardForServices';
import Stocks from '../Stocks';
import PackagesNewTwo from '../PackagesNewTwo';
import { useLocation } from "react-router";


const ServicesPage = () => {
  const ServicesPageContext = React.useContext(AppContext);
  const location = useLocation();
  useEffect(() => {
    if(location.pathname==='/services'){ServicesPageContext.setThemeHeader('dark')}
  }, []);

  return (
    <div>
      <div className='bg-secondary'>
        <div className='name_block_dark text-light px-5'>Услуги</div>
        <Container className='d-flex flex-wrap'>
                      {ServicesPageContext.services.map((obj,i)=>
                              <div key={obj.id+'page'} className='align-items-stretch col-xl-4 col-lg-4 col-md-5 col-sm-10 col-10 p-3'>
                                  <CardForServices uniqKey={obj.id+'page'}
                                                  id={obj.id}
                                                  name={obj.name}
                                                  path={obj.path}
                                                  description={obj.description}
                                    />
                              </div>
                      )}  
    
        </Container>
      </div>
      <Stocks/>
      <PackagesNewTwo keys={'Service'}/>
    </div>
  )
}

export default ServicesPage