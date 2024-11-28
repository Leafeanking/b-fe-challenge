import React from "react";
import logoUri from "@/public/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
type Props = {};

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      <Image src={logoUri} alt="Disney Logo" height="40" width="96" />

      <div>
        For educational use only. All characters and content are the property of
        Disney. This test is for private use and development testing only and
        should not be distributed for public consumption
      </div>
    </footer>
  );
}

export default Footer;
