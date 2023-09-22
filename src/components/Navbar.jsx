import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';
import { Container } from 'react-bootstrap';

export default function Navbar() {
    return (
        <Container style={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '1' }}>
            <nav className="navbar navbar-expand-lg navbar-light " >
                <div className="container-fluid">
                    {/* Sol tarafta logo */}
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand" href="/">
                            <img src="img/ty-web.png" alt="" style={{ width: '150px' }} />
                        </a>
                    </div>
                    {/* Orta kısım: Arama kutusu ve "Search" butonu */}
                    <div className="d-flex align-items-center flex-grow-1 justify-content-center">
                        <div className="input-group search-input">
                            <input
                                className="form-control border-0 text-left"
                                type="search"
                                placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                                aria-label="Search"
                            />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#E38037" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Sağ tarafta üç buton */}
                    <div className="d-flex align-items-center justify-content-end">
                        <button className="btn btn-link btn-hover">
                            <i className="bi bi-person" style={{ fontSize: '22px', marginRight: '5px' }}></i>
                            Giriş Yap
                        </button>
                        <button className="btn btn-link btn-hover">
                            <i className="bi bi-heart" style={{ fontSize: '18px', marginRight: '5px' }}></i>
                            Favorilerim
                        </button>
                        <button className="btn btn-link btn-hover">
                            <i className="bi bi-cart3" style={{ fontSize: '19px', marginRight: '5px' }}></i>
                            Sepetim
                        </button>
                    </div>
                </div>
            </nav>
        </Container>
    );
}
