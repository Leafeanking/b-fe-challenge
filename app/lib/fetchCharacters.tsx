"use server";

import endpoints from "./endpoints";
import { Character } from "../types";

export async function fetchCharacters({
  search = "",
  page = "1",
  pageSize = "50",
}): Promise<Character[]> {
  const urlParams = new URLSearchParams({ page, pageSize });
  if (search) {
    urlParams.append("name", search);
  }
  const newEndpoint = new URL(
    `${endpoints.characterList()}?${urlParams.toString()}`,
  );

  const response = await fetch(newEndpoint);

  const json = await response.json();
  const characters: Character[] = json.data as Character[];

  return characters;
}

export async function fetchFeaturedCharacters(): Promise<Character[]> {
  const featuredIds = ["10", "40", "309", "30"];

  const responses: Response[] = await Promise.all(
    featuredIds.map((id) =>
      fetch(endpoints.characterDetail(id), { cache: "force-cache" }),
    ),
  );

  const jsons = await Promise.all(responses.map((res) => res.json()));
  const characters: Character[] = jsons.map((json) => json.data as Character);

  return characters;
}
