import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  private _c1;
  private _c2;
  constructor(c1: Character, c2: Character) {
    super(c1);
    this._c1 = c1;
    this._c2 = c2;
  }
  
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}