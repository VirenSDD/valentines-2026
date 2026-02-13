import { RingIcon, BouquetIcon, HeartIcon } from "./RomanticIcons";
import styles from "./MuseumFooter.module.css";

export default function MuseumFooter() {
  return (
    <footer className={`${styles.footer} scroll-fade`}>
      <p className={styles.message}>
        Cada momento contigo es una obra maestra que merece ser recordada.
        <br />
        Sigamos ampliando la colección.
      </p>
      <div className={styles.icons}>
        <RingIcon size={28} />
        <HeartIcon size={28} />
        <BouquetIcon size={28} />
        <HeartIcon size={28} />
        <RingIcon size={28} />
      </div>
      <p className={styles.valentineText}>Feliz Día de San Valentín 2026</p>
    </footer>
  );
}
