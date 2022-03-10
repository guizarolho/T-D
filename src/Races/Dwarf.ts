import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static instances = 0;
  
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addToCount();
  }

  static addToCount() {
    this.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;  
  }

  static createdRacesInstances():number {
    return this.instances;
  }
}