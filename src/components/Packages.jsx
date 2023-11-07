import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardForPackages from './cards/CardForPackages';
import { AppContext } from '../App';
import Container from 'react-bootstrap/esm/Container';

const Packages = () => {
  const PackagesContext = React.useContext(AppContext);
  return (
    <div className='bg-secondary'>
        <h1 className='text-light px-5'>Пакеты услуг</h1>
        <Container className='d-flex flex-wrap justify-content-center'>
            {[...Array(Object.keys(PackagesContext.packages).length)].map((obj,i)=>{
                return <div className='col-xl-4 col-lg-4 col-md-5 col-sm-10 col-10 p-3'>
                            <CardForPackages 
                                id={PackagesContext.packages[i].id}
                                name={PackagesContext.packages[i].name}
                                price={PackagesContext.packages[i].price}
                                description={PackagesContext.packages[i].description}
                                include={PackagesContext.packages[i].include}
                                uninclude={PackagesContext.packages[i].uninclude}
                            />
                        </div>
            })}
        </Container>
    </div>
  )
}

export default Packages