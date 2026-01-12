// REST PARAMETERS

// function jumlahkan(...angka) {
// let total = 0;
// for (const a of angka) {
//   total += a;
// }
// return total;
//   return angka.reduce((a, b) => a + b, 0);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["andi", "budi", "caca", "dodi", "erik"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// object destructuring
// const team = {
//   pm: "andi",
//   frontEnd1: "budi",
//   frontEnd2: "caca",
//   backEnd: "dodi",
//   ux: "erik",
//   devops: "fajar",
// };
// const { pm, ...myTeam } = team;
// console.log(pm);
// console.log(myTeam);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("number", 1, 2, "andi", false, 10, true, "caca"));
console.log(filterBy("string", 1, 2, "andi", false, 10, true, "caca"));
console.log(filterBy("boolean", 1, 2, "andi", false, 10, true, "caca"));
