// TEMPLATE LITERRALS / TEMPLATE STRING

const nama = "Andi";
const umur = 20;
console.log(`Halo, nama saya ${nama}, saya berumur ${umur} tahun.`);

// ga pake bactick
console.log("Halo, nama saya " + nama + ", saya berumur " + umur + " tahun.");

// EMBEDDING EXPRESSIONS
console.log(`${1 + 1}`); // 2
console.log(`${alert("Halo")}`); // akan menampilkan alert terlebih dahulu, baru undefined karena alert tidak mengembalikan nilai apapun
const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`); // genap

// HTML FRAGMENT
const mhs = {
  nama: "Budi",
  umur: 22,
  nrp: "123456789",
  email: "budi@example.com",
};

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
</div>`;
console.log(el);
