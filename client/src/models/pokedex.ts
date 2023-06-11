export interface ResponsePokedex {
    results: Pokemon[];
    totalPage: number;
}

export interface Pokemon {
    name: string;
    front_default: string;
    types: string;
    weight: number;
    stats?: Stats[];
}

export interface Stats {
    stats_name: string;
    basic_stat: number;
}
  