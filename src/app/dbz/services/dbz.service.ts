import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character-interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 150000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 80000
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 70000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 60000
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 50000
    }
  ];

  addCharacter(character: Character): void {

    const newCharacter: Character = {
      ...character,
      id: uuid()
    }

    this.characters.push(newCharacter);
    console.log(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
