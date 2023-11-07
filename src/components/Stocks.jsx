import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Stocks = () => {
  return (
    <Container >
        <div className='row justify-content-center align-items-center bg-danger'>
            <h1>Акции компании</h1>
            <div className='col-xl-6 bg-primary'>
                <img className="img-fluid" src="/img/Stocks-1.png" alt="" />
            </div>
            <div className='col-xl-6 bg-success'>
                <img className="img-fluid" src="/img/Stocks-2.png" alt="" />
            </div>


        </div>
    </Container>
  )
}

export default Stocks