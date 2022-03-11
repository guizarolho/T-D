import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  lifePoints: number;
  strength: number;
  defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string,
  ) {
    this._race = new Elf(name, Number());
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this.lifePoints = this._race.maxLifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): void {
    const damage = attackPoints - this.defense;
    if (damage > 0) { this.lifePoints -= damage; }
    if (this.lifePoints <= 0) { this.lifePoints = -1; }
  }

  levelUp(): void {
    const attributes = [
      this._maxLifePoints,
      this.strength,
      this._dexterity,
      this.defense,
    ];
    this._energy.amount = 10;
    attributes.forEach((e) => {
      const upgradeBy = getRandomInt(1, 10);
      return e + upgradeBy;
    });
  }
}