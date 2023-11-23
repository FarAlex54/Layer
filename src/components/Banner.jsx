import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {motion} from 'framer-motion';


const Banner = () => {
  const [changeSlide,setChangeSlide] = useState(1);

  return (
    <div className='banner'>
    <Carousel
      /* fade */
      slide={false}
      controls={false}
      indicators={false}
      interval={4000}
      onSlid={()=>(changeSlide===1)? setChangeSlide(2):setChangeSlide(1)}
      
      >
      <Carousel.Item>
        <motion.img
          key={changeSlide}
          src="/img/banner1.jpg"
          style={{width:'100%', height:'49vw'}}
          alt=""
          initial={{ scale: 1 }}
          animate={{ scale: 1.3}}
          transition={{duration: 5}}
        />
        <Carousel.Caption className='carusel_caption'>
          <div className='d-flex row' style={{height:'100%'}}>
            <div className='col-auto'>
              <h1 className='carusel_h1'>Бухгалтер / Финансист / Юрист / Аудитор</h1>
            </div>
            <div>
              <p className='carusel_p'>надежный опыт с 2004 года для оперативного решения нестандартных и сложных задач</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <motion.img
          key={changeSlide}
          src="/img/banner2.jpg"
          style={{width:'100%', height:'49vw'}}
          alt=""
          initial={{ scale: 1 }}
          animate={{ scale: 1.3}}
          transition={{duration: 5 }}
        />
        <Carousel.Caption className='carusel_caption'>
          <div className='d-flex row' style={{height:'100%'}}>
            <div className='col-auto'>
              <h1 className='carusel_h1'>Бухгалтер / Финансист / Юрист / Аудитор</h1>
            </div>
            <div>
              <p className='carusel_p'>надежный опыт с 2004 года для оперативного решения нестандартных и сложных задач</p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner