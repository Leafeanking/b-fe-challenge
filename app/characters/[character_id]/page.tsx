import React from "react";
import endpoints from "../../lib/endpoints";
import { Character } from "../../types";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import TitledList from "@/app/components/TitledList/TitledList";
import Link from "next/link";
import FeaturedCharacters from "@/app/components/FeaturedCharacters/FeaturedCharacters";

dayjs.extend(advancedFormat);

async function getCharacter(id: string) {
  console.log("endopoint", endpoints.characterDetail(id));
  const response: Response = await fetch(endpoints.characterDetail(id), {
    cache: "force-cache",
  });
  const json = await response.json();
  const character: Character = json.data as Character;
  return character;
}

async function generateMetadata({ params }: { params: { id: string } }) {
  const character = await getCharacter(params.id);

  return {
    title: character.name,
  };
}

const CharacterDetail = async ({
  params,
}: {
  params: { character_id: string };
}) => {
  const character = await getCharacter(params.character_id);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={character.imageUrl}
            title={character.name}
            alt={`Image of ${character.name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div>
          <Typography className={styles.caracterName} variant="h1">
            {character.name}
          </Typography>

          <Typography className={styles.updatedAt}>
            Last Updated {dayjs(character.updatedAt).format("MMMM Do ,YYYY")}
          </Typography>

          <div className={styles.highlights}>
            <TitledList title="Featured Films" items={character.films} />
            <TitledList title="Short Films" items={character.shortFilms} />
            <TitledList title="TV Shows" items={character.tvShows} />
          </div>

          <Button
            size="large"
            component={Link}
            href={character.sourceUrl}
            target="_blank"
            color="secondary"
            variant="contained"
          >
            Explore More Character Details
          </Button>
        </div>
      </div>

      <FeaturedCharacters />
    </>
  );
};

export default CharacterDetail;
