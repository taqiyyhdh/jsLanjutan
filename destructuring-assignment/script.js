// Destructuring Variabel / Assignment

// Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Andi"];

// kalo cara biasa
// const salam = perkenalan[0];
// const andi = perkenalan[3];
// console.log(salam); // Halo
// console.log(andi); // Andi

// kalo pake destructuring
// const [salam, nama, saya, andi] = perkenalan;
// skiping items
// const [salam, , , andi] = perkenalan;
// console.log(salam); // Halo

// // swap items
// let a = 1;
// let b = 2;
// console.log(a); // 1
// console.log(b); // 2
// [a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1

// // return value pada function
// function coba() {
//   return [1, 2];
// }
// const [x, y] = coba();
// console.log(x);

// // rest parameter
// const [m, ...values] = [1, 2, 3, 4, 5];
// console.log(m); // 1
// console.log(values); // [2, 3, 4, 5]

// DESTRUCTURING OBJECT
// const mhs = {
//   nama: "Andi",
//   umur: 22,
// };
// kalo cara biasa
// const nama = mhs.nama;
// const umur = mhs.umur;
// console.log(nama); // Andi
// console.log(umur); // 22

// // kalo pake destructuring
// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);

// // assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "Budi", umur: 25 });
// console.log(nama);
// console.log(umur);

// // assignment ke variabel baru
// const { nama: n, umur: u } = mhs;
// console.log(n);
// console.log(u);

// // memberi nilai default
// const mhs = {
//   nama: "Andi",
//   umur: 22,
//   // email: "
// };
// const { nama, umur, email = "<EMAIL>" } = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// // memeberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: "Andi",
//   umur: 22,
//   // email: "
// };
// const { nama: n, umur: u, email: e = "<EMAIL>" } = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

// // rest parameter
// const mhs = {
//   nama: "Andi",
//   umur: 22,
//   email: "<EMAIL>",
// };
// const { nama, ...values } = mhs;
// console.log(nama);
// console.log(values);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Andi",
  umur: 22,
  email: "<EMAIL>",
};
function getIdMhs(mhs) {
  return mhs.id;
}
console.log(getIdMhs(mhs)); // 123

// dengan destructuring
function getIdMhs({ id }) {
  return id;
}
console.log(getIdMhs(mhs)); // 123
