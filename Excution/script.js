// 2.1 EXECUTION CONTEXT, HOSTING & SCOPE

// creation phase pada global context
// nama var = undifined
// nama function  = fn()
// hoisting
// window = global object
// this = window

//execution phase

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = "Taqiyyah Adha";
// var username = "@taqiyyhdh";

// function cetakURL(username) {
//   var instagramURL = "https://instagram.com";
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

function satu() {
  var nama = "taqi";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "erik";
satu();
dua("Doddy");
console.log(nama);
