// // TEMPLATE LITERRALS / TEMPLATE STRING

// const nama = "Andi";
// const umur = 20;
// console.log(`Halo, nama saya ${nama}, saya berumur ${umur} tahun.`);

// // ga pake bactick
// console.log("Halo, nama saya " + nama + ", saya berumur " + umur + " tahun.");

// // EMBEDDING EXPRESSIONS
// console.log(`${1 + 1}`); // 2
// console.log(`${alert("Halo")}`); // akan menampilkan alert terlebih dahulu, baru undefined karena alert tidak mengembalikan nilai apapun
// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`); // genap

// // HTML FRAGMENT
// const mhs = {
//   nama: "Budi",
//   umur: 22,
//   nrp: "123456789",
//   email: "budi@example.com",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`;
// console.log(el);

// HTML FRAGMENTS - LOOPING
// const mhs = [
//   {
//     nama: "Andi",
//     email: "andi@example.com",
//   },
//   {
//     nama: "Budi",
//     email: "budi@example.com",
//   },
//   {
//     nama: "Citra",
//     email: "citra@example.com",
//   },
// ];
// const el = `<div class="mhs">
//   ${mhs
//     .map(
//       (m) => `<ul>
//       <li>Nama: ${m.nama}</li>
//       <li>Email: ${m.email}</li>
//     </ul>`
//     )
//     .join("")}
//   </div>`;

// HTML FRAGMENTS - CONDITIONAL
// const lagu = {
//   judul: "Tetap Dalam Jiwa",
//   penyanyi: "Isyana Sarasvati",
//   feat: "Rayi Putra",
// };
// const el = `<div class="lagu">
//   <ul>
//     <li>Penyanyi: ${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//   </ul>
// </div>`;

// HTML FRAGMENTS - NESTED
const mhs = {
  nama: "Andi",
  semester: 5,
  mataKuliah: ["Rekayasa Web", "Basis Data", "Pemrograman Mobile"],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol> 
      ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>`;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span>Semester: ${mhs.semester}</span>
  <h3>Mata Kuliah:</h3>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
