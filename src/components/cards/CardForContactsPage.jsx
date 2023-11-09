import React from 'react'

const CardForContactsPage = (props) => {
  return (
    <div className='col-3 m-2 card_for_contacts'>
        <div className='row'>
            <div className='col-2 align-self-center'>
                <img className='' src="/img/phoneIcon.png" style={{width:'2vw'}}alt="" />
            </div>
            <div className='col h2Pages pPages pt-1' style={{color:'#F4F4F4'}}>
                {props.name}
            </div>
        </div>
        <div className='row'>
            <div className='col-fill'>
                <p style={{color:'#F4F4F4'}}>{props.value}</p>
            </div>
        </div>
    </div>
  )
}

export default CardForContactsPage