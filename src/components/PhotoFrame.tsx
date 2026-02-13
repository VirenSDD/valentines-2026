import Image from "next/image";
import styles from "./PhotoFrame.module.css";

type FrameVariant = "rectangular" | "oval" | "ornate" | "arch" | "circular";

interface PhotoFrameProps {
  src: string;
  alt: string;
  caption?: string;
  date?: string;
  variant?: FrameVariant;
}

export default function PhotoFrame({
  src,
  alt,
  caption,
  date,
  variant = "rectangular",
}: PhotoFrameProps) {
  return (
    <div className={`${styles.frame} ${styles[variant]} scroll-fade`}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageInner}>
          <Image src={src} alt={alt} width={400} height={500} />
        </div>
      </div>
      {(caption || date) && (
        <div className={styles.placard}>
          {caption && <p className={styles.placardCaption}>{caption}</p>}
          {date && <p className={styles.placardDate}>{date}</p>}
        </div>
      )}
    </div>
  );
}
