import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Container } from 'react-bootstrap';

function NavbarTop() {
  return (
    <Container>
      <div className="navbar-top">
        <ul className="navbar-top-list">
          <li className="navbar-top-item">İndirim Kuponlarım</li>
          <li className="navbar-top-item">Trendyol'da Satış Yap</li>
          <li className="navbar-top-item">Hakkımızda</li>
          <li className="navbar-top-item">Yardım & Destek</li>
        </ul>
      </div>
    </Container>
  );
}

export default NavbarTop;
