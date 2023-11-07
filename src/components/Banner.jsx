import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';


const Banner = () => {
  return (
    <Carousel slide={false} indicators={false}>
      <Carousel.Item>
        <img style={{height:768}} src="/img/AdobeStock_473013000 1.png" alt="" />
        <Carousel.Caption>
          <h1>Бухгалтер / Финансист / Юрист / Аудитор</h1>
          <p>надежный опыт с 2004 года для оперативного решения нестандартных и сложных задач</p>
          <Button>Наши услуги</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:768}} src="/img/AdobeStock_473013000 1.png" alt="" />
        <Carousel.Caption>
          <h1>Бухгалтер / Финансист / Юрист / Аудитор</h1>
          <p>надежный опыт с 2004 года для оперативного решения нестандартных и сложных задач</p>
          <Button>Наши услуги</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:768}} src="/img/AdobeStock_473013000 1.png" alt="" />
        <Carousel.Caption>
          <h1>Бухгалтер / Финансист / Юрист / Аудитор</h1>
          <p>надежный опыт с 2004 года для оперативного решения нестандартных и сложных задач</p>
          <Button>Наши услуги</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner