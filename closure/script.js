// Alasan membuat closure
// 1. untuk membuat function factories
// 2. untuk membuat private method

// function init() {
//   let nama = 'Taqi';
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("taqi");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga hari mu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// console.dir(selamatMalam("Taqi"));

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
