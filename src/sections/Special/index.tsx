import React from "react";
import Image from "next/image";

import {getImageUrl} from "@/utils";

import styles from "./styles.module.css";

export default function Special() {
  return (
    <div className={styles.special}>
      <div className={styles.title}>Arcana Privata</div>
      <div className={styles.subtitle}>Старший Аркан — Тайная Чаша</div>
      <div
        className={styles.subtitle}
        style={{fontSize: '20px', marginBottom: '30px'}}
      >
        (Если вы получили этот дрип от Оксаны)
      </div>
      <div className={styles.text}>
        Говорят, не всякий дрип зовётся по имени, и не всякий кофе варится в тишине.
        Но если ты держишь в руках Королеву Чаш, знай: это знак.
        Набор этот не продаётся, не повторяется и не выбирается по вкусу.
        Он находит того, кто ценен, близок, и кто был выбран самой Оксаной.

        В этом кофе — часть ритуала. В этой чашке — часть её заботы.
        И если ты читаешь эти строки, ты, вероятно, гораздо важнее, чем думаешь.
      </div>
      <div className={styles.subtext}>
        Помни: Королева Чаш не раздаёт дары случайным прохожим.
      </div>
      <Image src={getImageUrl('picture_vxpju8')} alt="" width={385} height={190} />
    </div>
  )
}
