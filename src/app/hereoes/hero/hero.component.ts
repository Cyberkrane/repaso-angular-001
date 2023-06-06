import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public heroName: string = 'ironman';
  public heroAge: number = 45;

  // los getters se ven como propiedades pero son metodos; aunque para invocarlos no hace falta incluir los parentesis.
  get capitalizedNAme(): string {
    return this.heroName.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.heroName} is ${this.heroAge} years old`;
  }

  changeHero(): void {
    this.heroName = 'Spiderman';
  }

  changeAge(): void {
    this.heroAge = 30;
  }

  restetForm(): void {
    this.heroName = 'ironman';
    this.heroAge = 45;
  }
}
