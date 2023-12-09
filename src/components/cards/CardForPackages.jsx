import React from 'react'
import Button from 'react-bootstrap/esm/Button';

const CardForPackages = (props) => {
  return (
    <div className='mt-2 mb-3'>
      <div className=''><h4>{props.name}</h4></div>
      <div className='' style={{background:'#55A0E2'}}><h4 className='text-light'>{props.price}</h4></div>
      <div className=''>{props.description}</div><hr />
      {props.include.map((obj,i)=>
                 <div key={props.keys+'inc'+i} className='text_footer text-start'>
                            <img className='col-1 align-self-center img-fluid' src="./img/icons-package-on.png" alt="" />
                            <span className=''>{obj}</span>
                        </div>
      )}
       {props.uninclude.map((obj,i)=>
                <div key={props.keys+'uninc'+i} className='text_footer text-start'>
                            <img className='col-1 align-self-center img-fluid' src="./img/icons-package-off.png" alt="" />
                            <span className='text-decoration-line-through text-secondary'>{obj}</span>
                        </div>
      )}
      <Button className='mt-2 mb-3' style={{background:'#55A0E2', border:'0px'}}>Заказать</Button>
    </div>
  )
}

export default CardForPackages
