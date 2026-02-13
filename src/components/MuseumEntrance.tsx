import { RingIcon } from "./RomanticIcons";
import styles from "./MuseumEntrance.module.css";

export default function MuseumEntrance() {
  return (
    <header className={styles.entrance}>
      <h1 className={styles.heading}>Museo de Paola & Viren</h1>
      <p className={styles.subtitle}>Un paso por la Historia de Nuestro Amor</p>
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <RingIcon size={36} />
        <div className={styles.dividerLine} />
      </div>
      <div className={styles.chevron}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
          <path d="M6 9 L12 15 L18 9" />
        </svg>
      </div>
    </header>
  );
}
