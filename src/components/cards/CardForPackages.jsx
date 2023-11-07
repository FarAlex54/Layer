import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const CardForPackages = (props) => {
  return (
    <Card className="text-center packages_card">
        <Card.Title className='py-4' style={{color: '#363535'}}>{props.name}</Card.Title>
        <Card.Title className='packages_price py-4' style={{color: '#FFF',background:'#55A0E2'}}>{props.price}</Card.Title>
        <Card.Text className='py-2 packages_desc' style={{color: '#363535'}}>{props.description}</Card.Text>
        <Card.Footer >
            {[...Array(Object.keys(props.include).length)].map((obj,i)=>{
                return <Card.Text className='packages_text text-start row' style={{color: '#363535'}}>
                            <img className='col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 align-self-center img-fluid' src="./img/icons-package-on.png" alt="" />
                            <span className='col-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 text-start align-self-center'>{props.include[i]}</span>
                        </Card.Text>
            })}
            {[...Array(Object.keys(props.uninclude).length)].map((obj,i)=>{
                return <Card.Text className='packages_text text-start row' style={{color: '#363535'}}>
                            <img className='col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 align-self-center img-fluid' src="./img/icons-package-off.png" alt="" />
                            <span className='col-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 align-self-center text-decoration-line-through packages_uninclude'>{props.uninclude[i]}</span>
                        </Card.Text>
            })}
            <button className='packages_button text-light mt-5'>Заказать</button>
        </Card.Footer>
    </Card>

  )
}

export default CardForPackages