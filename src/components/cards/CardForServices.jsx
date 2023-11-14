import React from 'react'
import Card from 'react-bootstrap/Card';
import './../../App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const CardForServices = (props) => {
    const [checkDesc,setCheckDesc] = useState((typeof props.description !== "undefined")? true:false);
           
  return (
        <Card className='d-flex bg-secondary services_card pb-3' style={{height:'100%'}}>
            <div className='row m-3'>
                <div className='col-4 align-self-center'>
                    <img src={props.path} className='img-fluid' alt="" />
                </div>
                <div className='col-8 text-center align-self-center text-light'>
                    <Card.Title className='card_for_services'>{props.name}</Card.Title>
                </div>
            </div>
            <div className='row mx-3'>
                    <ul className='ul'>
                        {(checkDesc)? ([...props.description].map((obj,i)=><li>{obj}</li>)):''}
                    </ul>
            </div>

            <div className='row align-self-center' style={{height:'100%'}}>{(checkDesc)? 
                <Button className='align-self-end'>Заказать</Button>:''}
            </div>
        </Card>

  )
}

export default CardForServices