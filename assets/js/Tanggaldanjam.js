function updateTanggalDanJam() {
    let now = new Date();
    let tanggal = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    let jam = now.getHours().toString().padStart(2, '0');
    let menit = now.getMinutes().toString().padStart(2, '0');
    let detik = now.getSeconds().toString().padStart(2, '0');
    let waktu = `${jam}:${menit}:${detik}`;

    document.getElementById("tanggal").innerText = tanggal;
    document.getElementById("jam").innerText = waktu;
}

setInterval(updateTanggalDanJam, 1000);
updateTanggalDanJam();