// FUNCTION EXPRESSION
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Taqi"));

// CARA MENULIS ARROW FUNCTION
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Taqi", "Siang"));

// IMPLISIT RETURN
// const tampilNama = (nama) => `Halo, ${nama}`; //kalo 1 parameter tidak perlu pake kurung
// console.log("Taqi");

// TANPA PARAMETER
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

let mahasiswa = ["Taqiyyah Adha", "Taqiyyah", "Taqi"];
// kalo cara biasa
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// kalo pake arrow function
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

//kalo mengembalikan dalam bentuk object bukan array
let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jumHuruf: nama.length,
}));
console.table(jumlahHuruf);
