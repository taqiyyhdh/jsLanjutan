// SYNCHRONOUS CALLBACK

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }
// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan nama: ");
//   callback(nama);
// }
// // tampilkanPesan(halo);
// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// const mhs = [
//   {
//     nama: "Aldi",
//     nrp: "12345",
//     email: "aldi@example.com",
//     jurusan: "Informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Budi",
//     nrp: "67890",
//     email: "budi@example.com",
//     jurusan: "Sistem Informasi",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Citra",
//     nrp: "11223",
//     email: "citra@example.com",
//     jurusan: "Teknik Komputer",
//     idDosenWali: 3,
//   },
// ];
// console.log("Mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 100000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("Selesai");

// ASYNCHRONOUS CALLBACK

//jQuery
console.log("Mulai");
$.ajax({
  url: "mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => console.log(e.responseText),
});
console.log("Selesai");
