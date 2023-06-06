import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PageContentsComponent } from './shared/page-contents/page-contents.component';

const routes: Routes = [
  { path: '', component: PageContentsComponent, pathMatch: 'full' },
  { path: 'pokedex', component: PokedexComponent, pathMatch: 'prefix' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }