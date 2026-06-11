import styles from "./progresso.module.css";
import ModuleCard from "../components/ModuleCard";

export default function Progresso() {
  return (
    <main className={styles.progressoPage}>
      <div className={styles.trilhasContainer}>

        <button className={styles.backButton}>
          ◀
        </button>

        <h1 className={styles.trilhasTitle}>
          Trilhas e Módulos
        </h1>

        <p className={styles.trilhasSubtitle}>
          Trilha Diagnóstica
        </p>

        <div className={styles.modulesArea}>

          <div className={styles.moduleGroup}>
            <span className={styles.moduleLabel}>
              Módulo 1
            </span>

            <ModuleCard
              title="Perfil e Objetivos"
              progress={70}
              locked={false}
            />
          </div>

          <div className={styles.moduleGroup}>
            <span className={styles.moduleLabel}>
              Módulo 2
            </span>

            <ModuleCard
              title="Diagnóstico técnico"
              progress={0}
              locked={true}
            />
          </div>

          <div className={styles.moduleGroup}>
            <span className={styles.moduleLabel}>
              Módulo 3
            </span>

            <ModuleCard
              title="Recomendação"
              progress={0}
              locked={true}
            />
          </div>

        </div>
      </div>
    </main>
  );
}