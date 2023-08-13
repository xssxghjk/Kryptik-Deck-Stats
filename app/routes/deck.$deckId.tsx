import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { convertToDeckStats, DeckStats } from "~/convertDeckStats";
import { SoulGenerationChart } from "~/components/SoulGenerationChart";
import { ElevenYearCurveChart } from "~/components/ElevenYearCurveChart";
import { ChartContainer } from "~/components/ChartContainer";

// Calling the API from the server to avoid CORS issues
export async function loader({ params }: LoaderArgs) {
  const deckId = params.deckId;
  const response = await fetch(`https://play-api.carde.io/v1/decks/${deckId}`);
  return json(convertToDeckStats(await response.json()));
}

const calculateSoulBaseSum = (deckStats: DeckStats) =>
  deckStats.soulBase.black +
  deckStats.soulBase.white +
  deckStats.soulBase.blue +
  deckStats.soulBase.green;

export default function KryptikDeckView() {
  const deckStats = useLoaderData<DeckStats>();
  return (
    <div>
      <h1>{deckStats?.name}</h1>
      <h3>by {deckStats.creator}</h3>
      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-2"}>
        <ChartContainer title={"Soul Generation Base"}>
          <SoulGenerationChart {...deckStats} />
          <h3 className={"text-center"}>
            Sum: {calculateSoulBaseSum(deckStats)}
          </h3>
        </ChartContainer>
        <ChartContainer title={"11-Year Curve"}>
          <ElevenYearCurveChart {...deckStats} />
        </ChartContainer>
      </div>
    </div>
  );
}
