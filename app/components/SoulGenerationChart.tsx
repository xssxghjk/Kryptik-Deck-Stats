import { Doughnut } from "react-chartjs-2";
import { DeckStats } from "~/convertDeckStats";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
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
