import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DataCard, KryptikDeckDto } from "~/KryptikApiTypes";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { soulColorMap } from "~/soulColorMap";

ChartJS.register(ArcElement, Tooltip, Legend);

// Calling the API from the server to avoid CORS issues
export async function loader({ params }: LoaderArgs) {
  const deckId = params.deckId;
  const response = await fetch(`https://play-api.carde.io/v1/decks/${deckId}`);
  return json(convertToDeckStats(await response.json()));
}

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

const convertToDeckStats = (kryptikDeckDto: KryptikDeckDto) => {
  const deck = kryptikDeckDto.data.deck;
  const profile = kryptikDeckDto.data.user.profile;
  const flatDeck = convertToFlatDeck(kryptikDeckDto);

  return {
    name: deck.name,
    creator: `${profile.firstName} ${profile.lastName}`,
    soulBase: calculateSoulBase(flatDeck),
  };
};

type DeckStats = ReturnType<typeof convertToDeckStats>;

export default function KryptikDeckView() {
  const deckStats = useLoaderData<DeckStats>();
  return (
    <div>
      <h1>{deckStats?.name}</h1>
      <h3>by {deckStats.creator}</h3>
      <div className={"w-1/2 block m-auto"}>
        <h2 className={"text-center"}>Soul Generation Base</h2>
        <Doughnut
          id={"soulBaseChart"}
          data={{
            labels: ["White", "Black", "Green", "Blue"],
            datasets: [
              {
                data: [
                  deckStats.soulBase.white,
                  deckStats.soulBase.black,
                  deckStats.soulBase.green,
                  deckStats.soulBase.blue,
                ],
                backgroundColor: ["white", "black", "green", "blue"],
                hoverOffset: 4,
              },
            ],
          }}
        />
        <h3 className={"text-center"}>
          Sum:{" "}
          {deckStats.soulBase.black +
            deckStats.soulBase.white +
            deckStats.soulBase.blue +
            deckStats.soulBase.green}{" "}
        </h3>
      </div>
    </div>
  );
}
