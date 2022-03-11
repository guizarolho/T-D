export default interface SimpleFighter {
  lifePoints: number,
  strength: number,
  attack(enemy: SimpleFighter): void,
  receiveDamage(enemy: SimpleFighter): void, 
}