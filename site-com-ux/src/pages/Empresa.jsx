import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

const Empresa = () => {
  return (
    <div>
        <Container className="py-1">
            <h2 className='mb-1'>A EMPRESA</h2>

            <Card className="mb-1 shadow-sm">
                <Card.Body>
                    <p>
                        A EMBRACO Refrigeração Industrial é uma empresa comprometida com o fornecimento de dispositivos de refrigeração e sistemas de alta qualidade e desempenho. Fundada há mais de 40 anos no estado da Paraíba, a empresa iniciou sua trajetória com a venda de freezers.
                        Vinte anos depois, expandiu sua produção e estoque, passando a oferecer serviços de armazenamento refrigerado e a fabricar seus próprios dispositivos de refrigeração sob demanda.
                        Atualmente, a EMBRACO é um dos principais nomes do setor de refrigeração, com mais de 45 filiais espalhadas pelo país e 10 filiais em outros países da América Latina.
                    </p>
                    <p>
                        A EMBRACO possui diversas equipes distribuídas por toda a América, contando com mais de 50 mil funcionários espalhados entre suas filiais. 
                        Todos atuam com o objetivo de garantir o máximo de qualidade e excelência para nossos clientes.
                    </p>
                    <p>
                        A seguir, conheça mais sobre nossos serviços e dispositivos. 
                        Caso tenha dúvidas, entre em contato com a nossa equipe de suporte para garantir a melhor experiência possível.
                    </p>
                </Card.Body>
            </Card>

            <Row className="g-1">
                          <Col md={4}>
                            {/* Card 1 */}
                                <Card className="text-center h-100 shadow=sm">
                                    <Card.Img   
                                        variant="top"
                                        src= "Imagem-de-Dispositivos.jpg"
                                        alt="Dispositivos de Refrigeração"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                    <Card.Body>
                                        <Card.Title> 
                                            Nossos dispositivos
                                        </Card.Title>
                                        <Card.Text>
                                        Nossos dispositivos estão entre os mais tecnologicamente avançados disponíveis no mercado. São produzidos com precisão, eficiência e cuidado em cada detalhe. 
                                        Nosso time de pesquisa trabalha constantemente para aprimorar modelos existentes e criar novas soluções, garantindo que a evolução no setor de refrigeração nunca pare.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
            
                            <Col md={4}>
                            {/* Card 2 */}
                                <Card className="text-center h-100 shadow=sm">
                                    <Card.Img   
                                        variant="top"
                                        src= "Imagem-de-predio.jpg"
                                        alt="Sede"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                    <Card.Body>
                                        <Card.Title> 
                                            Nossas Filiais 
                                        </Card.Title>
                                        <Card.Text>
                                        Nossas filiais oferecem o melhor ambiente de trabalho possível. 
                                        Contamos com áreas de descanso e conforto, espaços de alimentação e cabines individuais para garantir o bem-estar de nossos trabalhadores.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
            
                            <Col md={4}>
                            {/* Card 3 */}
                                <Card className="text-center h-100 shadow=sm">
                                    <Card.Img   
                                        variant="top"
                                        src= "Equipe.jpg"
                                        alt="Equipe"
                                        style={{height: '200px', objectFit: 'cover'}}
                                    />
                                    <Card.Body>
                                        <Card.Title> 
                                            Nossa Equipe
                                        </Card.Title>
                                        <Card.Text>
                                        Contamos com profissionais extremamente qualificados e criteriosamente selecionados para criar um ambiente de trabalho amigável e colaborativo. 
                                        Nossa equipe incentiva a cooperação, visando minimizar erros e maximizar a eficiência.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Empresa