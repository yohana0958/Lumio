import Link from "next/link";

export default function CadastroCard() {
  return (
    <div className="register-card">
      <img
        src="/logop.png"
        alt="Lumio"
        className="logo"
      />

      <div className="input-group">
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
        />
      </div>

      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
        />
      </div>

      <div className="input-group">
        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
        />
      </div>

      <button className="register-btn">
        Cadastrar
      </button>

      <div className="register-links">
        <p>
          Ao se inscrever, você aceita
          <span> Termos de serviço </span>
          e
          <span> Política de privacidade.</span>
        </p>

        <p>
          Já tem uma conta?
          <Link href="/login">
            <span> Entrar</span>
          </Link>
        </p>
      </div>
    </div>
  );
}