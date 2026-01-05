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

// let mahasiswa = ["Taqiyyah Adha", "Taqiyyah", "Taqi"];
// kalo cara biasa
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// kalo pake arrow function
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

//kalo mengembalikan dalam bentuk object bukan array
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jumHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// KONSEP THIS PADA ARROW FUNCTION

// CONSTRUCTOR FUNCTION

// const Mahasiswa = function () {
//   this.nama = "Taqiyyah";
//   this.umur = "22";
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dsn saya ${this.umur} tahun.`);
//   };
// };
// const taqi = new Mahasiswa();

// ARROW FUNCTION (tidal memiliki konsep this)
// const Mahasiswa = function () {
//   this.nama = "Taqiyyah";
//   this.umur = "22";
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dsn saya ${this.umur} tahun.`);
//   };
// };
// const taqi = new Mahasiswa();

// OBJECT LITERAL
// const mhs1 = {
//   nama: "Taqiyyah",
//   umur: 22,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dsn saya ${this.umur} tahun.`);
//   },
// };

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
