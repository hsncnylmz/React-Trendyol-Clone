import React from 'react';

const KadinKategorisi = () => {
    const kadinCategories = [
        "Giyim", "Elbise", "Tişört", "Gömlek", "Kot Pantolon", "Kot Ceket",
        "Pantolon", "Mont", "Bluz", "Ceket", "Etek", "Kazak", "Tesettür",
        "Büyük Beden", "Abiye & Mezuniyet", "Şort", "Plaj Giyim", "Bikini",
        "Pareo", "Yazlık Elbise", "Crop", "Ayakkabı", "Topuklu Ayakkabı",
        "Sneaker", "Günlük Ayakkabı", "Babet", "Sandalet", "Bot", "Spor Ayakkabı",
        "Terlik", "Loafer", "Aksesuar & Çanta", "Çanta", "Saat", "Takı",
        "Şapka", "Cüzdan", "Güneş Gözlüğü", "Saç Aksesuarları", "Kemer",
        "Gümüş Kolye", "Çanta", "Omuz Çantası", "Sırt Çantası", "Bel Çantası",
        "Okul Çantası", "Laptop Çantası", "Portföy", "Postacı Çantası", "El Çantası",
        "Kanvas Çanta", "Makyaj Çantası", "Abiye Çanta", "Çapraz Çanta", "Bez Çanta",
        "Anne Bebek Çantası", "Evrak Çantası", "Plaj Çantası", "Beslenme Çantası",
        "Kartlık", "Cüzdan", "Kadın Spor Çantası", "İç Giyim", "Pijama Takımı",
        "Gecelik", "Sütyen", "İç Çamaşırı Takımları", "Fantezi Giyim", "Çorap",
        "Korse", "Külot", "Büstiyer", "Bralet", "Atlet & Body", "Kombinezon",
        "Jartiyer", "Lüks & Designer", "Lüks Çanta", "Lüks Giyim", "Lüks Ayakkabı",
        "Tasarım Giyim", "Tasarım Ayakkabı", "Kozmetik", "Parfüm", "Göz Makyajı",
        "Cilt Bakım", "Saç Bakımı", "Makyaj", "Ağız Bakım", "Cinsel Sağlık",
        "Vücut Bakım", "Hijyenik Ped", "Duş Jeli & Kremleri", "Epilasyon Ürünleri",
        "Ruj", "Güneş Kremi", "Selülit Kremi", "Eyeliner", "Ten Makyajı",
        "Manikür & Pedikür", "BB & CC Krem", "Deodorant", "Cilt Nemlendirici",
        "Spor & Outdoor", "Sweatshirt", "Tişört", "Spor Sütyeni", "Tayt",
        "Eşofman", "Koşu Ayakkabısı", "Spor Çantası", "Spor Ekipmanları",
        "Outdoor Ayakkabı", "Kar Botu", "Outdoor Ekipmanları", "Sporcu Besinleri",
        "Sporcu Aksesuarları", "Outdoor Çanta", "Kayak Malzemeleri", "Uyku Tulumu",
        "Mat", "Dağcılık", "Aksiyon Kamerası", "Spor Ayakkabı"
    ];

    return (
        <div className="container">
            <div className="row">
                {kadinCategories.map((category, index) => (
                    <div key={index} className="col-2">
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default KadinKategorisi;