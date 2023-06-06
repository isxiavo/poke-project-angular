import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { PokemonType } from '../model/PokemonType';
import { SpeciesType } from '../model/SpeciesType';

@Injectable({
  providedIn: 'root'
})
export class FetchPokemonsService {

  private pokemons: PokemonType[] = []

  getPokemons(limit: number, offset: number): PokemonType[] {
    this.http.get<any>(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    ).subscribe(
     {

      next:(res) => {
        res.results.map((p: {url: string}, i: number) => {

          this.http.get<any>(p.url).subscribe(
            {
              next: (poke) => {
                const newPoke: PokemonType = {
                  id: poke.id,
                  name: poke.name,
                  weight: poke.weight,
                  height: poke.height,
                  sprites: {
                    official_artwork: poke.sprites.other['official-artwork'].front_default
                  },
                  types: poke.types,
                  abilities: poke.abilities,
                  moves: poke.moves
                }
                this.pokemons[i] = newPoke
              }
            }

          )
        })
      },
      error: (err) => (console.log(err)),
      complete: () => {}
     }
    )
    return this.pokemons
  }

  getSpecies(name: string): SpeciesType {
    return this.http.get<SpeciesType>(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`
    )
  }

  constructor(private http: HttpClient) { }
}