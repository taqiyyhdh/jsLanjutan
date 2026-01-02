// cara untuk membuat object pada javascript
// 1. Object Literal
// let mahasiswa = {
//   nama: "Taqi",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat makan ${this.nama}`);
//   },
// };

// 2. Function declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, Selamat Makan`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat bermain`);
//   };

//   return mahasiswa;
// }
// let taqi = Mahasiswa("taqi", 10);
// let jilan = Mahasiswa("jilan", 20);

// 3. Constructor function
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`halo ${this.nama}, Selamat Makan`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`halo ${this.nama}, selamat bermain`);
  };
}

let taqi = new Mahasiswa("taqi", 10);

// 4. object.create
