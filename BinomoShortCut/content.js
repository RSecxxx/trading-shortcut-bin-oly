alert("Berhasil diinstall! aktifkan melalui icon [BINOMO] disamping. Donation : https://www.paypal.me/ReynaldyZanuar");
console.log(
    // Shortcut Binomo
    document.onkeyup = function(e) {
        if (e.which == 38) {
            e.preventDefault();
            document.querySelector("vui-icon[name='deal-up_bg']").click();
        } else if (e.which == 40) {
            e.preventDefault();
            document.querySelector("vui-icon[name='deal-down_bg']").click();
        } else {
            alert("Anda Menggunakan Shortcut [Binomo] gunakan dengan bijak salam profit. Made by @ReynaldyZanuar");
        }
    }
);
