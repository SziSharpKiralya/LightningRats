import './style.css'
import { ElectricRat } from './ElectricRat.ts'

const rat: ElectricRat = new ElectricRat("Fernando");
console.log(rat.name, rat.attack, rat.health);

function CreateNewRat(event: SubmitEvent) {
  event.preventDefault();
  const ratForm = document.getElementById("RAT_FORM") as HTMLFormElement;
  const ratName = document.getElementById("RAT_FORM_NAME") as HTMLInputElement;
  const newRat: ElectricRat = new ElectricRat(ratName.value);
  console.log(newRat.name, newRat.attack, newRat.health);
  ratForm.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded 😊");
  document.getElementById("RAT_FORM")?.addEventListener("submit", CreateNewRat);
})
