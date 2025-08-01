

function formatRupiah(angka) {
    return 'Rp' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateTotal() {
    let total = 0;
    const checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach(cb => {
        if (cb.checked) {
            total += parseInt(cb.dataset.price);
        }
    });
    document.getElementById('total-price').innerText = formatRupiah(total);
}

// Event listener saat checkbox diubah
document.querySelectorAll('.item-checkbox').forEach(cb => {
    cb.addEventListener('change', updateTotal);
});

// Jalankan saat pertama dimuat
updateTotal();
