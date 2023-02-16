export type Ability = {
  name: string;
  isHidden: boolean;
};

export type Type = {
  type: string;
  color: string;
  icon: string;
};

export type Stat = {
  name: string;
  value: number;
};

export type Image = {
  front: string;
  shiny: string | null;
};

export type Color = {
  front: string;
  shiny: string;
};

export interface Pokemon {
  id: number;
  name: string;
  abilities: Ability[];
  height: number;
  sprites: string[];
  weight: number;
  types: Type[];
  stats: Stat[];
  texts: string;
  images: Image;
  colors: Color;
}
