export interface KryptikDeckDto {
  data: Data;
}

export interface Data {
  deck: Deck;
  cards: DataCard[];
  user: User;
  gameUser: GameUser;
}

export interface DataCard {
  _id: string;
  gameId: GameID;
  name: string;
  slug: string;
  firstAppearance: FirstAppearance;
  cardType: CardType;
  faction: Faction | null;
  soul: Soul;
  elevenYear: ElevenYear;
  attack: number | null;
  defense: number | null;
  traits: string[];
  abilities: string[];
  isLive: boolean;
  images: Images;
  searchText: string;
  metaData: CardMetaData;
  deckBuildingRuleIds?: string[];
  limit?: number;
}

export enum CardType {
  The63E6Be610B653Ff196Af5Eee = "63e6be610b653ff196af5eee",
  The63E6Be660B653Ff196Af5Eef = "63e6be660b653ff196af5eef",
  The63Ebfc65Acb7A56E2B067C1D = "63ebfc65acb7a56e2b067c1d",
}

export interface ElevenYear {
  cost: number | null;
  ability: null | string;
}

export enum Faction {
  The63E6C8675893Bd0627Db0Ad9 = "63e6c8675893bd0627db0ad9",
  The63E6C86C5893Bd0627Db0Ada = "63e6c86c5893bd0627db0ada",
  The63E6C8715893Bd0627Db0ADB = "63e6c8715893bd0627db0adb",
  The63E6C8755893Bd0627Db0ADC = "63e6c8755893bd0627db0adc",
  The63E6C8Ad5893Bd0627Db0Ade = "63e6c8ad5893bd0627db0ade",
}

export enum FirstAppearance {
  The63E6Cf745893Bd0627Db0Afb = "63e6cf745893bd0627db0afb",
  The63Ee794B46C3262333Dd7D72 = "63ee794b46c3262333dd7d72",
}

export enum GameID {
  The63629C4A639Be3Af43D64C47 = "63629c4a639be3af43d64c47",
}

export interface Images {
  large: string;
  small: string;
  tts: string;
}

export interface CardMetaData {
  createdAt: Date;
  updatedAt: Date;
}

export interface Soul {
  totalCost: number;
  cost: Cost[];
  generatedSoul: string;
  basicSoulTypes: string;
  basicCostTypes: string;
  basicProvidedTypes: string;
}

export interface Cost {
  amount: string;
  soul: string;
}

export interface Deck {
  _id: string;
  name: string;
  notes: string;
  deckImageUrl: string;
  sections: Section[];
  sharing: Sharing;
  tags: any[];
  formatId: string;
  errors: Errors;
  gameId: GameID;
  userId: string;
  metrics: Metrics;
  metaData: CardMetaData;
  deckTagIds: any[];
  formatOptions: FormatOptions;
  hash: string;
}

export interface Errors {
  deckSection: { [key: string]: DeckSection };
}

export interface DeckSection {
  $: string[];
}

export interface FormatOptions {}

export interface Metrics {
  cardTypes: CardTypes;
  totalCost: TotalCost;
  symbolsInstance: SymbolsNce;
  symbolsPresence: SymbolsNce;
  traits: Traits;
}

export interface CardTypes {
  visualizations: string[];
  "63e6be660b653ff196af5eef": number;
  "63e6be610b653ff196af5eee": number;
}

export interface SymbolsNce {
  visualizations: string[];
  "63e6c53f5893bd0627db0ad4": number;
  "63e8841f015c08eff691f850": number;
  "63e6c5275893bd0627db0ad3": number;
  "63e6c5145893bd0627db0ad1": number;
  "63e6c50e5893bd0627db0ad0": number;
  "63e6c5065893bd0627db0acf": number;
  "63e6c54e5893bd0627db0af6": number;
  "63e6c54e5893bd0627db0ad5": number;
  "63e6c5545893bd0627db0ad6": number;
}

export interface TotalCost {
  "1": { [key: string]: number };
  "2": The2;
  "3": The2;
  "4": The4;
  "5": { [key: string]: number };
  visualizations: string[];
  split: string;
  field: string;
}

export interface The2 {
  total: number;
  "63e6be660b653ff196af5eef": number;
}

export interface The4 {
  total: number;
  "63e6be610b653ff196af5eee": number;
}

export interface Traits {
  visualizations: string[];
  field: null;
  "63e6cf685893bd0627db0ae2": number;
  "63e6cf805893bd0627db0ae4": number;
  "63e6cf9b5893bd0627db0ae6": number;
  "63e6cf745893bd0627db0ae3": number;
  "63e6cf745893bd0627db0af8": number;
  "63f3e5062f099925c9a4ca46": number;
}

export interface Section {
  deckSectionId: string;
  cards: SectionCard[];
  cardCount: number;
}

export interface SectionCard {
  cardId: string;
  count: number;
}

export interface Sharing {
  status: string;
}

export interface GameUser {
  _id: string;
  userId: string;
  gameId: GameID;
  imageUrl: string;
  teamName: string;
  playerNumber: number;
  points: Points;
  stats: Stats;
  metaData: GameUserMetaData;
}

export interface GameUserMetaData {
  updatedAt: Date;
}

export interface Points {
  currentLoyalty: number;
  lifetimeLoyalty: number;
}

export interface Stats {
  games: Games;
  matches: Games;
  opponents: any[];
  events: any[];
}

export interface Games {
  played: number;
  won: number;
  lost: number;
  drawn: number;
}

export interface User {
  _id: string;
  profile: Profile;
}

export interface Profile {
  firstName: string;
  lastName: string;
  nickname: string;
}
