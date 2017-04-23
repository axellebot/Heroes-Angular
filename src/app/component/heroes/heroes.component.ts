import {Component, OnInit} from '@angular/core';
import {Hero} from '../../models/hero';
import {HeroService} from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

  title = 'My Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(values => this.heroes = values);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
