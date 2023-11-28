import React from 'react'
import Card from 'react-bootstrap/Card';
import './../../App.css';
import Button from 'react-bootstrap/Button';


const CardForServices = (props) => {
          
  return (
        <Card className='d-flex bg-secondary' style={{height:'100%'}}>
            <div className='row m-1'>
                <div className='col-4 align-self-center'>
                    <img src={props.path} className='img-fluid' alt="" />
                </div>
                <div className='col-8 text-center align-self-center text-light'>
                        <span className='font_h'>{props.name}</span>
                </div>
            </div>
            <div className='row mx-3'>
                    <ul className='ul'>
                        {([...props.description].map((obj,i)=><li><span className='font_p'>{obj}</span></li>))}
                    </ul>
            </div>
            <div className='row align-self-center pb-2' style={{height:'100%'}}> 
                <Button className='align-self-end'>Заказать</Button>
            </div>
        </Card>

  )
}

export default CardForServices