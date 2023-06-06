export type PokemonType = {
  id: number;
  name: string;
  weight: number;
  height: number;

  sprites: {
    official_artwork: string
  }

  types: [
    {type:{
      name: string
    }}
  ]
      


  abilities: 
    {
      ability:{
        name: string;
        url: string;
      }
      is_hidden: boolean;
      slot: number;
    }[]
  

  moves: [
    {
      moves:{
        name: string;
        url: string;
      }
    }
  ]
}