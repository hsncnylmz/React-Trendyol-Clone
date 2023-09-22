import React from 'react';

const ErkekKategorisi = () => {
    const ErkekCategories = [
        "Giyim", "Tişört", "Şort", "Gömlek", "Eşofman", "Pantolon", "Ceket", "Kot Pantolon",
        "Yelek", "Kazak", "Mont", "Takım Elbise", "Sweatshirt", "Forma", "Mayo", "Deniz Şortu",
        "Kapri", "Spor Atlet", "Yağmurluk", "Blazer", "Polo Tişört", "Ayakkabı", "Spor Ayakkabı",
        "Günlük Ayakkabı", "Yürüyüş Ayakkabısı", "Krampon", "Sneaker", "Klasik", "Bot", "Sandalet",
        "Terlik", "Halı Saha Ayakkabısı", "Basketbol Ayakkabısı", "Koşu Ayakkabısı", "Çizme",
        "Kişisel Bakım", "Parfüm", "Cinsel Sağlık", "Tıraş Sonrası Ürünler", "Tıraş Bıçağı",
        "Deodorant", "Çanta", "Sırt Çantası", "Spor Çanta", "Laptop Çantası", "Valiz & Bavul",
        "Postacı Çantası", "Bel Çantası", "Bez Çanta", "Evrak Çantası", "Cüzdan", "Plaj Alışverişi",
        "Deniz Şortu", "Güneş Kremi", "Terlik", "Güneş Gözlüğü", "Plaj Havlusu", "Mayo", "Yazlık Gömlek",
        "Şapka", "Sandalet", "Saat & Aksesuar", "Saat", "Güneş Gözlüğü", "Cüzdan", "Kemer", "Çanta",
        "Şapka", "Bileklik", "Valiz", "Kravat", "Kolye", "Kartlık", "Rozet", "Papyon", "İç Giyim",
        "Boxer", "Çorap", "Pijama", "Atlet", "Slip", "Spor & Outdoor", "Eşofman", "Spor Ayakkabı",
        "T-shirt", "Sweatshirt", "Forma", "Spor Çorap", "Spor Giyim", "Outdoor Ayakkabı", "Outdoor Bot",
        "Spor Ekipmanları", "Outdoor Ekipmanları", "Sporcu Besinleri", "Sporcu Aksesuarları", "Sneaker",
        "Scooter", "Bisiklet", "Dalış Malzemeleri", "Rüzgarlık", "Aksiyon Kamerası", "Kamp Malzemeleri",
        "Elektronik", "Tıraş Makinesi", "Cep Telefonu", "Akıllı Saat", "Akıllı Bileklik", "Laptop",
        "Oyun & Konsollar", "Elektrikli Bisiklet", "E-pin ve Cüzdan Kodu", "Playstation 5", "Hediye Kartları",
        "Bluetooth Kulaklık", "Gaming PC", "Oyuncu Koltuğu", "Xbox Series X", "Drone", "Lüks & Designer",
        "Lüks Giyim", "Lüks Ayakkabı", "Lüks Çanta"
    ];

    return (
        <div className="container">
            <div className="row">
                {ErkekCategories.map((category, index) => (
                    <div key={index} className="col-2">
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ErkekKategorisi;