// SPREAD OPERATOR
// mencoba iterables menjadi single elements

// menggabungkan 2 array
// const mhs1 = ["andi", "budi", "caca"];
// const dosen1 = ["dodi", "erik", "fajar"];

// const orang = [...mhs1, "Aji", ...dosen1];
// console.log(orang);

// // mengcopy array
// const mhs1 = ["andi", "budi", "caca"];
// // const mhs2 = mhs1; // ini bukan mengcopy, tapi mereferensikan
// const mhs2 = [...mhs1];
// mhs2[0] = "Aji";
// console.log(mhs1);
// console.log(mhs2);

// const liMhs = document.querySelectorAll("li");
// // manual
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// // dengan spread operator dan higher order function
// const mhs3 = [...liMhs].map((m) => m.textContent); // pake ... karena liMhs itu nodelist, bukan array klao pale map
// console.log(mhs3);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
