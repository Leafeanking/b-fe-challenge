import { Fab, Toolbar } from "@mui/material";
import React from "react";
import Image from "next/image";
import logoUri from "@/public/logo.svg";
import styles from "./styles.module.scss";
import Search from "./components/Search/Search";
import userIconUri from "@/public/user.svg";
import Link from "next/link";
// TODO make logo component

type Props = {};

function Topbar({}: Props) {
  return (
    <Toolbar className={styles.topbar}>
      <Link href="/">
        <Image src={logoUri} alt="Disney Logo" height="40" width="96" />
      </Link>
      <Search />
      <div>
        <Fab className={styles.profileFAB} component={Link} href="/profile/">
          <Image src={userIconUri} alt="User Profile Icon" />
        </Fab>
      </div>
    </Toolbar>
  );
}

export default Topbar;
