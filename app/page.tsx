import { Stack } from "@mui/material";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import FeaturedCharacters from "./components/FeaturedCharacters/FeaturedCharacters";
import endpoints from "./lib/endpoints";
import { fetchCharacters } from "./lib/fetchCharacters";
import { Character } from "./types";
import styles from './styles.module.scss'

async function generateMetadata() {
  return {
    title: "FE Challenge - Diseny Edition",
  };
}

export default async function Home() {
  const characters = await fetchCharacters({ search: "", pageSize: '8'});

  return (
    <>
      <div className={styles.container}>
        <Stack direction="row" gap={2} sx={{flexWrap: 'wrap'}}>
          {characters.map((character) => (
            <CharacterCard key={character._id} character={character} />
          ))}
        </Stack>
        </div>
      <FeaturedCharacters />
    </>
  );
}
