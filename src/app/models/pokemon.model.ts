export interface IStat {
    name: string;
    base_stat: number;
}

export interface IPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprite: string;
    type1: string;
    type2?: string;
    abilities: string[];
    hidenAbility?: string;
    stats: IStat[];
}