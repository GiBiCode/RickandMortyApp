import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickRoutingModule } from './rick-routing.module';
import { MortyComponent } from './components/morty/morty.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    MortyComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    RickRoutingModule,
    MaterialModule
  ]
})
export class RickModule { }
