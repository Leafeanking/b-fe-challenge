import React from "react";
import { Character } from "@/app/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.scss";

type Props = {
  character: Character;
};

function CharacterCard({ character }: Props) {
  return (
    <Card sx={{ width: 248 }}>
      <CardMedia
        sx={{ height: 248 }}
        image={character.imageUrl}
        title={character.name}
      />

      <CardContent className={styles.cardContent}>
        <Typography className={styles.characterName} variant="h5">
          {character.name}
        </Typography>

        <Typography className={styles.filmHeader}>Featured Films</Typography>

        <Typography className={styles.filmList}>{character.films}</Typography>
      </CardContent>

      <CardActions className={styles.cardActions}>
        <Link className={styles.link} href={`/characters/${character._id}`}>
          View Profile
        </Link>
      </CardActions>
    </Card>
  );
}

export default CharacterCard;
