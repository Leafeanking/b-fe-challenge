"use client"
import { Stack } from "@mui/material";
import CharacterCard from "@/app/components/CharacterCard/CharacterCard";
import FeaturedCharacters from "@/app/components/FeaturedCharacters/FeaturedCharacters";
import { fetchCharacters } from "@/app/lib/fetchCharacters";
import styles from "../../styles.module.scss";
import { useEffect, useState } from "react";
import { Character } from "@/app/types";
import { useSnapshot } from "valtio";
import state from "@/app/lib/state";
import { useRouter } from "next/navigation";


type Props = {}

function ResultsList({}: Props) {
    const [characters, setCharacters] = useState<Character[]>([]);
    const { search } = useSnapshot(state);
    const router = useRouter()
    

  const searchCharacters = async () => {
    setCharacters(await fetchCharacters({search}))
  }

  useEffect(() => {
    if(!search) {
        router.push('/')
    }
    searchCharacters()
  }, [search]);

  return (
    <div className={styles.container}>
        <Stack direction="row" gap={2} sx={{ flexWrap: "wrap" }}>
          {characters.map((character) => (
            <CharacterCard key={character._id} character={character} />
          ))}
        </Stack>
      </div>
  )
}

export default ResultsList