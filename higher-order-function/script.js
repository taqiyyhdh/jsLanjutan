const angka = [1, 2, 3, -4, 5, 0, -1, 8, 9, -3];

//FILTER
//mencari angka > =3

//pakai for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);

//pakai filter
const newAngka2 = angka.filter((a) => a < 3);
console.log(newAngka2);

// MAP
// Kaliakan semua angka dengan 2
const newAngka3 = angka.map((a) => a * 2);
console.log(newAngka3);

// REDUCE
//jumlahkan semua angka
const newAngka4 = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(newAngka4);

// Method Chaining
// cari angka > 5, kalikan 3, jumlahkan
const hasil = angka
  .filter((a) => a > 5) //8 9
  .map((a) => a * 3) //24 27
  .reduce((acc, cur) => acc + cur, 0); //51
console.log(hasil);
