import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

function footer() {
  return (
    <div>
      <div className='footer'>
        <div className='footer-container'>
          <Container>
            <Row>
              <Col className='trendyol'>
                <h4>Trendyol</h4>
                <ul className='listem'>
                  <li><a href="/">Biz Kimiz</a></li>
                  <li><a href="/">Kariyer</a></li>
                  <li><a href="/">İletişim</a></li>
                  <li><a href="/">Trendyolda Satış Yap</a></li>
                </ul>
                <div className='odemeyontemleri'>
                  <h6>Güvenli Alışveriş</h6>
                  <img src="img/troy-logo-transparent.png" alt="/" /><img src="img/footer-master-card.png" alt="/" />
                  <img src="img/footer-visa-black.png" alt="/" /><img src="img/footer-amex.png" height={'30px'} alt="/" />
                </div>
              </Col>
              <Col>
                <h4>About Us</h4>
                <ul className='listem'>
                  <li><a href="/">Who we are</a></li>
                  <li><a href="/">Careers</a></li>
                  <li><a href="/">Contact us</a></li>
                  <li><a href="/">Sustainability</a></li>
                </ul>
                <div className='appgalery'>
                  <h6 style={{ marginBottom: '25px' }}>Mobil Uygulamalar</h6>
                  <img src="img/iosV2.svg" alt="/" /><img src="img/googleV2.svg" alt="/" />
                  <img src="img/huaweiV2.svg" alt="/" />
                </div>
              </Col>
              <Col>
                <h4>Kampanyalar</h4>
                <ul className='listem'>
                  <li><a href="/">Aktif Kampanyalar</a></li>
                  <li><a href="/">Elite Üyelik</a></li>
                  <li><a href="/">Hediye Fikirleri</a></li>
                  <li><a href="/">Trendyol Fırsatları</a></li>
                </ul>
                <h6 style={{ marginBottom: '25px' }}>Sosyal Medya</h6>
                <div className='socialmedia'>
                  <img src="img/facebookV2.svg" alt="/" style={{ marginRight: '5px' }} /><img src="img/instagramV2.svg" alt="/" style={{ marginRight: '5px' }} />
                  <img src="img/twitterV2.svg" alt="/" style={{ marginRight: '5px' }} /><img src="img/youtubeV2.svg" alt="/" style={{ marginRight: '5px' }} />
                </div>
              </Col>
              <Col>
                <h4>Yardım</h4>
                <ul className='listem'>
                  <li><a href="/">Sıkça Sorulan Sorular</a></li>
                  <li><a href="/">Canlı Yardım</a></li>
                  <li><a href="/">Nasıl İade Edebilirim</a></li>
                  <li><a href="/">İşlem Rehberi</a></li>
                  <p>Ülke Değiştir</p>
                </ul>
                <div className='yardim'>
                  <img src="img/etbis-qr.png" alt="/" style={{ marginRight: '30px' }} /><img src="img/trust-stamp.png" alt="/" style={{ width: '55px' }} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className='bottom-footer'>
        <Container>
          <Row>
            <Col md={6}><p>©2023 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.</p></Col>
            <Col md={{ span: 5, offset: 1 }}>
              <ul className='listem-bottom'>
                <li><a href="/">Çerez Tercihleri</a></li>
                <li><a href="/">KVK ve Gizlilik Politikası</a></li>
                <li><a href="/">DSM Grup</a></li>
                <li><a href="/">Kullanım Koşulları</a></li>
              </ul>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default footer
