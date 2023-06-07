import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { ListSimpleComponent } from './pages/pokedex/list-simple/list-simple.component';
import { ListDetailComponent } from './pages/pokedex/list-detail/list-detail.component';
import { PokeSimpleComponent } from './pages/pokedex/list-simple/poke-simple/poke-simple.component';
import { TypeTagComponent } from './components/type-tag/type-tag.component';
import { FilterbarComponent } from './pages/pokedex/filterbar/filterbar.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ToolsbarComponent } from './pages/pokedex/toolsbar/toolsbar.component';
import { PokeDetailComponent } from './pages/pokedex/list-detail/poke-detail/poke-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    ListSimpleComponent,
    ListDetailComponent,
    PokeSimpleComponent,
    TypeTagComponent,
    FilterbarComponent,
    MenuComponent,
    ToolsbarComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
