export {};

declare global {
  interface IPokeInfo {
    types: IPokeType[];
    forms: IPokeForms[];
    abilities: Ability1[];
  }

  interface IPokeForms {
    name: string;
  }

  interface IPokeType {
    slot: number;
    type: IType;
  }

  interface Ability1 {
    ability: Ability2;
  }

  interface Ability2 {
    name: string;
  }

  interface IType {
    name: string;
  }
}
