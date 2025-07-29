const urlParams = new URLSearchParams(window.location.search);
    const topik = urlParams.get('topik');
    const productName = document.getElementById('product-name');
    const price = document.getElementById('price');
    const desc = document.getElementById('desc');
    const category = document.getElementById('category');
    const pict = document.getElementById('pict');
    const mainPict = document.getElementById('main-pict');


    switch(topik){
        //    ROW 1 PRODUCT FROM INDEX.HTML    //
        case 'tuf-f15':
            productName.innerText = 'ASUS TUF F15'
            price.innerText = 'Rp10,719.999'
            desc.innerText = `ASUS TUF Gaming F15 adalah laptop gaming tangguh dengan desain kokoh dan performa tinggi. 
                              Cocok untuk gamer maupun pengguna profesional yang membutuhkan daya komputasi besar. 
                              Dengan sertifikasi military-grade, laptop ini tahan terhadap kondisi ekstrem, 
                              serta mendukung mobilitas tanpa mengorbankan performa.
                              
                              Procesor: Intel Core i7-12700H 
                              GPU: NVIDIA GeForce RTX 3050 4GB
                              RAM: 16GB DDR4 
                              Storage: 512GB SSD NVMe
                              Display: 15.6" FHD IPS, 144Hz
                              Battery: 90Wh, fast charging
                              Port: USB-A, USB-C Thunderbolt 4, HDMI, LAN`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/tuf-f15.jpeg'
            mainPict.src = 'assets/product-img/tuf-f15.jpeg'
            break;
        case 'Zephyrus':
            productName.innerText = 'ASUS ROG Zephyrus G14'
            price.innerText = 'Rp22,599.999'
            desc.innerText = `ASUS ROG Zephyrus G14 adalah laptop gaming ultraportabel yang menggabungkan performa tinggi, desain ringkas, dan daya tahan baterai luar biasa. 
                              Dengan bodi berbahan magnesium alloy yang ringan namun kokoh, serta dukungan prosesor dan grafis kelas atas, laptop ini cocok untuk gamer, kreator konten, 
                              dan profesional mobile yang menuntut performa maksimal dalam bentuk minimalis.
                            
                              Processor: AMD Ryzen 9 8945HS 4GHz (24MB Cache, up to 5.2 GHz, 8 cores, 16 Threads)
                              Display: 14" QHD+ (2560x1600) Nebula Display with 120Hz refresh rate 100% DCI-P3 Adaptive Sync 
                              Graphics: NVIDIA GeForce RTX 4060 Laptop GPU (233 AI TOPs) 8GB GDDR6
                              Storage: 1 TB SSD PCIe Gen 4.0
                              Memori: 16GB LPDDR5X 6400 on board
                              Battery: 76Wh up to 10+ hours light use
                              Port: 2x USB-C, 2x USB-A, HDMI 2.1, Audio jack,`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/zephyrus-g14.jpeg'
            mainPict.src = 'assets/product-img/zephyrus-g14.jpeg'
            break;
        case 'xiaomi-15-ultra':
            productName.innerText = 'Xiaomi 15 Ultra'
            price.innerText = 'Rp13,429.999'
            desc.innerText = `Xiaomi 15 Ultra adalah smartphone flagship yang menyatukan desain premium dan kemampuan fotografi canggih. 
                              Ditenagai oleh chipset terbaru dan sistem kamera Leica yang superior
                              
                              Chipset: Snapdragon 8 Gen 4 (performa flagship)
                              Display: 6.73" AMOLED LTPO, 2K resolution, 120Hz refresh rate
                              Main camera: 50MP (wide, f/1.6) + 50MP (periscope telephoto) + 50MP (ultrawide) + ToF sensor
                              Front camera: 32MP
                              RAM/Storage: 16GB RAM 512GB UFS 4.1
                              Battery: 5300 mAh, 120W wired charging, 50W wireless charging
                              OS: HyperOS berbasis Android 14`
            category.innerText = 'Handphone & Tablet'
            pict.src = 'assets/product-img/xiaomi-15-ultra.jpeg'
            mainPict.src = 'assets/product-img/xiaomi-15-ultra.jpeg'
            break;
        case 'poco-x7pro':
            productName.innerText = 'Xiaomi Poco X7 Pro'
            price.innerText = 'Rp5,630.000'
            desc.innerText = `POCO X7 Pro adalah smartphone kelas menengah dengan performa tinggi dan fitur premium. 
                              Dengan layar AMOLED berkualitas tinggi dan prosesor bertenaga, 
                              perangkat ini cocok untuk gaming, multitasking, dan konsumsi media yang intensif
                              
                              Chipset: MediaTek Dimensity 8400 Ultra (4nm)
                              Weight: 186g or 190g
                              Protection: IP68 & Corning Gorilla Glass 7i
                              Display: 6.67" AMOLED, FHD+, 120Hz refresh rate, HDR10+
                              Main camera: 50MP (OIS) + 8MP (ultrawide) 
                              Front camera: 20MP
                              RAM/Storage: 12GB RAM 512GB UFS 4.0
                              Baterai: 6000 mAh, 90W fast charging
                              OS: HyperOS for POCO berbasis Android 15`
            category.innerText = 'Handphone & Tablet'
            pict.src = 'assets/product-img/poco-x7pro.jpeg';
            mainPict.src = 'assets/product-img/poco-x7pro.jpeg'
            break;

        //    ROW 2 PRODUCT FROM INDEX.HTML   //
        case 'Pongo':
            productName.innerText = 'Axioo Pongo 735'
            price.innerText = 'Rp11,939.999'
            desc.innerText = `Axioo Pongo 735 adalah laptop gaming lokal dengan harga terjangkau 
                              namun tetap bertenaga, cocok untuk pelajar hingga gamer kasual.
                              
                              Processor: Intel Core i7 Gen 13620H
                              GPU: NVIDIA GeForce RTX 3050 6GB
                              Display: 15.6" Full HD IPS 144Hz
                              RAM: 16GB DDR4
                              Storage: 512GB SSD NVMe PCIe Gen 4.0
                              OS: Windows 11
                              Fitur Tambahan: RGB keyboard, desain minimalis, pendinginan ganda`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/axioo-735.jpeg'
            mainPict.src = 'assets/product-img/axioo-735.jpeg'
            break;
        case 'LOQ15':
            productName.innerText = 'Lenovo LOQ 15'
            price.innerText = 'Rp15,299.000'
            desc.innerText = `Lenovo LOQ 15 adalah laptop gaming entry-mid level dengan performa stabil. 
                              Cocok untuk gaming, editing, dan multitasking berat.
                            
                              Processor: Intel Core i5-13420H
                              GPU: NVIDIA GeForce RTX 3050 6GB
                              Display: 15.6" Full HD IPS, 144Hz
                              RAM: 16GB DDR5
                              Storage: 512GB SSD
                              Battery: 60Wh with Rapid Charge
                              OS: Windows 11 Home
                              Fitur Tambahan: Backlit keyboard, WiFi 6, port lengkap`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/LOQ15.jpeg'
            mainPict.src = 'assets/product-img/LOQ15.jpeg'
            break;
        case 'Playstation':
            productName.innerText = 'Sony Playstation 5'
            price.innerText = 'Rp8,599.999'
            desc.innerText = `PlayStation 5 (PS5) adalah konsol generasi terbaru dari Sony dengan grafis memukau, 
                              loading sangat cepat, dan gameplay yang imersif.
                              
                              CPU: AMD Ryzen Zen 2 octa-core
                              GPU: AMD RDNA 2 (10.28 TFLOPs)
                              RAM: 16GB GDDR6
                              Storage: 825GB SSD
                              Output: 4K UHD, up to 120Hz
                              Fitur: Ray tracing, Tempest 3D Audio, DualSense controller
                              Game Support: PS5 & sebagian besar PS4 games`
            category.innerText = 'Console'
            pict.src = 'assets/product-img/ps5.jpeg'
            mainPict.src = 'assets/product-img/ps5.jpeg'
            break;
        case 'poco-x6pro':
            productName.innerText = 'Xiaomi Poco X6 Pro'
            price.innerText = 'Rp3,899.999'
            desc.innerText = `Poco X6 Pro adalah smartphone mid-range premium dengan performa tinggi, 
                              layar AMOLED tajam, dan harga terjangkau.
                              
                              Chipset: MediaTek Dimensity 8300 Ultra (4nm)
                              Weight: 186g or 190g
                              Protection: IP54 & Corning Gorilla Glass 5
                              Display: 6.67" AMOLED, FHD+, 120Hz refresh rate, HDR10+
                              Main camera: 64MP (OIS) + 8MP (ultrawide) + 2MP (macro)
                              Front camera: 16MP
                              RAM/Storage: 12GB RAM 512GB UFS 4.0
                              Baterai: 5000 mAh, 67W fast charging
                              OS: HyperOS for POCO berbasis Android 14`
            category.innerText = 'Handphone & Tablet'
            pict.src = 'assets/product-img/poco-x6pro.jpeg';
            mainPict.src = 'assets/product-img/poco-x6pro.jpeg'
            break;

        //    ROW 3 FROM INDEX.HTML    //
        case 'CRUA24i-gamingcurve':
            productName.innerText = 'CRUA 24 Inch Gaming Curve Monitor'
            price.innerText = 'Rp1,939.999'
            desc.innerText = `Monitor 24 inci dari CRUA ini menawarkan tampilan melengkung dengan refresh rate tinggi, 
                              cocok untuk gaming maupun produktivitas harian.
                              
                              Ukuran Layar: 24 inch curved (1500R)
                              Resolusi: Full HD (1920 x 1080)
                              Refresh Rate: 180Hz
                              Panel: VA dengan warna tajam
                              Response Time: 1ms (MPRT)
                              Input: HDMI, VGA, Audio Out
                              Fitur: Flicker-Free, Blue Light Filter`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/CRUA24i-gamingcurve.jpeg'
            mainPict.src = 'assets/product-img/CRUA24i-gamingcurve.jpeg'
            break;
        case 'Xbox':
            productName.innerText = 'Xbox Series X'
            price.innerText = 'Rp7,399.999'
            desc.innerText = `Konsol generasi terbaru dari Microsoft dengan performa tinggi, waktu loading cepat, dan kompatibilitas game lintas generasi.
                            
                              CPU: AMD Zen 2 Octa-core (3.8GHz)
                              GPU: AMD RDNA 2, 12 TFLOPs
                              RAM: 16GB GDDR6
                              Penyimpanan: 1TB NVMe SSD
                              Output: Up to 4K @ 120FPS
                              Fitur: Ray tracing, Quick Resume, Dolby Vision/Atmos
                              Game Support: Xbox Series X/S, Xbox One, dan backward compatible`
            category.innerText = 'Console'
            pict.src = 'assets/product-img/xbox-series-x.jpeg'
            mainPict.src = 'assets/product-img/xbox-series-x.jpeg'
            break;
        case 'ryzen5-5600g':
            productName.innerText = 'AMD Ryzen 5 5600g Processor'
            price.innerText = 'Rp2,019.999'
            desc.innerText = `Prosesor APU dari AMD dengan grafis terintegrasi yang cukup kuat, cocok untuk penggunaan gaming ringan dan workstation hemat daya.
                              Tak luput dari informasi bahwa Ryzen 5 5600g menjadi Ryzen 5 5000 Series terlaris dalam kelasnya.  
                              
                              Core/Thread: 6 Cores / 12 Threads
                              Base Clock: 3.9GHz (Boost up to 4.4GHz)
                              Cache: 19MB (L2+L3)
                              iGPU: Radeon Vega 7 Graphics
                              Socket: AM4
                              TDP: 65W
                              Cooler: Wraith Stealth (included)`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/ryzen5-5600g.jpeg'
            mainPict.src = 'assets/product-img/ryzen5-5600g.jpeg'
            break;
        case 'Aorus':
            productName.innerText = 'Gigabyte Aorus Nvidia Geforce RTX 4070Ti 12GB'
            price.innerText = 'Rp11,459.999'
            desc.innerText = `Kartu grafis kelas atas dari Gigabyte dengan performa mumpuni untuk gaming 4K, ray tracing, dan rendering berat.
                              Mampu menjalankan game AAA kelas atas dengan lancar. Seperti CyberPunk 2077, Red Dead Redemption 2, EA FC 25, Hogwarts Legacy, dll.  
                              
                              Seri: RTX 4070Ti 12 GB
                              VRAM: 12GB GDDR6X
                              Boost Clock: Hingga 2625MHz (tergantung model)
                              Bus Width: 192-bit
                              Output: 3x DisplayPort 1.4a, 1x HDMI 2.1
                              Fitur: DLSS 3.0, Ray Tracing, PCIe 4.0
                              Power Requirement: ~285W, 12VHPWR`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/gigabyteaorus-rtx4070ti-12gb.jpeg';
            mainPict.src = 'assets/product-img/gigabyteaorus-rtx4070ti-12gb.jpeg'
            break;


        //    ROW 4 : ADDITIONAL FROM INDEX.HTML   //
        case 'Samsung':
            productName.innerText = 'Samsung S25 Ultra'
            price.innerText = 'Rp21,459.999'
            desc.innerText = `Samsung S25 Ultra adalah smartphone flagship keluaran Samsung dengan performa tinggi dan fitur premium.
                              Memiliki Chipset kelas atas dan dipadukan dengan kemampuan fotografi yang canggih
                              
                              Chipset: Qualcomm Snapdragon 8 Elite
                              Display: 6.9" LTPO AMOLED, 120Hz refresh rate, HDR10+
                              Main camera: 200MP (OIS) + 10MP (telephoto) + 50MP (periscope telephoto) + 50MP (penscope telephoto)
                              Front camera: 12MP (wide)
                              RAM/Storage: 12GB RAM 512GB UFS
                              Baterai: 5000 mAh. 45W Wired, 15W wireless, 4.5W reverse wireless
                              OS: One UI 7 Android 15`
            category.innerText = 'Handphone & Tablet'
            pict.src = 'assets/product-img/s25ultra.jpeg'
            mainPict.src = 'assets/product-img/s25ultra.jpeg'
            break;
        case 'iphone-16-promax':
            productName.innerText = 'Iphone 16 Pro Max'
            price.innerText = 'Rp22,819.999'
            desc.innerText = `Produk keluaran terbaru dari Apple yakni Apple Iphone 16 Pro Max. Layaknya seri Iphone lain, Iphone 16 Pro Max
                              memiliki ketertarikan tersendiri dari para peminat dan pembeli  

                              Chipset: Apple A18 Pro (3nm)
                              Display: 6.9" LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits
                              Main camera: 48MP (wide) + 12MP (periscope telephoto) + 48MP (ultrawide)
                              Front camera: 12MP (wide)
                              RAM/Storage: 8GB RAM, 1TB NVMe
                              Baterai: 4685 mAh. 25W Wired, 15W wireless Qi2, 4.5W reverse wireless
                              OS: iOS 18, upgradable to iOS 18.5`
            category.innerText = 'Handphone & Tablet'
            pict.src = 'assets/product-img/iphone-16-promax.jpeg'
            mainPict.src = 'assets/product-img/iphone-16-promax.jpeg'
            break;
        case 'ROG-flow':
            productName.innerText = 'ASUS ROG Flow X13'
            price.innerText = 'Rp31,099.999'
            desc.innerText = `Laptop keluaran dari ASUS ROG (Republic Of Gamers) dengan tipe Flow, yang dapat dilipat hingga 360 Derajat. 
                              Meski begitu, spesifikasi yang diberikan tidak kalah menarik. Dapat melibas game AAA apapun dengan lancar.  
                              
                              Processor: AMD Ryzen 9 7940HS 4GHz (24MB Cache, up to 5.2 GHz, 8 cores, 16 Threads)
                              Display: 13.4" QHD+ (2560x1600) Nebula Display with 165Hz refresh rate 100% DCI-P3 
                              Graphics: NVIDIA GeForce RTX 4060 Laptop GPU (233 AI TOPs) 8GB GDDR6
                              Storage: 1 TB SSD PCIe Gen 4.0
                              Memori: 16GB (8 GB x 2) LPDDR5 6400 on board
                              Battery: 75Wh 4 Cell Li-ion Power
                              Port: 1x ROG XG Mobile, 1x USB-A, 1x USB-C, Card reader`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/flow-x13.jpeg'
            mainPict.src = 'assets/product-img/flow-x13.jpeg'
            break;
        case 'anker-r50i':
            productName.innerText = 'Anker Soundcore r50i'
            price.innerText = 'Rp499.999'
            desc.innerText = `TWS (true wireless stereo) ringan dengan suara jernih, cocok untuk pemakaian harian, olahraga, dan commuting.
                              Menjadi TWS Termurah dan berkualitas pada kelasnya yang menjadi daya tarik tersendiri bagi para peminat.  
                              
                              Driver: 10mm dynamic drivers
                              Playback Time: Hingga 30 jam (termasuk case)
                              Bluetooth: 5.3
                              Water Resistance: IPX5
                              Fitur: AI noise reduction, voice assistant, touch control
                              Charging: USB-C, fast charging support`
            category.innerText = 'Music & Speaker'
            pict.src = 'assets/product-img/anker-r50i.jpeg';
            mainPict.src = 'assets/product-img/anker-r50i.jpeg'
            break;

        //    ROW 5 : ADDITIONAL PRODUCT FROM INDEX.HTML   //
        case 'macbook':
            productName.innerText = 'Apple Macbook Pro 16 Inch'
            price.innerText = 'Rp31,699.999'
            desc.innerText = `Apple Macbook Pro 16 Inch keluaran 2024
                              
                              Chip: Apple M4 Pro 14 Core CPU
                              GPU: 20 Core GPU
                              RAM: 48GB Unified Memory
                              Storage: 1TB SSD 
                              Display: 16.2" Inch Liquid Retina XDR Display
                              Battery: 100Wh Lithium Polymer (Li-Po), fast charge
                              Port: SDXC Card slot, HDMI, 3x Thunderbolt 5 ports, 3.5mm audio jack`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/macbook.jpeg'
            mainPict.src = 'assets/product-img/macbook.jpeg'
            break;
        case 'huawei-xt':
            productName.innerText = 'Huawei Mate XT Ultimate'
            price.innerText = 'Rp48,759.999'
            desc.innerText = `Huawei Mate XT Ultimate adalah smartphone lipat 3 layar semi-tablet yang diproduksi di China. Menjadi salah satu Smartphone 
                              Termahal dan terunik di dunia.
                              
                              Chipset: Kirin 9010 (7 nm)
                              Display: 10.2" LTPO OLED 90Hz with 1B Colors
                              Main camera: 50MP (wide + OIS), 12MP (periscope telephoto + OIS), 12MP (ultrawide), gyro-EIS + OIS Video
                              Front camera: 8MP
                              RAM/Storage: 16GB RAM 1TB
                              Battery: 5300 mAh, 120W wired charging, 50W wireless charging
                              OS: HyperOS berbasis Android 14`
            category.innerText = 'Handphone & Tablet'
            pict.src = 'assets/product-img/huawei-xt.jpeg'
            mainPict.src = 'assets/product-img/huawei-xt.jpeg'
            break;
        case 'steelseries-nova5':
            productName.innerText = 'Steelseries Arctis Nova 5'
            price.innerText = 'Rp2,299.999'
            desc.innerText = `Headset gaming nirkabel dengan kualitas audio premium dan dukungan perangkat lunak SteelSeries GG.
                              
                              Connection: Wireless 2.4GHz & Bluetooth
                              Driver: 40mm Neodymium
                              Battery Life: Hingga 60 jam
                              Mic: ClearCast Gen 2 noise-canceling
                              Compatibility: PC, PS5, Xbox, Nintendo Switch, Mobile
                              Fitur: Spatial audio, custom EQ via app`
            category.innerText = 'Music & Speaker'
            pict.src = 'assets/product-img/steelseries-nova5.jpeg'
            mainPict.src = 'assets/product-img/steelseries-nova5.jpeg'
            break;
        case 'lg-smart':
            productName.innerText = 'LG Smart 4K 50 Inch UHD TV'
            price.innerText = 'Rp5,419.999'
            desc.innerText = `Smart TV 4K UHD dengan ukuran besar dan kualitas gambar yang tajam, cocok untuk hiburan rumahan modern.
                              
                              Ukuran Layar: 50 inch
                              Resolusi: 3840 x 2160 (4K UHD)
                              Panel: LED IPS
                              OS: WebOS Smart TV
                              Audio: Dolby Digital Plus, AI Sound
                              Fitur: HDR10, ThinQ AI, WiFi, HDMI x3, USB x2
                              Voice Control: Google Assistant & Alexa support`
            category.innerText = 'TV & Accessoris'
            pict.src = 'assets/product-img/lg-smart.jpeg';
            mainPict.src = 'assets/product-img/lg-smart.jpeg'
            break;


        //   ADDITIONAL PRODUCT FROM type-page.html   //
        case 'Playstation4':
            productName.innerText = 'Sony Playstation 4 Pro'
            price.innerText = 'Rp4,249.999'
            desc.innerText = `Konsol generasi terbaru dari Microsoft dengan performa tinggi, waktu loading cepat, dan kompatibilitas game lintas generasi.
                            
                              CPU: AMD Zen 2 Octa-core (3.8GHz)
                              GPU: AMD RDNA 2, 12 TFLOPs
                              RAM: 16GB GDDR6
                              Penyimpanan: 1TB NVMe SSD
                              Output: Up to 4K @ 120FPS
                              Fitur: Ray tracing, Quick Resume, Dolby Vision/Atmos
                              Game Support: Xbox Series X/S, Xbox One, dan backward compatible`
            category.innerText = 'Console'
            pict.src = 'assets/product-img/ps4-pro.jpeg';
            mainPict.src = 'assets/product-img/ps4-pro.jpeg'
            break;
        case 'Xbox-s':
            productName.innerText = 'Xbox Series S'
            price.innerText = 'Rp7,999.999'
            desc.innerText = `Konsol generasi terbaru dari Microsoft dengan performa tinggi, waktu loading cepat, dan kompatibilitas game lintas generasi.
                            
                              CPU: AMD Zen 2 Octa-core (3.8GHz)
                              GPU: AMD RDNA 2, 12 TFLOPs
                              RAM: 16GB GDDR6
                              Penyimpanan: 1TB NVMe SSD
                              Output: Up to 4K @ 120FPS
                              Fitur: Ray tracing, Quick Resume, Dolby Vision/Atmos
                              Game Support: Xbox Series X/S, Xbox One, dan backward compatible`
            category.innerText = 'Console'
            pict.src = 'assets/product-img/xbox-s.jpeg';
            mainPict.src = 'assets/product-img/xbox-s.jpeg'
            break;
        case '14t':
            productName.innerText = 'Xiaomi 14T'
            price.innerText = 'Rp6,419.999'
            desc.innerText = `Rilisan pabrik Xiaomi dengan seri yang terkenal akan kegaharan spesifikasi dan lensanya, yaitu seri T
                              
                              Chipset: Mediatek Dimensity 8300 Ultra (4nm)
                              Display: 6.67" AMOLED 144Hz with 68B Colors, Dolby Vision, HDR10+
                              Main camera: 50MP (wide + OIS), 50MP (telephoto), 12MP (ultrawide), gyro-EIS Video with Leica Lens
                              Front camera: 32MP
                              RAM/Storage: 12GB RAM 512GB UFS 4.0
                              Battery: 5000 mAh, 67W wired charging
                              OS: HyperOS 2 Android 14`
            category.innerText = 'Handphone & Tablet'
            pict.src = 'assets/product-img/14t.jpeg'
            mainPict.src = 'assets/product-img/14t.jpeg'
            break;
        case 'zenfone10':
            productName.innerText = 'Asus Zenfone 10'
            price.innerText = 'Rp8,539.999'
            desc.innerText = `Compact, kecil, mungil namun gahar. Kata - kata yang cocok untuk HP ini, Asus Zenfone 10
                              
                              Chipset: Qualcomm Snapdragon 8 Gen 2 (4 nm)
                              Display: 5.92" Super AMOLED 144Hz HDR10+
                              Main camera: 50MP (wide + OIS), 13MP (ultrawide), gyro-EIS Video
                              Front camera: 32MP
                              RAM/Storage: 16GB RAM, 512GB UFS 4.0
                              Battery: 4300 mAh, 30W wired charging, 15W wireless charging, 5W reverse wired
                              OS: Android 13`
            category.innerText = 'Handphone & Tablet'
            pict.src = 'assets/product-img/zenfone10.jpeg'
            mainPict.src = 'assets/product-img/zenfone10.jpeg'
            break;
        case 'airpods':
            productName.innerText = 'Apple Airpods Pro 2nd Gen 2023'
            price.innerText = 'Rp3,879.999'
            desc.innerText = `Garansi :
                              Apple : Bisa claim di service center resmi Apple (Mitracare / QCD / Hello / Digimap)
                              iBox : Bisa claim di service center resmi Apple iBox

                            
                              Low-Distortion Driver & Custom Amplifier
                              Bluetooth 5.3 & Apple H2 Chip
                              Personalized Spatial Audio
                              Upgraded Active Noise Cancellation
                              Adaptive Transparency Mode
                              Up to 6 Hours of Power
                              Up to 24 Extra Hours in Charging Case
                              Case is MagSafe Charger Compatible
                              Locate if Lost with Precision Finding
                              Touch Control for Audio, Calls & Volume`
            category.innerText = 'Music & Speaker'
            pict.src = 'assets/product-img/airpods.jpeg';
            mainPict.src = 'assets/product-img/airpods.jpeg'
            break;
        case 'jbl-charge':
            productName.innerText = 'JBL Charge 5 - Wireless Bluetooth Portable Speaker'
            price.innerText = 'Rp2,289.000'
            desc.innerText = `JBL menghadirkan speaker portable dengan sertifikasi IP67 yang tahan air nan debu, membuat suasana pesta tidak akan padam

                              Ketahanan : IP67
                              Lama Pengisian Daya : 4 Jam
                              Waktu Bermain Musik : up to 20 jam
                              Bluetooth frequency 2400 MHz - 2483.5 MHz
                              Dimensi (cm) 22 x 9.6 x 9.3
                              Berat (kg) 0.96`
            category.innerText = 'Music & Speaker'
            pict.src = 'assets/product-img/jbl-charge.jpeg';
            mainPict.src = 'assets/product-img/jbl-charge.jpeg'
            break;
        case 'workplus':
            productName.innerText = 'Advan Workplus'
            price.innerText = 'Rp8,799.999'
            desc.innerText = `Laptop bentuk kantoran, namun performa tinggi. Cocok untuk pekerja kantoran, pelajar, dan mahasiswa.
                            
                              CPU: AMD Ryzen 7 7735HS (8C/16T, 3.2GHz)
                              GPU: AMD Radeon 680M Graphics
                              RAM: 16GB LPDDR5
                              Penyimpanan: 512GB NVMe SSD + 1 slot SSD 2.5"
                              Display: 14" FHD IPS, 60Hz
                              Port: 2x USB-C, 2x USB-A, HDMI, Audio jack
                              Fitur: Backlit keyboard, fingerprint sensor, WiFi 6E
                              
                              FREE WINDOWS 11 ACTIVATION`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/workplus.jpeg';
            mainPict.src = 'assets/product-img/workplus.jpeg'
            break;
        case 'victus':
            productName.innerText = 'HP Victus 15'
            price.innerText = 'Rp13,389.999'
            desc.innerText = `Laptop gaming entry-level dari HP dengan performa yang cukup baik untuk gaming kasual dan produktivitas.
                              Meski tidak segahar seri Omen, namun tetap menarik untuk dimiliki.  
                            
                              CPU: AMD Ryzen 5 8645HS (6C/12T, 4.3GHz)
                              GPU: NVIDIA GEFORCE RTX 4050 6GB GDDR6, TGP 105W
                              RAM: 16GB DDR5
                              Penyimpanan: 512GB NVMe SSD M.2
                              Display: 15.6" FHD IPS, 144Hz
                              Port: 1x USB-C, 2x USB-A, HDMI, RJ-45, Audio jack
                              Fitur: Backlit keyboard, WiFi 6E, Bluetooth 5.3
                              Battery: 70Wh Li-ion Polymer (Li-po)`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/victus.jpeg';
            mainPict.src = 'assets/product-img/victus.jpeg'
            break;
        case 'intel-i7':
            productName.innerText = 'Intel Core i7-13700K'
            price.innerText = 'Rp4,199.999'
            desc.innerText = `Prosesor core i7 generasi ke-13 dari Intel, menawarkan performa tinggi untuk gaming dan workstation.
                              
                              Core/Thread: 16 Cores / 24 Threads
                              Base Clock: 3.4GHz (Boost up to 5.4GHz)
                              Cache: 30MB (L2+L3)
                              Socket: LGA 1700
                              TDP: 125W (PL1), 253W (PL2)
                              Integrated Graphics: Intel UHD Graphics 770
                              Fitur: Intel Turbo Boost Max Technology 3.0, Intel Hyper-Threading
                              Cooler: Tidak termasuk, pendinginan aftermarket disarankan
                              Garansi: 3 tahun resmi dari distributor
                              
                              Kompatibilitas: Motherboard LGA 1700, chipset Z690/Z790/B660/H670`
            category.innerText = 'Computer & Laptop'
            pict.src = 'assets/product-img/intel-i7-13.jpeg'
            mainPict.src = 'assets/product-img/intel-i7-13.jpeg'
            break;
        case 'xiao-smartTV':
            productName.innerText = 'Xiaomi Smart TV 50 Inch 4K'
            price.innerText = 'Rp5,579.999'
            desc.innerText = `Smart TV 4K dari Xiaomi dengan ukuran layar besar, 
                              menawarkan pengalaman menonton yang imersif dan fitur pintar.
                              
                              Ukuran Layar: 50 inch
                              Resolusi: 3840 x 2160 (4K UHD)
                              Panel: LED
                              OS: Android TV 11
                              Audio: Dolby Audio, DTS-HD
                              Fitur: Google Assistant, Chromecast built-in, WiFi, HDMI x3, USB
                              Remote: Voice remote with Google Assistant support
                              Dimensi: 1122 x 650 x 80 mm (tanpa kaki)
                              Berat: 12.5 kg (tanpa kaki)
                              
                              Garansi: 1 tahun resmi dari distributor`
            category.innerText = 'TV & Accessoris'
            pict.src = 'assets/product-img/xiao-smartTV.jpeg';
            mainPict.src = 'assets/product-img/xiao-smartTV.jpeg'
            break;
        case 'samsung-crystal':
            productName.innerText = 'Samsung Crystal UHD 50 Inch Smart TV'
            price.innerText = 'Rp6,899.999'
            desc.innerText = `Smart TV 4K dari Samsung dengan teknologi Crystal UHD,
                              menawarkan kualitas gambar yang tajam dan fitur pintar.
                              
                              Ukuran Layar: 50 inch
                              Resolusi: 3840 x 2160 (4K UHD)
                              Panel: LED
                              OS: Tizen OS
                              Audio: Dolby Digital Plus, Adaptive Sound
                              Fitur: Smart Hub, Google Assistant, Alexa support, WiFi, HDMI x3, USB x2
                              Remote: One Remote Control with voice assistant support
                              
                              Dimensi: 1122 x 650 x 80 mm (tanpa kaki)
                              Berat: 12.5 kg (tanpa kaki)
                              Garansi: 1 tahun resmi dari distributor`
            category.innerText = 'TV & Accessoris'
            pict.src = 'assets/product-img/samsung-crystal.jpeg';
            mainPict.src = 'assets/product-img/samsung-crystal.jpeg'
            break;
        case 'coocaa-43s6g':
            productName.innerText = 'Coocaa 43S6G 4K Smart TV'
            price.innerText = 'Rp2,769.999'
            desc.innerText = `Smart TV 4K dari Coocaa dengan ukuran layar 43 inci,
                              menawarkan pengalaman menonton yang imersif dengan harga terjangkau.
                              
                              Ukuran Layar: 43 inch
                              Resolusi: 3840 x 2160 (4K UHD)
                              Panel: LED
                              OS: Android TV 10
                              Audio: Dolby Audio, DTS
                              Fitur: Google Assistant, Chromecast built-in, WiFi, HDMI x3, USB x2
                              Remote: Voice remote with Google Assistant support
                              
                              Dimensi: 965 x 560 x 80 mm (tanpa kaki)
                              Berat: 8.5 kg (tanpa kaki)
                              Garansi: 1 tahun resmi dari distributor`
            category.innerText = 'TV & Accessoris'
            pict.src = 'assets/product-img/coocaa.jpeg';
            mainPict.src = 'assets/product-img/coocaa.jpeg'
            break;
        default:
            productName.innerText = 'Topik not found'
            break;
    }
    
function tambahKuant(){
    const input = document.getElementById('value');
    input.value = parseInt(input.value) + 1;
}

function kurangKuant(){
    const input = document.getElementById('value');
    if((input.value) > 1){
        input.value = parseInt(input.value) - 1;
    }
}

// ADD TO CART FUNCTIONALITY POP UP FITURE //
function showNotif() {
    const notif = document.getElementById("notif");
    notif.textContent = `Product has been added to cart successfully!
                         You can check it in your cart.`;
    notif.classList.add("show");

    setTimeout(() => {
        notif.classList.remove("show");
    }, 2000); // hilang setelah 2 detik
}



//   PHP CART PAGE   // 
document.addEventListener("DOMContentLoaded", () => {
    const addToCartBtn = document.getElementById("add-to-cart");
    if (!addToCartBtn) return;

    // Tambahkan event listener untuk tombol "Add to Cart"
    addToCartBtn.addEventListener("click", () => {

        // Ambil data produk dari elemen HTML
        const nama = document.getElementById("product-name").innerText;
        const hargaText = document.getElementById("price").innerText.replace(/[Rp.,\s]/g, "");
        const harga = parseInt(hargaText);
        const jumlah = parseInt(document.getElementById("value").value);
        const gambar = document.getElementById("main-pict").getAttribute("src");

        // Validasi data sebelum mengirim
        const data = { nama, harga, jumlah, gambar };

        // Kirim data ke server untuk ditambahkan ke keranjang
        fetch("system/add-to-cart.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        // Tangani respons dari server
        .then(res => res.text())
        .then(result => {
            // Jika berhasil, tampilkan notifikasi
            if (result === "success") {
                showNotif();
            }
        })
        // Jika terjadi kesalahan, tampilkan pesan error
        .catch(err => console.error("Gagal tambah ke cart", err));
    });
});
