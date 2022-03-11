import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player;
  private _environment;

  constructor(player: Fighter, environment: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._environment = environment;
  }

  target() {
    let index = 0;
    for (let i = 0; i < this._environment.length; i += 1) {
      if (this._environment[i].lifePoints === -1) index += 1;
    }
    return index;
  }

  tradeBlows() {
    this._player.attack(this._environment[this.target()]);
    this._environment
      .filter((e) => e.lifePoints > -1)
      .forEach((e) => e.attack(this._player));
  }

  enemiesAlive(): boolean {
    return this._environment.some((e) => e.lifePoints > -1);
  }

  fight(): number {
    while (this._player.lifePoints > -1 && this.enemiesAlive()) {
      this.tradeBlows();
      console.log(this._player);
      console.log(this._environment);
    }
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}