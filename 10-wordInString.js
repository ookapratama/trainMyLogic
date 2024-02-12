// 10 Mengganti kata yang sama didalam string
// source : Pijar Camp (soal tes bootcamp)
/* 
desc : Buatlah fungsi ubahKata yang mempunyai 3 parameter yakni “hurufAwal”, “hurufGanti” dan “kata”, yang akan merubah semua hurufAwal di parameter kata menjadi hurufGanti. Misal mengganti huruf “a” di kata “Purwakarta” menjadi huruf “o” sehingga hasil akhir adalah “Purwokorto” (soal bonus sebaiknya dikerjakan).

Contoh output:
ubahKata(“a”, “o”, “Purwakarta”)
Kata sebelumnya: Purwakarta
Kata setelah diubah: Purwokorto
*/

// const ubahKata = (hurufAwal, hurufGanti, kata) => {
//   let kataBaru = kata
//     .split("")
//     .map((item) => {
//       if (item == hurufAwal) {
//         item = hurufGanti;
//       }
//       return item
//     }).join("");
//   console.log(`Kata sebelumnya: ${kata}`);
//   return `Kata setelah diubah: ${kataBaru}`;
// };

// const ubahKata = (hurufAwal, hurufGanti, kata) => {
//   let kataBaru = kata
//     .split("")
//     .map((item) => {
//       return item == hurufAwal ? hurufGanti : item
//     }).join("");
//   console.log(`Kata sebelumnya: ${kata}`);
//   return `Kata setelah diubah: ${kataBaru}`;
// };

const ubahKata = (hurufAwal, hurufGanti, kata) => {
  return kata
    .split("")
    .map((item) => {
      return item == hurufAwal ? hurufGanti : item;
    })
    .join("");
};

console.log(ubahKata("s", "o", "Makassar"));
