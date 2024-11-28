"use client";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import styles from "./styles.module.scss";
import { useDebouncedCallback } from "use-debounce";
import { fetchCharacters } from "@/app/lib/fetchCharacters";
import state from "@/app/lib/state";
import { useSnapshot } from "valtio";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'


function Search() {
  const {search} = useSnapshot(state)
  const router = useRouter()

  const debouncedSearch = useDebouncedCallback(async (search) => {
    if(!search) return;
    router.push('/results/')
    
  }, 500);

  useEffect(() => {
    debouncedSearch(search);
  }, [search]);

  return (
    <TextField
      onChange={(e) => state.search = e.target.value}
      placeholder="Find a character..."
      className={styles.searchInput}
      fullWidth
    />
  );
}

export default Search;
