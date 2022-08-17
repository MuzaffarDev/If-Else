let name = prompt("Ismingizni kiriting!");
alert(`Assaalomu aleykum ${name}!`);

let travel = prompt("Qaysi mamlakatga uchmoqchisiz?");
alert(`Ajoyib tanlov ${name}`);

const dollar = 1100.34;
const yevro = 1234.04;

let bilet = 500;
let mehmonxona = 250;
let aylanish = 120;

let xarajtlaryigindisi = (bilet + mehmonxona) * dollar + aylanish * yevro;
   console.log(`xarajatlar`);

let usermoney = prompt("Joriy mablag'ingizni kiriting!", 2000000);

if (xarajtlaryigindisi >= usermoney) {
  console.log(`Afsus ${name} sizda ${travel}ga borgani mablag' yetarli emas`);
} else {
  console.log(`${name} sizda ${travel}ga borishga mablag' yetarli`);
}
