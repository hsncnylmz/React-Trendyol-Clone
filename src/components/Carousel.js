import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap';
import './owl.css';

export class Carousel extends Component {
    render() {
        return (
            <Container>
                <div class='container-fluid' style={{ marginTop: "20px" }}>
                    <OwlCarousel
                        items={11}
                        margin={8} >
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/En_Cok_Satanlar_202302142041.png'} alt='/' />
                                <p>Sen De Al!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Senin_Icin_Sectik_202302142041.png'} alt='/' />
                                <p>Sana Özel</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Widget_202307261451.png'} alt='/' />
                                <p>Kredi Kartı</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Widget_202307201111.png'} alt='/' />
                                <p>Kurumsal</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Widget_202305051022.png'} alt='/' />
                                <p>Şanslı Çekiliş</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Kredilercircle_202308221603.png'} alt='/' />
                                <p>Krediler</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Widget_202308151718.png'} alt='/' />
                                <p>Siparişin Umut Olsun</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Trendyolmilla_202301280120.jpg'} alt='/' />
                                <p>TrendyolMilla</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Apple_202301262111.jpg'} alt='/' />
                                <p>Apple</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Topstory_202303311553.jpg'} alt='/' />
                                <p>Pull&Bear</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Xiaomi_202301280236.jpg'} alt='/' />
                                <p>Xiaomi</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Samsung_202301271715.jpg'} alt='/' />
                                <p>Samsung</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Philips_202301271558.jpg'} alt='/' />
                                <p>Philips</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Stradivarius_202304260936.png'} alt='/' />
                                <p>Stradivarius</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Puma_202301271558.jpg'} alt='/' />
                                <p>Puma</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Defacto_202301270049.jpg'} alt='/' />
                                <p>Defacto</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Adidas_202301262144.png'} alt='/' />
                                <p>Adidas</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Koton_202301270326.png'} alt='/' />
                                <p>Koton</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Arzum_202301262152.png'} alt='/' />
                                <p>Arzum</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Thepurestsolutions_202301280121.jpg'} alt='/' />
                                <p>The Purest Solutions</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Dyson_202301270049.jpg'} alt='/' />
                                <p>Dyson</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Bershka_202304260943.png'} alt='/' />
                                <p>Bershka</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Bosch_202301262207.png'} alt='/' />
                                <p>Bosch</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Vestel_202301280121.jpg'} alt='/' />
                                <p>Vestel</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item-content">
                                <img className="img" src={'/img/Riseandshine_202301271629.jpg'} alt='/' />
                                <p>Riseandshine</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </Container>
        )
    }
}

export default Carousel 