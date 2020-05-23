alert("Berhasil diinstall! aktifkan melalui icon [OLYMPTRADE] disamping. Donate : https://www.paypal.me/Gagassurya19");
console.log(
    // Olymptrade
    document.onkeyup = function(e) {
        if (e.which == 38) {
            e.preventDefault();
            document.querySelector("button[data-test='deal-button-up']").click();
        } else if (e.which == 40) {
            e.preventDefault();
            document.querySelector("button[data-test='deal-button-down']").click();
        } else {
            alert("Anda Menggunakan Shortcut [Olymptrade] gunakan dengan bijak, salam profit. Made by @Gagassurya19");
        }
    }
);