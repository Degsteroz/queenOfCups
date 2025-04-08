import React from "react";
import Image from "next/image";

import styles from './styles.module.css'
import {getImageUrl} from "@/utils";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        src={getImageUrl('background_hk3byu')}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.headerTextBlock}>
        <div className={styles.title}>Queen of Cups</div>
        <div className={styles.description}>
          Кастомный, невероятно редкий набор дрип-кофе
        </div>
      </div>
    </div>
  )
}
