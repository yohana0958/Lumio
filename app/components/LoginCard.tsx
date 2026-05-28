import Link from "next/link";
export default function LoginCard() {
  return (
    <div className="login-card">
      <img
        src="/logop.png"
        alt="Lumio"
        className="logo"
      />

      <div className="input-group">
        <label>Email:</label>
        <input type="email" />
      </div>

      <div className="input-group">
        <label>Senha:</label>
        <input type="password" />
      </div>

      <div className="socials">
        <button className="social-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="Google"
          />
          Entrar
        </button>

        <button className="social-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
            alt="Discord"
          />
          Entrar
        </button>
      </div>

      <button className="login-btn">
        Entrar
      </button>

      <div className="links">
        <p>
          Esqueceu a senha?
          <span> Recupere sua senha aqui.</span>
        </p>

        <p>
          Ainda não tem uma conta?
          <Link href="/cadastro">
            <span> Cadastre-se</span>
          </Link>
        </p>
      </div>
    </div>
  );
}