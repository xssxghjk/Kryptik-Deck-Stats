import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { convertToDeckStats, DeckStats } from "~/convertDeckStats";

ChartJS.register(ArcElement, Tooltip, Legend);

// Calling the API from the server to avoid CORS issues
export async function loader({ params }: LoaderArgs) {
  const deckId = params.deckId;
  const response = await fetch(`https://play-api.carde.io/v1/decks/${deckId}`);
  return json(convertToDeckStats(await response.json()));
}

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
