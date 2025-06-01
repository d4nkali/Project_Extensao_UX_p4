import React from 'react';
import { Container, Card, Row, Col } from "react-bootstrap";
import BannerAdCagada from '../components/BannerAdCagado';

const InicialSemUx = () => {

	return (

		<div>

			<Container classname="py-4">
				{/* Aqui será o carousel do banner */}
				<BannerAdCagada />

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
					<Col md={4} style={{ marginTop: "0px" }}>
						<Card className="text-center h-100" style={{ transform: "rotate(-2deg)", backgroundColor: "#e0f7fa", paddingBottom: "20px" }}>
							<Card.Img
								variant="top"
								src="/instalamanu.png"
								alt="solucoes"
								style={{ height: "210px", objectFit: "cover" }}
							/>
							<Card.Body>
								<Card.Title>Soluções Personalizadas</Card.Title>
								<Card.Text>
									Desenvolvemos projetos sob medida para atender demandas específicas de refrigeração industrial com alta performance e eficiência energética.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col md={4} style={{ marginTop: "30px" }}>
						<Card className="text-start h-100" style={{ transform: "rotate(4deg)", backgroundColor: "#fff3e0", border: "2px dashed orange" }}>
							<Card.Img
								variant="top"
								src="/laboratorio.jpg"
								alt="lab"
								style={{ height: "180px", objectFit: "cover" }}
							/>
							<Card.Body>
								<Card.Title>Laboratório de Testes Avançado</Card.Title>
								<Card.Text>
									Espaço equipado com tecnologia de ponta para simulações térmicas e testes de resistência, garantindo segurança e desempenho dos produtos.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>

					<Col md={4} style={{ marginTop: "60px" }}>
						<Card className="text-end h-100" style={{ transform: "rotate(-3deg)", backgroundColor: "#f1f8e9", padding: "15px" }}>
							<Card.Img
								variant="top"
								src="/soluções personalizadas.jpg"
								alt="tubu"
								style={{ height: "230px", objectFit: "cover" }}
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

			</Container>

		</div>

	);

};

export default InicialSemUx;
