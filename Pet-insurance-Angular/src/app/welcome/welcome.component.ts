import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsurancePackagesService } from '../insurance-packages.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private routerMod: Router, private user: InsurancePackagesService) { }

  pageButtonClicked() {
    console.log('adfasdf');
    this.routerMod.navigate(['/superheros']);
  }
/*
  pokemonButtonClicked() {
    // console.log('Poke clicked');
    this.pokes.retreivePokemon().subscribe(
      data => {
        const ourField = 'name';
        console.log(data);
        this.currentPoke = data[ourField];
        console.log('name? ', data[ourField]);
      }
    );
  } */

/*   pokemonButtonClickedAgain() {
    // console.log('Poke clicked 2');
    this.pokes.retreivePokemon2().subscribe(
      data => {
        console.log(data);
        console.log(data.base_experience);
        console.log(data.id);
        console.log('name ', data.name);
      }
    );
  } */

  myJsonClicked() {
    // console.log('Poke clicked 2');
    this.user.getAnimals();
  }

}
