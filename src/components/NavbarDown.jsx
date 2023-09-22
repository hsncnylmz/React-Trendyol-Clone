import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import KadinKategorisi from './KadinKategorisi';
import ErkekKategorisi from './ErkekKategorisi';

const categories = [
    { name: 'Kadın', link: '/kadin' },
    { name: 'Erkek', link: '/erkek' },
    { name: 'Anne & Çocuk', link: '/anne-cocuk' },
    { name: 'Ev & Mobilya', link: '/ev-mobilya' },
    { name: 'Süpermarket', link: '/supermarket' },
    { name: 'Kozmetik', link: '/kozmetik' },
    { name: 'Ayakkabı & Çanta', link: '/ayakkabi-canta' },
    { name: 'Elektronik', link: '/elektronik' },
    { name: 'Spor & Outdoor', link: '/spor-outdoor' },
    { name: 'Çok Satanlar', link: '/cok-satanlar', isNew: true },
    { name: 'Flaş Ürünler', link: '/flas-urunler', isNew: true }
];

function NavbarDropdown() {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (index) => {
        setActiveCategory(index);
    }

    const handleMouseLeave = () => {
        setActiveCategory(null);
    }

    return (
        <Container>
            <div className="navbar-down container d-flex align-items-center justify-content-center">
                <div className="row mx-0">
                    {categories.map((category, index) => (
                        <div className="col px-2" key={index}>
                            <button
                                className={`custom-navbar-down-item btn btn-link ${activeCategory === index ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(index)}
                                onMouseEnter={() => handleCategoryClick(index)}
                                onMouseLeave={handleMouseLeave}
                                style={{ color: activeCategory === index ? 'orange' : 'inherit' }}
                            >
                                {category.name}
                                {category.isNew && (
                                    <span className="new-category" style={{ fontSize: '13px', padding: '3px', borderRadius: '10px', backgroundColor: 'red', color: 'white' }}>Yeni</span>
                                )}
                            </button>
                            {activeCategory === index && category.name === 'Kadın' && (
                                <div className="dropdown-menu-container">
                                    <KadinKategorisi />
                                </div>
                            )}
                            {activeCategory === index && category.name === 'Erkek' && (
                                <div className="dropdown-menu-container">
                                    <ErkekKategorisi />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <div className="full-width-line"></div>
                </div>
            </div>
        </Container>
    );
}

export default NavbarDropdown;
