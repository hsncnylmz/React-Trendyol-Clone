import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function BasicExample() {
  return (
    <div className='container'>
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230920072805_thumbnail2334207AyakkabiCantaMobile202309191701.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                Ayakkabı Ürünlerini keşfet
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230915143203_trwomanyenisezon150923mobile.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                TRENDYOLMİLLA-Aradığı...
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230920110437_denimineniyileri.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                Denimin En İyileri
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230920061806_2333898ErkekMobile20230919170.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                Anthleticzone
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230918074838_trwomanhomewearyenisezon140923mobile.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                Trendyol Homewear-Arad...
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230920151143_KlimaIsiticilar2334246mobile.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                Klima&Isıtıcılar-Elektroni...
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>


  );
}

export default BasicExample;
