import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';

function KitchenSinkExample() {
    return (
        <div className='container'>
            <header>
            <Container>
            <div className='container' style={{ border: '2px solid #F2E5DA', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(249, 240, 234, 0.1)', marginTop: '3rem', backgroundColor: '#F9F0EA' }}>

                <div className='urunler' style={{ padding: '1rem' }}>

                    <div className='title'>
                        <h3 style={{ fontSize: '24px', marginBottom: '2rem' }}>Çok Satan Ürünler</h3>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                        {/* CARD YAPISI BURAYA */}
                        <Card style={{ justifyContent: 'center', alignItems: 'center', width: '16rem' }}>
                            {/* Burası kartın üstündeki iconlar */}
                            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                <i className="bi bi-heart"></i>
                            </div>

                            <div style={{ background: '#3FC461', borderRadius: '3px', fontSize: '20px', position: 'absolute', top: '10px', left: '10px' }}>
                                <div className='hizli' style={{ padding: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <i style={{ color: 'white' }} className="bi bi-truck"></i>
                                    <p style={{ paddingLeft: '9px', color: 'white', fontSize: '9px', margin: '0' }}>HIZLI<br />TESLİMAT</p>
                                </div>
                            </div>
                            {/* Buraya kart içeriği */}
                            <div style={{ position: 'absolute', top: '3rem', left: '5px', width: '60px', height: '60px' }}>
                                <img src='img/EnCokSatan_202012091129.png' alt='/' style={{ width: '100%', height: '100%' }} />
                            </div>
                            {/* KART YAZI ALANI */}
                            <Card.Img variant="top" style={{ padding: '2rem', width: '240px' }} src="img/4_org.jpg" />
                            <Card.Body>
                                <Card.Title style={{ marginTop: '-2rem' }}><p><b>TRENDYOLMİLLA</b> Siyah Yüksek Bel Pantolon</p></Card.Title>
                                <Card.Text>
                                    <p style={{ color: 'red', fontSize: '12px' }}><i class="bi bi-graph-down-arrow"></i>&nbsp;&nbsp;Son 30 Günün En Düşük Fiyatı!</p>
                                </Card.Text>
                                <Card.Text>
                                    <p style={{ marginTop: '-1rem', fontSize: '14px' }}>
                                        <span style={{ color: 'grey', textDecoration: 'line-through' }}>175,99 TL</span> <b style={{ color: 'red', fontSize: '15px' }}>167,99 TL</b>
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                        {/* CARD YAPISI BURAYA */}
                        <Card style={{ justifyContent: 'center', alignItems: 'center', width: '16rem' }}>
                            {/* Burası kartın üstündeki iconlar */}
                            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                <i className="bi bi-heart"></i>
                            </div>

                            <div>
                                <div style={{ background: '#3FC461', borderRadius: '3px', fontSize: '20px', position: 'absolute', top: '10px', left: '10px' }}>
                                    <div className='hizli' style={{ padding: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <i style={{ color: 'white' }} className="bi bi-truck"></i>
                                        <p style={{ paddingLeft: '9px', color: 'white', fontSize: '9px', margin: '0' }}>HIZLI<br />TESLİMAT</p>
                                    </div>
                                </div>

                                <div style={{ background: 'grey', borderRadius: '3px', fontSize: '20px', position: 'absolute', top: '50px', left: '10px' }}>
                                    <div className='hizli' style={{ padding: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <i style={{ color: 'white' }} className="bi bi-box-seam-fill"></i>
                                        <p style={{ paddingLeft: '9px', color: 'white', fontSize: '9px', margin: '0', width: '3.5rem' }}>KARGO<br />BEDAVA</p>
                                    </div>
                                </div>
                            </div>

                            {/* Buraya kart içeriği */}
                            <div style={{ position: 'absolute', top: '6rem', left: '5px', width: '60px', height: '60px' }}>
                                <img src='img/EnCokSatan_202012091129.png' alt='/' style={{ width: '100%', height: '100%' }} />
                            </div>
                            {/* KART YAZI ALANI */}
                            <Card.Img variant="top" style={{ padding: '2rem', width: '240px' }} src="img/1_org.jpg" />
                            <Card.Body>
                                <Card.Title style={{}}><p><b>Avon</b> Wish Of Love Kadın Parfüm Edt 50 ml 2'li Set</p></Card.Title>
                                <Card.Text>
                                    <p style={{ color: 'red', fontSize: '12px' }}></p>
                                </Card.Text>
                                <Card.Text>
                                    <p style={{ fontSize: '14px', color: 'orange' }}>150 TL</p>
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'pink', width: '6rem', justifyContent: 'space-evenly', borderRadius: '3px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i style={{ margin: '4px', color: '#FF4988' }} className="bi bi-ticket-perforated-fill"></i>
                                            <p style={{ fontSize: '10px', margin: '0' }}>10 TL Kupon</p>
                                        </div>
                                    </div>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}

                        {/* CARD YAPISI BURAYA */}
                        <Card style={{ justifyContent: 'center', alignItems: 'center', width: '16rem' }}>
                            {/* Burası kartın üstündeki iconlar */}
                            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                <i className="bi bi-heart"></i>
                            </div>

                            <div>
                                <div style={{ background: '#3FC461', borderRadius: '3px', fontSize: '20px', position: 'absolute', top: '10px', left: '10px' }}>
                                    <div className='hizli' style={{ padding: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <i style={{ color: 'white' }} className="bi bi-truck"></i>
                                        <p style={{ paddingLeft: '9px', color: 'white', fontSize: '9px', margin: '0' }}>HIZLI<br />TESLİMAT</p>
                                    </div>
                                </div>

                                <div style={{ background: 'grey', borderRadius: '3px', fontSize: '20px', position: 'absolute', top: '50px', left: '10px' }}>
                                    <div className='hizli' style={{ padding: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <i style={{ color: 'white' }} className="bi bi-box-seam-fill"></i>
                                        <p style={{ paddingLeft: '9px', color: 'white', fontSize: '9px', margin: '0', width: '3.5rem' }}>KARGO<br />BEDAVA</p>
                                    </div>
                                </div>
                            </div>

                            {/* Buraya kart içeriği */}
                            <div style={{ position: 'absolute', top: '15rem', left: '5px', width: '70px', height: '70px' }}>
                                <img src='img/0844a065-ac36-4f45-a7b2-f51f4d3a14cb.png' alt='/' style={{ width: '100%', height: '100%' }} />
                            </div>
                            {/* KART YAZI ALANI */}
                            <Card.Img variant="top" style={{ padding: '2rem', width: '240px' }} src="img/123_org.jpg" />
                            <Card.Body>
                                <Card.Title style={{}}><p><b>Bargello</b> 122 Oriental Edp 50 Ml Kadın Parfüm</p></Card.Title>
                                <Card.Text>
                                    <p style={{ color: 'red', fontSize: '12px' }}></p>
                                </Card.Text>
                                <Card.Text>
                                    <p style={{ fontSize: '14px', color: 'orange' }}>230 TL</p>
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFF6EE', width: '6.5rem', justifyContent: 'space-evenly', borderRadius: '3px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i style={{ margin: '4px', color: 'orange', transform: 'rotate(460deg)', fontSize: '14px' }} className="bi bi-tag-fill"></i>
                                            <p style={{ fontSize: '10px', margin: '0' }}>Çok Al Az Öde</p>
                                        </div>
                                    </div>

                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                        {/* CARD YAPISI BURAYA */}
                        <Card style={{ justifyContent: 'center', alignItems: 'center', width: '16rem' }}>
                            {/* Burası kartın üstündeki iconlar */}
                            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                <i className="bi bi-heart"></i>
                            </div>

                            <div>
                                <div style={{ background: '#3FC461', borderRadius: '3px', fontSize: '20px', position: 'absolute', top: '10px', left: '10px' }}>
                                    <div className='hizli' style={{ padding: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <i style={{ color: 'white' }} className="bi bi-truck"></i>
                                        <p style={{ paddingLeft: '9px', color: 'white', fontSize: '9px', margin: '0' }}>HIZLI<br />TESLİMAT</p>
                                    </div>
                                </div>

                                <div style={{ background: 'grey', borderRadius: '3px', fontSize: '20px', position: 'absolute', top: '50px', left: '10px' }}>
                                    <div className='hizli' style={{ padding: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <i style={{ color: 'white' }} className="bi bi-box-seam-fill"></i>
                                        <p style={{ paddingLeft: '9px', color: 'white', fontSize: '9px', margin: '0', width: '3.5rem' }}>KARGO<br />BEDAVA</p>
                                    </div>
                                </div>
                            </div>

                            {/* Buraya kart içeriği */}
                            <div style={{ position: 'absolute', top: '6rem', left: '5px', width: '60px', height: '60px' }}>
                                <img src='img/EnCokSatan_202012091129.png' alt='/' style={{ width: '100%', height: '100%' }} />
                            </div>
                            {/* KART YAZI ALANI */}
                            <Card.Img variant="top" style={{ padding: '2rem', width: '240px' }} src="img/1q12a_org.jpg" />
                            <Card.Body>
                                <Card.Title style={{}}><p><b>MODAGEN</b> Unisex Bebe Mavisi San Francisco Baskılı</p></Card.Title>
                                <Card.Text>
                                    <p style={{ color: 'red', fontSize: '12px' }}></p>
                                </Card.Text>
                                <Card.Text>
                                    <p style={{ fontSize: '14px', color: 'orange' }}>177,80 TL</p>
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFF6EE', width: '6.5rem', justifyContent: 'space-evenly', borderRadius: '3px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <i style={{ margin: '4px', color: 'orange', transform: 'rotate(460deg)', fontSize: '14px' }} className="bi bi-tag-fill"></i>
                                            <p style={{ fontSize: '10px', margin: '0' }}>Çok Al Az Öde</p>
                                        </div>
                                    </div>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* ------------------------------------------------------------------------------------------------------------------------------------------ */}
                        {/* CARD YAPISI BURAYA */}
                        <Card style={{ justifyContent: 'center', alignItems: 'center', width: '16rem' }}>
                            {/* Burası kartın üstündeki iconlar */}
                            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                                <i className="bi bi-heart"></i>
                            </div>

                            <div>
                                <div style={{ background: '#3FC461', borderRadius: '3px', fontSize: '20px', position: 'absolute', top: '10px', left: '10px' }}>
                                    <div className='hizli' style={{ padding: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <i style={{ color: 'white' }} className="bi bi-truck"></i>
                                        <p style={{ paddingLeft: '9px', color: 'white', fontSize: '9px', margin: '0' }}>HIZLI<br />TESLİMAT</p>
                                    </div>
                                </div>

                            </div>

                            {/* Buraya kart içeriği */}
                            <div style={{ position: 'absolute', top: '3rem', left: '5px', width: '60px', height: '60px' }}>
                                <img src='img/EnCokSatan_202012091129.png' alt='/' style={{ width: '100%', height: '100%' }} />
                            </div>
                            {/* KART YAZI ALANI */}
                            <Card.Img variant="top" style={{ padding: '2rem', width: '240px' }} src="img/2qw_org.jpg" />
                            <Card.Body>
                                <Card.Title style={{}}><p><b>TRENDYOLMİLLA</b> Siyah Toparlayıcı Beli Lastikli</p></Card.Title>
                                <Card.Text>
                                    <p style={{ color: 'red', fontSize: '12px' }}></p>
                                </Card.Text>
                                <Card.Text>
                                    <p style={{ fontSize: '14px', color: 'orange' }}>177,80 TL</p>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </Container>
            </header>
        </div>
       
    );
}

export default KitchenSinkExample;