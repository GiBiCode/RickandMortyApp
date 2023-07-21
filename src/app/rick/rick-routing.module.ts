import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortyComponent } from './components/morty/morty.component';

const routes: Routes = [
  {
    path: '',
    component : MortyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickRoutingModule { }
