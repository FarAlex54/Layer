import React from 'react'
import './../../App.css';
import Container from 'react-bootstrap/Container';
import { AppContext } from '../../App';
import CardForServices from '../cards/CardForServices';
import Stocks from '../Stocks';
import PackagesNewTwo from '../PackagesNewTwo';


const ServicesPage = () => {
  const ServicesPageContext = React.useContext(AppContext);
  return (
    <div>
      <div className='bg-secondary'>
        <div className='name_block_dark text-light px-5'>Услуги</div>
        <Container className='d-flex flex-wrap'>

                      {[...Array(Object.keys(ServicesPageContext.services).length)].map((obj,i)=>{
                        return <div className='align-items-stretch col-xl-4 col-lg-4 col-md-5 col-sm-10 col-10 p-3'>
                                  <CardForServices 
                                                  id={ServicesPageContext.services[i].id_serv}
                                                  name={ServicesPageContext.services[i].name_serv}
                                                  path={ServicesPageContext.services[i].path_serv}
                                                  description={ServicesPageContext.services[i].description_serv}
                                    />
                              </div>
                      })}  
    
        </Container>
      </div>
      <Stocks/>
      <PackagesNewTwo/>
    </div>
  )
}

export default ServicesPage