import styles from "./cadastro.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Cadastro() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        
        <Image
          src="/logop.png"
          alt="Logo"
          width={250}
          height={85}
          className={styles.logo}
        />

        <form className={styles.form}>
          
          <div className={styles.inputGroup}>
            <label>Nome:</label>
            <input type="text" />
          </div>

          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input type="email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Senha:</label>
            <input type="password" />
          </div>

          <button type="submit" className={styles.button}>
            Cadastrar
          </button>

        </form>

        <p className={styles.terms}>
          Ao se inscrever, você aceita{" "}
          <span>Termos de serviço</span> e{" "}
          <span>Política de privacidade.</span>
        </p>

        <p className={styles.login}>
          Já tem uma conta? <Link href="/login"><span>Entrar</span></Link>
        </p>

      </div>
    </main>
  );
}