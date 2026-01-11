// Destructuring

// function kalkulasi(a, b) {
//   return [a + b, a * b, a - b];
// }
//cara biasa
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

//cara destructuring
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);
// const [jumlah, kali, kurang, bagi = "Tidak ada"] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);
// console.log(kurang);
// console.log(bagi);

// urutan array berpengaruh pada variabel
// sedangkan pada object tidak berpengaruh pada variabel
function kalkulasiObj(a, b) {
  return {
    tambah: a + b,
    kali: a * b,
    kurang: a - b,
    bagi: a / b,
  };
}
const { bagi, kurang, kali, tambah } = kalkulasiObj(2, 3);
console.log(tambah);
console.log(kali);
console.log(kurang);
console.log(bagi);

//destructuring function arguments
const mhs1 = {
  nama: "Andi",
  umur: 22,
  email: "<EMAIL>",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90,
  },
};
// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun, email saya adalah ${mhs.email}`;
// }
// console.log(cetakMhs(mhs1));

// cara destructuring
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai saya adalah tugas: ${tugas}, uts: ${uts}, uas: ${uas}.`;
}
console.log(cetakMhs(mhs1));
