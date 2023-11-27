import React from 'react'
import Button from 'react-bootstrap/esm/Button';

const CardForPackages = (props) => {
  return (
    <div className='mt-2 mb-3'>
      <div className=''><h4>{props.name}</h4></div>
      <div className='bg-info'><h4>{props.price}</h4></div>
      <div className=''>{props.description}</div><hr />
      {[...Array(Object.keys(props.include).length)].map((obj,i)=>{
                return <div className='text_footer text-start'>
                            <img className='col-1 align-self-center img-fluid' src="./img/icons-package-on.png" alt="" />
                            <span className=''>{props.include[i]}</span>
                        </div>
      })}
       {[...Array(Object.keys(props.uninclude).length)].map((obj,i)=>{
                return <div className='text_footer text-start'>
                            <img className='col-1 align-self-center img-fluid' src="./img/icons-package-off.png" alt="" />
                            <span className='text-decoration-line-through text-secondary'>{props.uninclude[i]}</span>
                        </div>
      })}
      <Button className='mt-2 mb-3' >Заказать</Button>
    </div>
  )
}

export default CardForPackages