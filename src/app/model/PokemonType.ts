export type PokemonType = {
  id: number;
  name: string;
  weight: number;
  height: number;

  sprites: {
    official_artwork: string;
  };

  types: {
    type: {
      name: string;
    };
  }[];

  stats:{
    hp: number;
    atk: number;
    def: number;
    satk: number;
    sdef: number;
    spd: number;
  }

  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];

  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
};
