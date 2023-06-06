import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character-interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent {

    title: string = 'dbz main-page';

    constructor(private dbzService: DbzService) {}

// este es un getter
    get characters(): Character[] {
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(id: string): void {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }
}