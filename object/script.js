// cara untuk membuat object pada javascript
// 1. Object Literal
// PROBLEM: tidak efektif untuk object yang banyak

// let mahasiswa = {
//   nama: "Taqi",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat makan ${this.nama}`);
//   },
// };

// 2. Function declaration

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, Selamat Makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat bermain`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`halo ${this.nama}, selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }
//

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat main!`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur!`;
};

let taqi = new Mahasiswa("Taqi", 10);

// 3. Constructor function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, Selamat Makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat bermain`);
//   };
// }

// let taqi = new Mahasiswa("taqi", 10);

// 4. object.create
