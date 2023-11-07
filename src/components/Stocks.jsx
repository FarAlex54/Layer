import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Stocks = () => {
  return (
    <Container >
        <div className='row justify-content-around align-items-center stocks'>
            <h1 className='pt-4 pb-5'>Акции компании</h1>
            <div className='col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 '>
                <img className="img-fluid" src="/img/Stocks-1.png" alt="" />
            </div>
            <div className='col-5 col-xl-5 col-lg-5 col-md-5 col-sm-5 '>
                <img className="img-fluid" src="/img/Stocks-2.png" alt="" />
            </div>
        </div>
    </Container>
  )
}

export default Stocks