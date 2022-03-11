import { SimpleFighter } from './Fighter';
import getRandomInt from './utils';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  public defense = Number();
  
  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;
    if (damage > 0) { this._lifePoints -= damage; }
    if (this._lifePoints <= 0) { this._lifePoints = -1; }
    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
  
  levelUp(): void {
    this._strength += getRandomInt(1, 10);
  }
}