import { DeckStats } from "~/convertDeckStats";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ElevenYearCurveChart = (deckStats: DeckStats) => {
  return (
    <Bar
      id={"elevenYearCurveChart"}
      data={{
        labels: deckStats.elevenYearCurve.map((_, index) => index),
        datasets: [
          {
            data: deckStats.elevenYearCurve,
            backgroundColor: "lightgrey",
          },
        ],
      }}
    />
  );
};
