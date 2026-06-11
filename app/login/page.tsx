import styles from "./login.module.css";

import Image from "next/image";

import FormInput from "../components/FormInput";
import Link from "next/link";

export default function Login() {
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

          <FormInput
            label="Email:"
            type="email"
          />

          <FormInput
            label="Senha:"
            type="password"
          />

          <div className={styles.socialButtons}>

            <button
              type="button"
              className={styles.socialButton}
            >
              <Image
                src="/google.png"
                alt="Google"
                width={33}
                height={28}
              />

              <span>Entrar</span>
            </button>

            <button
              type="button"
              className={styles.socialButton}
            >
              <Image
                src="/discord.png"
                alt="Discord"
                width={40}
                height={42}
              />

              <span>Entrar</span>
            </button>

          </div>

          <button
            type="submit"
            className={styles.loginButton}
          >
            Entrar
          </button>

        </form>

        <p className={styles.forgotPassword}>
          Esqueceu a senha?{" "}
          <Link href="/trilhas">
            <span>trilhas aqui</span>
          </Link>
          <span>Recupere sua senha aqui.</span>
        </p>

        <p className={styles.register}>
          Ainda não tem uma conta?{" "}
          <Link href="/cadastro">
            <span>Cadastre-se</span>
          </Link>
        </p>

      </div>
    </main>
  );
}