import { ColorIdentity } from "~/routes/deck.$deckId";

export const soulColorMap: Record<string, ColorIdentity> = {
  // generic
  "63e8841f015c08eff691f850": {
    black: false,
    blue: false,
    green: false,
    white: false,
  },
  // black
  "63e6c5065893bd0627db0acf": {
    black: true,
    blue: false,
    green: false,
    white: false,
  },
  // blue
  "63e6c5145893bd0627db0ad1": {
    black: false,
    blue: true,
    green: false,
    white: false,
  },
  // green
  "63e6c50e5893bd0627db0ad0": {
    black: false,
    blue: false,
    green: true,
    white: false,
  },
  // white
  "63e6c51c5893bd0627db0ad2": {
    black: false,
    blue: false,
    green: false,
    white: true,
  },
  // green-black
  "63e6c5275893bd0627db0ad3": {
    black: true,
    blue: false,
    green: true,
    white: false,
  },
  // black-white
  "63e6c53f5893bd0627db0ad4": {
    black: true,
    blue: false,
    green: false,
    white: true,
  },
  // blue-black
  "63e6c54e5893bd0627db0af6": {
    black: true,
    blue: true,
    green: false,
    white: false,
  },
  // white-blue
  "63e6c54e5893bd0627db0ad5": {
    black: false,
    blue: true,
    green: false,
    white: true,
  },
  // green-blue
  "63e6c5545893bd0627db0ad6": {
    black: false,
    blue: true,
    green: true,
    white: false,
  },
  // green-white
  "63e6c54e5893bd0627db0af5": {
    black: false,
    blue: false,
    green: true,
    white: true,
  },
};
