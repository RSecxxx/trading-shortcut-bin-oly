var notifikasi = {
    type: "basic",
    title: "[BINOMO] Shortcut Activated",
    message: "Gunakan dengan bijak, Salam Profit              IG: @Gagassurya19",
    iconUrl: "binomo.png"
}

chrome.notifications.create(notifikasi, panggilNotif);

function panggilNotif() {
    console.log('Success by Gagassurya19');
}