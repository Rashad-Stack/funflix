import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image
            src="/funflix-logo.png"
            alt="logo image"
            width={150}
            height={60}
            priority={true}
          />
        </Link>
      </div>
      <Nav />
    </header>
  );
}
