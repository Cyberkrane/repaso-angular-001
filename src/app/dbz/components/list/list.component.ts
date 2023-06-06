import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 150
    }
  ]
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(i: number) {
  //   console.log(i + ' desde list');
  //   this.characterList.splice(i, 1);
  // }
  onDeleteCharacter(id?: string): void {

    if (!id) return;
    this.onDelete.emit(id); 
  }

}
