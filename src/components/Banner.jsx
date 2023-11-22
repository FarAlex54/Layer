import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {motion} from 'framer-motion';


const Banner = () => {
  return (
    <div className='banner'>
    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item>
        <motion.img
          src="/img/banner1.jpg"
          style={{width:'100%', height:'49vw'}}
          alt=""
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay:0
          }}
          exit={{ opacity: 1 }}
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
            src="/img/banner2.jpg"
            style={{width:'100%', height:'49vw'}}
            alt=""
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay:0
            }}
            exit={{ opacity: 1 }}
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