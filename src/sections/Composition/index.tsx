import React from "react";
import Image from "next/image";

import {tarotCards} from "@/sections/Composition/data";

import {getImageUrl} from "@/utils";

import styles from './styles.module.css'

export default function Composition() {
  const cards = tarotCards.map(card => (
    <div
      key={card.id}
      className={styles.card}
    >
      <Image
        src={card.image}
        alt=""
        width={150}
        height={225}
        className={styles.cardImage}
      />
      <div className={styles.cardTextBlock}>
        <div className={styles.title}>{card.title}</div>
        <div className={styles.description}>{card.description}</div>
        <div className={styles.meaning}>
          <span><strong>Значение:</strong> {card.meaning}</span>
        </div>
        <div className={styles.advice}>
          <span><strong>Совет:</strong> {card.advice}</span>
        </div>
      </div>
    </div>

  ))
  return (
    <div className={styles.composition}>
      <div className={styles.content}>
      <div className={styles.cardsWrapper}>
          {cards}
        </div>

        <Image
          src={getImageUrl('rabbits_jrgtoy')}
          width={150}
          height={75}
          alt=""
          className={styles.rabbits}
        />

        <Image
          src={getImageUrl('background_aune6m')}
          alt=""
          width={400}
          height={400}
          className={styles.background}
        />
      </div>
    </div>
  )
}
