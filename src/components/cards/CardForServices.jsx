import React from 'react'
import Card from 'react-bootstrap/Card';


const CardForServices = (props) => {
  return (

        <Card className='bg-secondary services_card'>
            <div className='row m-3'>
                <div className='col-4 align-self-center'>
                    <img src={props.path} className='img-fluid' alt="" />
                </div>
                <div className='col-8 text-center align-self-center text-light'>
                    <Card.Title>{props.name}</Card.Title>
                </div>
            </div>
        </Card>

  )
}

export default CardForServices