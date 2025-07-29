const urlParams = new URLSearchParams(window.location.search);
    const topik = urlParams.get('topik');
    const title = document.getElementById('title')
    const text = document.getElementById('add-text')
    const container = document.getElementById('grid-container');

    const produkData = {
        'console': [
            {
                nama: 'Sony Playstation 5',
                harga: 'Rp8,599.999',
                kota: 'Sleman', 
                gambar: 'assets/product-img/ps5.jpeg',
                jenis: 'Playstation'
            },
            {
                nama: 'Xbox series X',
                harga: 'Rp7,399.999',
                kota: 'Bogor',
                gambar: 'assets/product-img/xbox-series-x.jpeg',
                jenis: 'Xbox'
            },

            // ADDITIONAL PRODUCT //
            {
                nama: 'Sony Playstation 4 Pro',
                harga: 'Rp4,249.999',
                kota: 'Jombang', 
                gambar: 'assets/product-img/ps4-pro.jpeg',
                jenis: 'Playstation4'
            },
            {
                nama: 'Xbox series S',
                harga: 'Rp7,999.999',
                kota: 'Surabaya',
                gambar: 'assets/product-img/xbox-s.jpeg',
                jenis: 'Xbox-s'
            },
        ],
        'computer-laptop':[
            {
                nama: 'ASUS TUF F15',
                harga: 'Rp10,719.999',
                kota: 'Surabaya', 
                gambar: 'assets/product-img/tuf-f15.jpeg',
                jenis: 'tuf-f15'
            },
            {
                nama: 'ASUS ROG Zephyrus G14',
                harga: 'Rp22,599.999',
                kota: 'Malang', 
                gambar: 'assets/product-img/zephyrus-g14.jpeg',
                jenis: 'Zephyrus'
            },
            {
                nama: 'Axioo Pongo 735',
                harga: 'Rp11,939.999',
                kota: 'Semarang', 
                gambar: 'assets/product-img/axioo-735.jpeg',
                jenis: 'Pongo'
            },
            {
                nama: 'Lenovo LOQ 15',
                harga: 'Rp15,299.999',
                kota: 'Surakarta', 
                gambar: 'assets/product-img/LOQ15.jpeg',
                jenis: 'LOQ15'
            },
            {
                nama: 'CRUA 24inch curve monitor',
                harga: 'Rp1,939.999',
                kota: 'Denpasar', 
                gambar: 'assets/product-img/CRUA24i-gamingcurve.jpeg',
                jenis: 'CRUA24i-gamingcurve'
            },
            {
                nama: 'AMD Ryzen 5 5600g',
                harga: 'Rp2,019.999',
                kota: 'Purbalingga', 
                gambar: 'assets/product-img/ryzen5-5600g.jpeg',
                jenis: 'ryzen5-5600g'
            },
            {
                nama: 'Gigabyte Aorus RTX 4070Ti',
                harga: 'Rp11,459.999',
                kota: 'Jakarta', 
                gambar: 'assets/product-img/gigabyteaorus-rtx4070ti-12gb.jpeg',
                jenis: 'Aorus'
            },
            {
                nama: 'ASUS ROG Flow X13',
                harga: 'Rp31,099.999',
                kota: 'Jakarta', 
                gambar: 'assets/product-img/flow-x13.jpeg',
                jenis: 'ROG-flow'
            },
            {
                nama: 'Apple Macbook Pro 16',
                harga: 'Rp31,699.999',
                kota: 'Pasuruan', 
                gambar: 'assets/product-img/macbook.jpeg',
                jenis: 'macbook'
            },
            {
                nama: 'Advan Workplus',
                harga: 'Rp8,799.999',
                kota: 'Surabaya', 
                gambar: 'assets/product-img/workplus.jpeg',
                jenis: 'workplus'
            },
            {
                nama: 'HP Victus Gaming',
                harga: 'Rp13,389.999',
                kota: 'Malang', 
                gambar: 'assets/product-img/victus.jpeg',
                jenis: 'victus'
            },
            {
                nama: 'Intel Core i7 13700K',
                harga: 'Rp4,199.999',
                kota: 'Cirebon', 
                gambar: 'assets/product-img/intel-i7-13.jpeg',
                jenis: 'intel-i7'
            }
        ],
        'handphone-tablet': [
            {
                nama: 'Xiaomi 15 Ultra',
                harga: 'Rp13,429.999',
                kota: 'Surabaya', 
                gambar: 'assets/product-img/xiaomi-15-ultra.jpeg',
                jenis: 'xiaomi-15-ultra'
            },
            {
                nama: 'Xiaomi Poco x7 Pro',
                harga: 'Rp5,630.000',
                kota: 'Lamongan', 
                gambar: 'assets/product-img/poco-x7pro.jpeg',
                jenis: 'poco-x7pro'
            },
            {
                nama: 'Xiaomi Poco X6 Pro',
                harga: 'Rp3,899.999',
                kota: 'Gresik', 
                gambar: 'assets/product-img/poco-x6pro.jpeg',
                jenis: 'poco-x6pro'
            },
            {
                nama: 'Samsung S25 Ultra',
                harga: 'Rp21,459.999',
                kota: 'Surabaya', 
                gambar: 'assets/product-img/s25ultra.jpeg',
                jenis: 'Samsung'
            },
            {
                nama: 'Apple Iphone 16 Pro',
                harga: 'Rp22,819.999',
                kota: 'Bandung', 
                gambar: 'assets/product-img/iphone-16-promax.jpeg',
                jenis: 'iphone-16-promax'
            },
            {
                nama: 'Huawei Mate XT Ultimate',
                harga: 'Rp48,759.999',
                kota: 'Batam', 
                gambar: 'assets/product-img/huawei-xt.jpeg',
                jenis: 'huawei-xt'
            },

            // ADDITIONAL PRODUCT //
            {
                nama: 'Xiaomi 14T',
                harga: 'Rp6,419.999',
                kota: 'Jember', 
                gambar: 'assets/product-img/14t.jpeg',
                jenis: '14t'
            },
            {
                nama: 'Asus Zenfone 10',
                harga: 'Rp8,539.999',
                kota: 'Sidoarjo', 
                gambar: 'assets/product-img/zenfone10.jpeg',
                jenis: 'zenfone10'
            }
        ],
        'tv': [
            {
                nama: 'LG Smart 4K 50 Inch UHD TV',
                harga: 'Rp5,419.999',
                kota: 'Kediri',
                gambar: 'assets/product-img/lg-smart.jpeg',
                jenis: 'lg-smart'
            },
            {
                nama: 'Xiaomi Smart TV A Pro UHD',
                harga: 'Rp5,579.999',
                kota: 'Surabaya',
                gambar: 'assets/product-img/xiao-smartTV.jpeg',
                jenis: 'xiao-smartTV'
            },
            {
                nama: 'Samsung Crystal UHD BU8000 50"',
                harga: 'Rp6,899.999',
                kota: 'Gresik',
                gambar: 'assets/product-img/samsung-crystal.jpeg',
                jenis: 'samsung-crystal'
            },
            {
                nama: 'Coocaa 43S6G Android Smart TV',
                harga: 'Rp2,769.999',
                kota: 'Sidoarjo',
                gambar: 'assets/product-img/coocaa.jpeg',
                jenis: 'coocaa-43s6g'
            }
        ],
        'music': [
            {
                nama: 'Anker Soundcore r50i',
                harga: 'Rp499.999',
                kota: 'Surabaya',
                gambar: 'assets/product-img/anker-r50i.jpeg',
                jenis: 'anker-r50i'
            },
            {
                nama: 'Steelseries Arctis Nova 5',
                harga: 'Rp2,299.999',
                kota: 'Surabaya',
                gambar: 'assets/product-img/steelseries-nova5.jpeg',
                jenis: 'steelseries-nova5'
            },

            // ADDITIONAL PRODUCT //
            {
                nama: 'Apple Airpods Pro 2nd Gen 2023',
                harga: 'Rp3,879.999',
                kota: 'Jakarta',
                gambar: 'assets/product-img/airpods.jpeg',
                jenis: 'airpods'
            },
            {
                nama: 'JBL Charge 5 Bluetooth Speaker',
                harga: 'Rp2,289.000',
                kota: 'Depok',
                gambar: 'assets/product-img/jbl-charge.jpeg',
                jenis: 'jbl-charge'
            }
        ]
    };

    switch(topik){
        case 'console':
            title.innerText = 'Console'
            break;
        case 'computer-laptop':
            title.innerText = 'Computer & Laptop'
            break;
        case 'handphone-tablet':
            title.innerText = 'Handphone & Tablet'
            break;
        case 'tv':
            title.innerText = 'TV & Accessoris'
            break;
        case 'camera':
            title.innerText = 'Camera'
            text.innerText = 'Product is not available yet :D'
            break;
        case 'music':
            title.innerText = 'Music & Speaker'
            break;
        default:
            title.innerText = 'Topik not found'
            
    }

    if (produkData[topik]) {
            produkData[topik].forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                <img src="${item.gambar}" alt="${item.nama}" class="product-img">
                <p class"name">${item.nama}</p>
                <b class="price">${item.harga}</b>
                <p class="location">${item.kota}</p>
                <a href="product-page.html?topik=${encodeURIComponent(item.jenis)}" class="buy-button">Buy now</a>
                `;
                container.appendChild(card);
        });
    }
    else {
        console.error('Topik tidak ditemukan:', topik);
    }