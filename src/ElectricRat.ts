export class ElectricRat {
  name: string;
  attack: number;
  health: number;
  
  constructor(name: string) {
    this.name = name;
    this.attack = Math.floor(Math.random() * 11) + 10;
    this.health = Math.floor(Math.random() * 51) + 50;
  }
}