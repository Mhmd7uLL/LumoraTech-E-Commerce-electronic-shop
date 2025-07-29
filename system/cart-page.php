
<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_name'])) {
    $deleteName = $_POST['delete_name'];
    if (isset($_SESSION['cart'])) {
        $_SESSION['cart'] = array_filter($_SESSION['cart'], function($item) use ($deleteName) {
            return $item['nama'] !== $deleteName;
        });
        $_SESSION['cart'] = array_values($_SESSION['cart']);
    }
}

$cart = $_SESSION['cart'] ?? [];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lumora Tech - Cart</title>
    <link rel="stylesheet" href="/e-commerce/style/style-cart.css">
    <link rel="icon" href="../assets/navbar-icon/lumoraTech-logo.png" type="image/png">
</head>
<body>
    <!-- NAVIGATION BAR -->
    <header>
        <nav class="navbar">
            <div class="store-logo">
                <img src="../assets/navbar-icon/lumoraTech-logo.png" alt="">
                <div class="firstname"><a href="/e-commerce/index.html#home">Lumora</a></div>
                <div class="lastname"><a href="/e-commerce/index.html#home">Tech.</a></div>
            </div>

            <div class="search-bar">
                <input type="text" placeholder="Search here...">
                <button type="submit">cari</button>
            </div>

            <div class="account-cart">
                <img src="../assets/navbar-icon/cart.png" alt="">
                <img src="../assets/navbar-icon/anonim-pfp.jpeg" alt="">
            </div>
        </nav>
    </header>

    <main class="main">
        <div class="title-page">
            <h1>Cart</h1>
        </div>

        <div class="cart-content" style="padding: 20px;">
            <?php if (empty($cart)) : ?>
                <p class="empty-message">Keranjang masih kosong.</p>
            <?php else : ?>
                <?php foreach ($cart as $item) : ?>
                <div class="cart-item">
                    <input type="checkbox" checked>
                    <img class="product-image" src="../<?= htmlspecialchars($item['gambar']) ?>" alt="<?= htmlspecialchars($item['nama']) ?>">

                    <div class="product-info">
                        <h3 class="product-name"><?= htmlspecialchars($item['nama']) ?></h3>
                        <p class="product-qty">Quantity: <?= $item['jumlah'] ?></p>
                        <p class="product-price">Price each product: Rp<?= number_format($item['harga'], 0, ',', '.') ?></p>


                        <form method="POST" action="cart-page.php" class="delete-form">
                            <input type="hidden" name="delete_name" value="<?= htmlspecialchars($item['nama']) ?>">
                            <button type="submit" class="delete-button">Delete product</button>
                        </form>
                    </div>
                </div>
            <?php endforeach; ?>
            <div class="cart-summary">
                <h3>Summary of your order</h3>
                <div class="summary-row">
                    <span>Total</span>
                    <span class="summary-total">Rp<?= number_format(array_sum(array_map(fn($item) => $item['harga'] * $item['jumlah'], $cart)), 0, ',', '.') ?></span>
                </div>
                <button class="checkout-btn">Checkout (<?= count($cart) ?>)</button>
            </div>
            <?php endif; ?>
        </div>


    </main>
    
</body>
</html>