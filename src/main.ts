import './style.css'
import { ElectricRat } from './ElectricRat.ts'

const eRats: ElectricRat[] = [];
const rat: ElectricRat = new ElectricRat("Fernando");
console.log(rat.name, rat.attack, rat.health);
eRats.push(rat);

function CreateNewRat(event: SubmitEvent) {
  event.preventDefault();
  const ratForm = document.getElementById("RAT_FORM") as HTMLFormElement;
  const ratName = document.getElementById("RAT_FORM_NAME") as HTMLInputElement;
  const newRat: ElectricRat = new ElectricRat(ratName.value);
  console.log(newRat.name, newRat.attack, newRat.health);
  // alert("New rat has been added! 🐀")
  eRats.push(newRat);
  ratForm.reset();
  ListRats ()
}

function ListRats () {
  const cards = document.getElementById("CARDS") as HTMLDivElement;
  cards.innerHTML = "";

  eRats.forEach(eRat => {
    console.log("Listed");
    const card = document.createElement("div");
    cards.appendChild(card);

    const pName = document.createElement("p");
    pName.innerText = `${eRat.name}`;
    card.appendChild(pName);

    const pAttack = document.createElement("p");
    pAttack.innerText = `ATK: ${eRat.attack}⚔️`;
    card.appendChild(pAttack);

    const pHealth = document.createElement("p");
    pHealth.innerText = `HP: ${eRat.health}💖`;
    card.appendChild(pHealth);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded 😊");
  document.getElementById("RAT_FORM")?.addEventListener("submit", CreateNewRat);

  ListRats();
})
