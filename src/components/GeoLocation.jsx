import React, {useState} from 'react'
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';
import Container from 'react-bootstrap/esm/Container';

const GeoLocation = () => {
  return (
    <Container className='geolocation_map py-1'>
        <div className='name_block_light' style={{width:'100%', marginLeft: '36px', marginBottom: '48px'}}>Наши клиенты</div>
        <YMaps>
            <div className='' style={{width:'100%', marginLeft: '36px', marginBottom: '68px'}}>
              <Map instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }} width='98%' height={window.innerWidth/3}
                defaultState={{ center: [55.727053, 37.570984], zoom: 15}}>

{/*                 <Placemark 
                  modules={["geoObject.addon.balloon"]}
                  defaultGeometry={[55.727053, 37.570984]}
                  properties={{
                    balloonContentBody:
                      "Моя локация"
                  }}/>  */}
              </Map>
            </div>
        </YMaps>
    </Container>
  )
}

export default GeoLocation