import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PokemonesComponent } from './pokemones.component';
import { FilterPipe } from './filtrar.pipe';



@NgModule({
  declarations: [
  	PokemonesComponent, FilterPipe
  ],
  imports: [
    CommonModule, BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [PokemonesComponent]
})

export class PokemonesModule { }
