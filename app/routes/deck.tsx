import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "@remix-run/react";

export default function KryptikView() {
  const mainRef = useRef<HTMLElement>(null);
  const [deckInputUrl, setDeckInputUrl] = useState<string>("");
  const idRegex = /https:\/\/play.kryptiktcg.com\/decks\/(.{24})/gm;
  const matchesUrl = idRegex.exec(deckInputUrl);
  const deckId = matchesUrl ? matchesUrl[1] : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (deckId) {
      navigate(`/deck/${deckId}`);
    }
  }, [deckId]);
  return (
    <main className={"h-full relative"} ref={mainRef}>
      <div className={"w-4/5 md:w-2/3 block m-auto"}>
        <input
          className={
            "bg-slate-600 m-auto p-2 rounded-md text-slate-200 block w-full mt-8 mb-5"
          }
          id={"deckUrlInput"}
          type={"text"}
          value={deckInputUrl}
          onChange={(event) => setDeckInputUrl(event.target.value)}
          placeholder={"Enter Deck URL here..."}
        />
        {deckInputUrl && !deckId && (
          <label htmlFor={"deckUrlInput"}>Invalid URL</label>
        )}
        <Outlet />
      </div>
    </main>
  );
}
