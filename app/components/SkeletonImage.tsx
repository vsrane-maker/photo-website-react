"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./SkeletonImage.module.css";

export default function SkeletonImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.fill}>
      {!loaded && <div className={styles.skeleton} />}

      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        onLoadingComplete={() => setLoaded(true)}
        className={`${"masonry--gallery"} ${loaded ? styles.visible : styles.hidden}`}
      />
    </div>
  );
}
