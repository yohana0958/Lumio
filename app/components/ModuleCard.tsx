import styles from "./ModuleCard.module.css";
import Image from "next/image";

interface ModuleCardProps {
  title: string;
  progress: number;
  locked: boolean;
}

export default function ModuleCard({
  title,
  progress,
  locked,
}: ModuleCardProps) {
  return (
    <div className={styles.moduleCard}>

      <div className={styles.moduleLeft}>

        <Image
          src={locked ? "/fechado.png" : "/aberto.png"}
          alt="cadeado"
          width={20}
          height={20}
          className={styles.lockImage}
        />

        <span className={styles.moduleText}>
          {title}
        </span>

      </div>

      <div className={styles.moduleRight}>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <span className={styles.progressText}>
          {progress}%
        </span>

      </div>

    </div>
  );
}