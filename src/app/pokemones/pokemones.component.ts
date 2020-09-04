import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Observable, of, interval } from 'rxjs';
import { tap, debounce, switchMap } from 'rxjs/operators';


import listadepokemones from 'src/assets/json/pokemones.json'; 

interface Pokemones {
	nombre: string;
	fortaleza: string;
	debilidad: string;
	tipo: string;
	img: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})

export class PokemonesComponent implements OnInit {

	titulo = "Buscador de Pokemones en Tiempo Real con Angular 10";

	pokemones: Pokemones [] = listadepokemones;

	buscarPokemon: string;

  	constructor() { }

  	ngOnInit(): void {
  }

}
