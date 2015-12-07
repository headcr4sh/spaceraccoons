const NAME = Symbol('name');

export default class Character {

  constructor(name: string) {
    this.name = name;		
  }

  public get name(): string {
    return this[NAME];
  }

  public set name(name: string) {
    this[NAME] = name;
  }

}