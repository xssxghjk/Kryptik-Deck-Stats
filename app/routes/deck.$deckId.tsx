import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { convertToDeckStats, DeckStats } from "~/convertDeckStats";
import { SoulGenerationChart } from "~/components/SoulGenerationChart";

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
        <SoulGenerationChart {...deckStats} />
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
