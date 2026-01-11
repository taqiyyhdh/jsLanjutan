// // FOR OF ARRAY
// const colors = ["red", "green", "blue"];

// // for biasa
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// // foreach
// colors.forEach((color) => {
//   console.log(color);
// });

// // for of
// for (const color of colors) {
//   console.log(color);
// }

// // FOR OF STRING
// const nama = "Andi";

// // for biasa
// for (let i = 0; i < nama.length; i++) {
//   console.log(nama[i]);
// }
// // foreach tidak bisa digunakan pada string

// // for of
// for (const char of nama) {
//   console.log(char);
// }

// // kembali ke array  kalo mau ambil index
// const mhs = ["Andi", "Budi", "Caca"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// FOR OF NODELIST
// const liNama = document.querySelectorAll(".nama");

// liNama.forEach((li) => {
//   console.log(li.textContent);
// });
// for (const li of liNama) {
//   console.log(li.innerHTML);
// }

// // FOR OF ARGUMENTS
// function jumlahkanAngka() {
//   // kalo pake reduce atau doreach gabisa soalnya arguments bukan array
//   // return Array.from(arguments).reduce((a, b) => a + b);
//   // arguments.forEach((a) => (jumlah += a)); // ga bisa
//   let jumlah = 0;
//   for (const angka of arguments) {
//     jumlah += angka;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// FOR IN (OBJECTS)
const mhs = {
  nama: "Andi",
  umur: 20,
  email: "andi@gmail.com",
};
for (const m in mhs) {
  console.log(`${m} : ${mhs[m]}`);
}
