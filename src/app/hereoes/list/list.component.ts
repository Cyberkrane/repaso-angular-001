import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroesNames = ['Spiderman', 'Ironman', 'hulk', 'she-hulk', 'black-widow', 'captain-america', 'thor','antman'];
  public heroeBorrado?: string;
  borrarHeroe(){
    this.heroeBorrado = this.heroesNames.pop();
  }
}
