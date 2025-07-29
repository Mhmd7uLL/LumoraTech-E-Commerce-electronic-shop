<?php
session_start();

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo "failed";
    exit;
}

$produk = [
    'nama' => $data['nama'],
    'harga' => $data['harga'],
    'jumlah' => $data['jumlah'],
    'gambar' => $data['gambar']
];

// Tambahkan ke session cart
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

$found = false;

foreach ($_SESSION['cart'] as &$item) {
    if ($item['nama'] === $produk['nama']) {
        $item['jumlah'] += $produk['jumlah'];
        $found = true;
        break;
    }
}

if(!$found){
    $_SESSION['cart'][] = $produk;
}

echo "success";
?>
