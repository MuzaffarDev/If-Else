let firstname = prompt("Ismingizni kiriting!");
alert(`Assaalomu aleykum ${firstname}!`);

let travel = prompt("Qaysi mamlakatga uchmoqchisiz?");
alert(`Ajoyib tanlov ${firstname}`);

const dollar = 11000;
const yevro = 12340;

let bilet = 500;
let mehmonxona = 250;
let aylanish = 120;

let xarajtlarYigindisi = (bilet + mehmonxona) * dollar + aylanish * yevro;

let usermoney = prompt("Joriy mablag'ingizni kiriting!", 2000000);

if (xarajtlarYigindisi >= usermoney) {
  console.log(
    `Afsus ${firstname} sizda ${travel}ga borgani mablag' yetarli emas`
  );
  alert(
    `Afsus ${firstname} sizda ${travel}ga borgani ${
      xarajtlarYigindisi - usermoney
    }  mablag' yetarli emas`
  );
} else {
  console.log(
    `${firstname} sizda ${travel}ga borishga mablag' yetarli yoningizda yana ozgina pul olvoling `
  );
  alert(
    `${firstname} sizda ${travel}ga borishga  mablag' yetarli yoningizda yana ozgina pul olvoling `
  );
}
