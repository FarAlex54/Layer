import React from 'react'
import Button from 'react-bootstrap/esm/Button';

const CardForPackages = (props) => {
  return (
    <div className='mt-2 mb-3'>
      <div className=''><h4>{props.name_p}</h4></div>
      <div className='bg-info'><h4>{props.price_p}</h4></div>
      <div className=''>{props.description_p}</div><hr />
      {[...Array(Object.keys(props.include_p).length)].map((obj,i)=>{
                return <div className='text_footer text-start'>
                            <img className='col-1 align-self-center img-fluid' src="./img/icons-package-on.png" alt="" />
                            <span className=''>{props.include_p[i]}</span>
                        </div>
      })}
       {[...Array(Object.keys(props.uninclude_p).length)].map((obj,i)=>{
                return <div className='text_footer text-start'>
                            <img className='col-1 align-self-center img-fluid' src="./img/icons-package-off.png" alt="" />
                            <span className='text-decoration-line-through text-secondary'>{props.uninclude_p[i]}</span>
                        </div>
      })}
      <Button className='mt-2 mb-3' >Заказать</Button>
    </div>
  )
}

export default CardForPackages