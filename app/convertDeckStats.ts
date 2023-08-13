import { DataCard, KryptikDeckDto } from "~/KryptikApiTypes";
import { soulColorMap } from "~/soulColorMap";

type Color = "white" | "black" | "green" | "blue";
export type ColorIdentity = Record<Color, boolean>;

const convertToFlatDeck = (kryptikDeckDto: KryptikDeckDto) => {
  const cards = kryptikDeckDto.data.cards;
  const flatDeck: DataCard[] = [];
  kryptikDeckDto.data.deck.sections[0].cards.forEach((sectionCard) => {
    for (let i = 0; i < sectionCard.count; i++) {
      const currentCard = cards.find((card) => card._id === sectionCard.cardId);
      if (currentCard) flatDeck.push(currentCard);
    }
  });
  return flatDeck;
};

const getByColor = (deck: DataCard[], color: Color) =>
  deck.filter((card) => soulColorMap[card.soul.generatedSoul][color]);

const countByColor = (deck: DataCard[], color: Color) =>
  getByColor(deck, color).length;

const calculateSoulBase = (deck: DataCard[]) => ({
  white: countByColor(deck, "white"),
  black: countByColor(deck, "black"),
  green: countByColor(deck, "green"),
  blue: countByColor(deck, "blue"),
});

export const convertToDeckStats = (kryptikDeckDto: KryptikDeckDto) => {
  const deck = kryptikDeckDto.data.deck;
  const profile = kryptikDeckDto.data.user.profile;
  const flatDeck = convertToFlatDeck(kryptikDeckDto);

  return {
    name: deck.name,
    creator: `${profile.firstName} ${profile.lastName}`,
    soulBase: calculateSoulBase(flatDeck),
  };
};

export type DeckStats = ReturnType<typeof convertToDeckStats>;
