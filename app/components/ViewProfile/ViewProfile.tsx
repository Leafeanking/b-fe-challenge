"use client";
import { Profile } from "@/app/types";
import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

type Props = {
  profile: Profile;
  setIsEditing: (isEditing: boolean) => void;
};

const ViewProfile = ({ profile, setIsEditing }: Props) => {
    
  return (
    <div className={styles.profileView}>
      <Typography variant="h1">
        {profile.firstName} {profile.lastName}
      </Typography>
      <Typography variant="subtitle2">
        Last Updated {dayjs(profile.updatedAt).format("MMMM Do ,YYYY")}
      </Typography>
      <Stack gap={2}>
        <Typography>
          Location: {profile.city}, {profile.state}
        </Typography>
        <Typography>
          Favorite Disney Character: {profile.favoriteCharacter}
        </Typography>
        <Typography>Favorite Disney Ride: {profile.favoriteRide}</Typography>
        <Typography>Favorite Disney Movie: {profile.favoriteMovie}</Typography>
        <Typography>
          Favorite Disneyland: {profile.favoriteDisneyland}
        </Typography>
      </Stack>

      <Button
        size="large"
        color="secondary"
        variant="contained"
        onClick={() => setIsEditing(true)}
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default ViewProfile;
