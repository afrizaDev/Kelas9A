document.addEventListener("DOMContentLoaded", function () {
const hariIni = new Date().toLocaleDateString("id-ID", { weekday: "long" }).toLowerCase();
    
const hariId = {
    "senin": "senin",
    "selasa": "selasa",
    "rabu": "rabu",
    "kamis": "kamis",
    "jumat": "jumat"
};

if (hariId[hariIni]) {
    document.getElementById(hariId[hariIni]).classList.add("highlight");
}
});