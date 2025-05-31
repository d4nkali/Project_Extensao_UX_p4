import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import imagem2 from '../assets/sistema.jpg'

const BannerAd = () => {
    return (

    <Container className="my-4 p-0" fluid>
        <Carousel fade interval={5000} controls={true} indicators={true}>

            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="/logo.jpeg"
                    alt="Logo Da Embraco Refrigeração Industrial"
                    style={{ height: "500px", borderRadius: '8px'}}
                />
            </Carousel.Item>

            {/* slide 2 */}

            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={imagem2}
                    alt="Sistema de refrigeração montado em um telhado de uma industria"
                    style={{ height:"500px", borderRadius: '8px'}}
                />
            </Carousel.Item>

        </Carousel>
    </Container>
    );
};

export default BannerAd;