// 1. Tangkap form-nya
const form = document.getElementById('messageform');

const currentTime = new Date();

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nama = document.getElementById('nameInput').value;
    const tanggal = document.getElementById('birthDate').value;
    const pesan = document.getElementById('messageText').value;
    
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Tidak dipilih";

    const output = document.getElementById('output-text');
    
    const fullDate = new Date().toString(); 

    output.innerHTML = `
        <p class="mb-4"><b>Current time :</b> ${fullDate}</p>
        <p><b>Nama :</b> ${nama}</p>
        <p><b>Tanggal Lahir :</b> ${tanggal}</p>
        <p><b>Jenis Kelamin :</b> ${gender}</p>
        <p><b>Pesan :</b> ${pesan}</p>
    `;
});

function replaceName() {
    let name = prompt("Halo! Siapa nama kamu?", "");
    if (name == null || name == "") {
        name = "Guest";
    }
    document.getElementById("userName").innerText = name;
}

replaceName();

const websiteKetiga = document.getElementById('website-ketiga');
websiteKetiga.addEventListener('click', function() {

    alert("Coming Soon Yah, hehehe 😊");
});