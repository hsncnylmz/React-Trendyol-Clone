import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function BasicExample2() {
  return (
    <div className='container'>
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230918142049_2331033KadinMobile202309181501.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                Bershka-Yeni Sezon
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230915141710_trwomanparty150923mobile2.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                TRENDYOLMİLLA-Partywe...
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230919122423_2329690ErkekMobile202308231701.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                Sweatshirt Mevsimini Kaçı...
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
              <Card.Img variant="top" src="img/mobile_20230908121958_2322222KadinMobile202309081511.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                Oysho
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230919072636_trcollectionsonbahar150923mobile1.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                Trendyol Collection-Triko...
                <span style={{ color: '#22252A', display: 'flex', alignItems: 'center' }}>
                  <p style={{ margin: '0' }}>Alışverişe Başla</p>
                  <i className="bi bi-chevron-right" style={{ marginLeft: '0.5rem' }}></i>
                </span>
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ marginTop: '3rem' }}>
              <Card.Img variant="top" src="img/mobile_20230920081800_88888ElektronikMobile20230918150241.jpg" />
              <Button variant="dark" className="button-hover" style={{ display: 'flex' }}>
                AMD İşlemcili HP Laptopla...
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

export default BasicExample2;
