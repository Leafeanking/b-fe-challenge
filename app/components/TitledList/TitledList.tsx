import React from "react";
import { Typography } from "@mui/material";
import styles from './styles.module.scss'

type Props = {
  title: string;
  items: string[];
};

function TitleList({ title, items }: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <Typography variant="h5" className={styles.title}>{title}</Typography>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TitleList;
