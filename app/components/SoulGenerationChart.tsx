import { Doughnut } from "react-chartjs-2";
import { DeckStats } from "~/convertDeckStats";

export const SoulGenerationChart = (deckStats: DeckStats) => (
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
);
