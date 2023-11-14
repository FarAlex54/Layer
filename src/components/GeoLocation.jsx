import React, {useState} from 'react'
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';
import Container from 'react-bootstrap/esm/Container';

const GeoLocation = () => {
  return (
    <Container className='geolocation_map py-5'>
        <div className='name_block_light'>Наши клиенты</div>
        <YMaps>
            <div className=''>
              <Map instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }} width='100%' height={window.innerWidth/3}
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