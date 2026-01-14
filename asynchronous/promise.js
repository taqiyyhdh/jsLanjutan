// // contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("Janji tidak ditepati!");
//   }
// });
// janji1
//   .then((response) => console.log("OK! " + response))
//   .catch((response) => console.log("NOT OK! " + response));

// // contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Janji telah ditepati!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Janji tidak ditepati!");
//     }, 2000);
//   }
// });
// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu!"))
//   .then((response) => console.log("OK! " + response))
//   .catch((response) => console.log("NOT OK! " + response));

// console.log("selesai");
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        durasi: "120 menit",
        sutradara: "Joss Whedon",
      },
      {
        judul: "Spiderman",
        durasi: "120 menit",
        sutradara: "Jon Watts",
      },
    ]);
  }, 1000);
});
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Jakarta",
        suhu: "30°C",
        kondisi: "Cerah",
      },
      {
        kota: "Bandung",
        suhu: "25°C",
        kondisi: "Hujan",
      },
    ]);
  }, 500);
});
// // cara biasa
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  // kalo array ingin terpisah
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
