// Core Pokémon details type (based on PokeAPI response)
export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}

// Type for each Pokémon type (e.g. grass, poison, fire)
export interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

// Type for Pokémon stats (e.g. hp, attack, defense)
export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

// Type for Pokémon abilities
export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
