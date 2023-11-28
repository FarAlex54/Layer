import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CardForServices from './cards/CardForServices';
import { AppContext } from '../App';

const Services = () => {
  const ServicesContext = React.useContext(AppContext);
/*   ServicesContext.useLocationChange((location) => { 
    console.log('handle route change here', location)}) */
/*   ServicesContext.setThemeHeader('light');
  console.log('ServicesContext.setThemeHeader = ',ServicesContext.themeHeader); */
  return (
    <div className='' style={{background:'#444856'}}>
      <Container className='d-flex flex-wrap justify-content-center'>
                    {[...Array(Object.keys(ServicesContext.services).length)].map((obj,i)=>{
                      return <div className='col-xl-4 col-lg-4 col-md-4 col-sm-5 col-5 p-sm-1 p-md-2 p-lg-3 p-1'>
                                <CardForServices 
                                                  id={ServicesContext.services[i].id_serv}
                                                  name={ServicesContext.services[i].name_serv}
                                                  path={ServicesContext.services[i].path_serv}
                                                  description={ServicesContext.services[i].description_serv}
                                  />
                             </div>
                    })}
      </Container>
    </div>
  )
}

export default Services