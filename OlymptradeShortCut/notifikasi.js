var notifikasi = {
    type: "basic",
    title: "[OLYMPTRADE] Shortcut Activated",
    message: "Gunakan dengan bijak, Salam Profit              IG: @Gagassurya19",
    iconUrl: "olymptrade.png"
}

chrome.notifications.create(notifikasi, panggilNotif);

function panggilNotif() {
    console.log('Success by Gagassurya19');
}