import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _c1;
  private _c2;
  constructor(c1: Fighter, c2: Fighter) {
    super(c1);
    this._c1 = c1;
    this._c2 = c2;
  }
  
  tradeBlows() {
    this._c1.attack(this._c2);
    this._c2.attack(this._c1);
  }

  fight(): number {
    while (this._c1.lifePoints > -1 && this._c2.lifePoints > -1) {
      this.tradeBlows();
    }
    return this._c1.lifePoints === -1 ? -1 : 1;
  }
}