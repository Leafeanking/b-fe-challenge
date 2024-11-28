"use server";
import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { fetchFeaturedCharacters } from "@/app/lib/fetchCharacters";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.scss";

type Props = {};

async function FeaturedCharacters(props: Props) {
  const characters = await fetchFeaturedCharacters();
  return (
    <Box className={styles.container}>
      <Typography className={styles.featureTitle} variant="h3">
        Featured Characters!
      </Typography>
      <Stack direction="row" gap={2}>
        {characters.map((character) => (
          <CharacterCard key={character._id} character={character} />
        ))}
      </Stack>
    </Box>
  );
}

export default FeaturedCharacters;
