import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

const routes: Routes = [
  { path: 'pokedex', component: PokedexComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'pokedex' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }