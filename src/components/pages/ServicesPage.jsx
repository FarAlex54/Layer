import React from 'react'
import './../../App.css';
import Container from 'react-bootstrap/Container';
import { AppContext } from '../../App';
import CardForServices from '../cards/CardForServices';
import Stocks from '../Stocks';
import Packages from '../Packages';
import PackagesNew from '../PackagesNew';


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
                                                    id={ServicesPageContext.services[i].id}
                                                    name={ServicesPageContext.services[i].name}
                                                    path={ServicesPageContext.services[i].path}
                                                    description={ServicesPageContext.services[i].description}
                                    />
                              </div>
                      })}  
    
        </Container>
      </div>
      <Stocks/>
      {/* <Packages/> */}
      <PackagesNew/>
    </div>
  )
}

export default ServicesPage