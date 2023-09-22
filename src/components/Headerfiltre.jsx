import React from 'react'
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

function Headerfiltre() {
  return (
    <div className='container'>
      <header>
        <Container>
          <div className='Headerfiltre'>
            <div className='row justify-content-center'>
              <Col className="text-center">
                <img className="filtre" src={'/img/Sepet_202304181225.png'} alt='/' />
              </Col>
              <Col className="text-center">
                <img className="filtre" src={'/img/Onecikan_202304181225.png'} alt='/' />
              </Col>
              <Col className="text-center">
                <img className="filtre" src={'/img/Flash_202304181225.png'} alt='/' />
              </Col>
            </div>
          </div>
        </Container>
      </header>
    </div>

  );
}

export default Headerfiltre;





