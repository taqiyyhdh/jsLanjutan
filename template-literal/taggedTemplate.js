// TAGGED TEMPLATE

// nama = "Andi";
// umur = 25;
// // pake tagged template
// function coba(strings, ...values) {
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }
// // pake template biasa
// const str = coba`Halo nama saya ${nama} dan saya ${umur} tahun.`;
// console.log(str);

nama = "Andi";
umur = 25;
email = "andi@example.com";
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str} <span class="hl">${values[i] || ""}</span>`,
    ""
  );
}
const str = highlight`Halo nama saya ${nama} dan saya ${umur} tahun, dan email saya adalah: ${email}.`;
document.body.innerHTML = str;
