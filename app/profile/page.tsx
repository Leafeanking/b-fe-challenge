"use client";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ViewProfile from "../components/ViewProfile/ViewProfile";
import EditProfile from "../components/EditProfile/EditProfile";
import { Profile } from "../types";

type Props = {};

const DEFAULT_PROFILE = {
  firstName: "John",
  lastName: "Doe",
  updatedAt: "2020-04-12T01:33:34.458Z",
  city: "San Francisco",
  state: "CA",
  favoriteRide: "Space Mountain",
  favoriteCharacter: "Elsa",
  favoriteMovie: "Moana",
  favoriteDisneyland: "Disney World, Florida",
  birthdate: "2000-04-12T01:33:34.458Z",
};
const page = (props: Props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["profile"]);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (cookies.profile) {
      setProfile(cookies.profile as Profile);
    }
    setInitialLoad(false);
  }, [cookies.profile]);

  if (initialLoad) {
    return null;
  }

  if (isEditing) {
    return <EditProfile profile={profile} setIsEditing={setIsEditing} />;
  }

  return <ViewProfile profile={profile} setIsEditing={setIsEditing} />;
};

export default page;
