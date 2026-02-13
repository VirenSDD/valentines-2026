import { ReactNode } from "react";
import { SparkleIcon } from "./RomanticIcons";
import styles from "./GalleryRoom.module.css";

interface GalleryRoomProps {
  title: string;
  wallColor: string;
  children: ReactNode;
}

export default function GalleryRoom({ title, wallColor, children }: GalleryRoomProps) {
  return (
    <section className={styles.room} style={{ backgroundColor: wallColor }}>
      <div className={`${styles.roomTitle} scroll-fade`}>
        <div className={styles.titleLine} />
        <span className={styles.titleIcon}>
          <SparkleIcon size={20} />
        </span>
        <h2 className={styles.titleText}>{title}</h2>
        <span className={styles.titleIcon}>
          <SparkleIcon size={20} />
        </span>
        <div className={styles.titleLine} />
      </div>
      <div className={styles.grid}>{children}</div>
    </section>
  );
}
