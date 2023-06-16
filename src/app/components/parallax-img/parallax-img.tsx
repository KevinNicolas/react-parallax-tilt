"use client";
import Image from "next/image";

import { useTiltEffect } from "@/hooks";

import styles from "./parallax-img.module.css";

export function ParallaxImg() {
  useTiltEffect("parallax");

  return (
    <div className={styles["image-container"]}>
      <Image
        className={`parallax ${styles.parallax} ${styles["base-image"]} ${styles.image}`}
        alt="Background image, mountains"
        src="/parallax/background.png"
        width={2800}
        height={2800}
        data-speedX="0.15"
        data-speedY="0.01"
      />
      <Image className={`${styles.parallax} ${styles["fog-1"]} ${styles.image}`} alt="Background image, fog" src="/parallax/fog_1.png" width={2800} height={2800} />
      <Image
        className={`parallax ${styles.parallax} ${styles["mountain-1"]} ${styles.image}`}
        alt="Background image, fog"
        src="/parallax/mountain_1.png"
        width={2800}
        height={2800}
        data-speedX="0.1"
        data-speedY="0.1"
      />
      <Image
        className={`parallax ${styles.parallax} ${styles["mountain-2"]} ${styles.image}`}
        alt="Background image, fog"
        src="/parallax/mountain_2.png"
        width={2800}
        height={2800}
        data-speedX="0.1"
        data-speedY="0.13"
      />
      <Image className={`${styles.parallax} ${styles["fog-2"]} ${styles.image}`} alt="Background image, fog" src="/parallax/fog_2.png" width={2800} height={2800} />
      <Image
        className={`parallax ${styles.parallax} ${styles["mountain-3"]} ${styles.image}`}
        alt="Background image, fog"
        src="/parallax/mountain_3.png"
        width={2800}
        height={2800}
        data-speedX="0.1"
        data-speedY="0.1"
      />
      <Image
        className={`parallax ${styles.parallax} ${styles["mountain-4"]} ${styles.image}`}
        alt="Background image, fog"
        src="/parallax/mountain_4.png"
        width={2800}
        height={2800}
        data-speedX="0.125"
        data-speedY="0.12"
      />
      <Image
        className={`parallax ${styles.parallax} ${styles["fog-3"]} ${styles.image}`}
        alt="Background image, fog"
        src="/parallax/fog_3.png"
        width={2800}
        height={2800}
        data-speedX="0.13"
        data-speedY="0.12"
      />
      <Image
        className={`parallax ${styles.parallax} ${styles["mountain-5"]} ${styles.image}`}
        alt="Background image, fog"
        src="/parallax/mountain_5.png"
        width={2800}
        height={2800}
        data-speedX="0.12"
        data-speedY="0.118"
      />
      <Image
        className={`parallax ${styles.parallax} ${styles["mountain-6"]} ${styles.image}`}
        alt="Background image, fog"
        src="/parallax/mountain_6.png"
        width={2800}
        height={2800}
        data-speedX="0.13"
        data-speedY="0.115"
      />
      <Image
        className={`parallax ${styles.parallax} ${styles["mountain-8"]} ${styles.image}`}
        alt="Background image, fog"
        src="/parallax/mountain_8.png"
        width={2800}
        height={2800}
        data-speedX="0.14"
        data-speedY="0.1"
      />
      <Image className={`${styles["black-shadow"]} ${styles.image}`} alt="Background image, fog" src="/parallax/black_shadow.png" width={2800} height={2800} />
      <Image className={`${styles["sun-rays"]} ${styles.image}`} alt="Background image, fog" src="/parallax/sun_rays.png" width={2800} height={2800} />
      <div className={`parallax ${styles.parallax} ${styles["title-container"]}`} data-speedX="0.05" data-speedY="0.05">
        <span>CHINA</span>
        <b>ZHANGJIANGM</b>
      </div>
    </div>
  );
}

export default ParallaxImg;
