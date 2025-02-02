document.addEventListener("DOMContentLoaded", function () {
    const hariIni = new Date()
        .toLocaleDateString("id-ID", { weekday: "long" })
        .toLowerCase();

    const hariId = {
        senin: "senin",
        selasa: "selasa",
        rabu: "rabu",
        kamis: "kamis",
        jumat: "jumat"
    };

    const namaHari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    let hariIni2 = new Date();

    let hariEsok = new Date();
    hariEsok.setDate(hariIni2.getDate() + 1);

    let namaHariEsok = namaHari[hariEsok.getDay()];
    let tanggalEsok = hariEsok.getDate();
    let namaBulanEsok = namaBulan[hariEsok.getMonth()];
    let tahunEsok = hariEsok.getFullYear();

    let teksEsok = `Untuk Besok,${namaHariEsok}, ${tanggalEsok} ${namaBulanEsok} ${tahunEsok}`;

    // Tampilkan di halaman
    document.getElementById("prbesok").innerText = teksEsok;
    document.getElementById("infobesok").innerText = teksEsok;

    if (hariId[hariIni]) {
        document.getElementById(hariId[hariIni]).classList.add("highlight");
    }
    function loadData() {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                let tbody = document.querySelector("#tabelpr tbody");
                tbody.innerHTML = "";

                data.forEach(item => {
                    let row = `<tr>
                            <td>${item.no}</td>
                            <td>${item.pelajaran}</td>
                            <td>${item.keterangan}</td>
                        </tr>`;
                    tbody.innerHTML += row;
                });
            })
            .catch(error => console.error("Gagal memuat data:", error));
    }
    document.addEventListener("DOMContentLoaded", loadData);
});
