import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const BannerAdCagado = () => {
    return (

    <Container className="my-4 p-0" fluid>
        <Carousel fade interval={5000} controls={true} indicators={true}>

            {/* slide 1 */}
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
                    src="/refriindustri.jpeg"
                    alt="Sistema de refrigeração montado em um telhado de uma industria"
                    style={{ height:"500px", borderRadius: '8px'}}
                />
            </Carousel.Item>

            {/* slide 3 */}
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="/industriarefri.png"
                    alt="Sistema de refrigeração montado em um telhado de uma industria"
                    style={{ height:"500px", borderRadius: '8px'}}
                />
            </Carousel.Item>

        </Carousel>
    </Container>
    );
};

export default BannerAdCagado;