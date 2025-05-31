import React from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import BannerAd from '../components/BannerAd';

const InicialComUx = () => {

	return (

		<div>

			<Container classname="py-4">
            {/* Aqui será o carousel do banner */}
						<BannerAd />

            <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <p>
						<b>A Embraco Refrigeração Industrial é referência no desenvolvimento de soluções inovadoras e sustentáveis para sistemas de refrigeração de alta performance.</b>
                    </p>
                    <p>
						Atuamos há mais de 40 anos com foco em eficiência energética, confiabilidade e suporte técnico de excelência.
                    </p>
                    <p>
                        A seguir, conheça nossos diferenciais, áreas de atuação e as oportunidades que oferecemos para o setor industrial.
                    </p>
                </Card.Body>
            </Card>

            <Row className="g-4">
                <Col md={4}>
                    {/* Card 1 */}
                    <Card className="text-center h-100 shadow=sm">
                        <Card.Img
                            variant="top"
                            src="/instalamanu.png"
                            alt="solucoes"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Body>
                            <Card.Title>Soluções Personalizadas</Card.Title>
                            <Card.Text>
                               Desenvolvemos projetos sob medida para atender demandas específicas de refrigeração industrial com alta performance e eficiência energética.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    {/* Card 2 */}
                    <Card className="text-center h-100 shadow=sm">
                        <Card.Img
                            variant="top"
                            src="/laboratorio.jpg"
                            alt="lab"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Body>
                            <Card.Title>Laboratório de Testes Avançado</Card.Title>
                            <Card.Text>
								Espaço equipado com tecnologia de ponta para simulações térmicas e testes de resistência, garantindo segurança e desempenho dos produtos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    {/* Card 3 */}
                    <Card className="text-center h-100 shadow=sm">
                        <Card.Img
                            variant="top"
                            src="/soluções personalizadas.jpg"
                            alt="tubu"
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Body>
                            <Card.Title>Instalação e Manutenção</Card.Title>
                            <Card.Text>
                                Nossa equipe técnica especializada garante uma instalação segura e suporte contínuo com atendimento rápido e eficaz.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Segunda Linha */}

            <Row className="g-4 mt-4">
                {/* Card 1 */}
                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body className="text-center">
                            <Card.Title>Parcerias com Indústrias</Card.Title>
                            <Card.Text>
								Colaboramos com grandes players dos setores alimentício, farmacêutico e automotivo para otimizar processos e melhorar resultados.	                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Card 2 */}
                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body className="text-center">
                            <Card.Title>Inovação e Pesquisa</Card.Title>
                            <Card.Text>
								Investimos constantemente em pesquisa e desenvolvimento para entregar soluções com as mais recentes inovações do setor.                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>

		</div>

	);

};

export default InicialComUx;
