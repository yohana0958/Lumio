import "./trilhas.css";
import Link from "next/link";

export default function Trilhas() {
  return (

    <main className="trilhas">

      <div className="trilhas-overlay"></div>

      {/* TOPO */}
      <div className="trilhas-topo">

        <Link href="/">
          <button className="trilhas-voltar">
            ◀
          </button>
        </Link>

        <h1 className="trilhas-titulo">
          Indicaremos os melhores cursos para
          <br />
          você descobrir seus pontos fortes!
        </h1>

      </div>


      {/* CARDS */}
      <div className="trilhas-cards">

        {/* CARD 1 */}
        <div className="trilha-box trilha-left">

          <h2 className="trilha-subtitle">
            Trilha Diagnóstica
          </h2>

          <div className="trilha-card">

            <p className="trilha-text">
              Responda perguntas estratégicas e realize
              um diagnóstico inicial para entendermos
              seu nível de conhecimento, interesses e
              objetivos profissionais. A partir disso,
              indicamos os cursos e trilhas mais alinhados
              ao seu perfil para acelerar sua evolução.
            </p>

          </div>
        </div>


        {/* CARD 2 */}
        <div className="trilha-box trilha-center">

          <h2 className="trilha-subtitle">
            Sua Jornada
          </h2>

          <div className="trilha-card">

            <p className="trilha-text">
              Visualize sua jornada de aprendizado em
              tempo real acompanhando módulos concluídos,
              percentual de avanço, metas semanais,
              certificados conquistados e desempenho
              em cada trilha para manter sua evolução
              organizada e consistente.
            </p>

          </div>
        </div>


        {/* CARD 3 */}
        <div className="trilha-box trilha-right">

          <h2 className="trilha-subtitle">
            Pratique!
          </h2>

          <div className="trilha-card">

            <p className="trilha-text">
              Acesse trilhas práticas com desafios
              e projetos reais para aplicar seus
              conhecimentos, desenvolver experiência
              hands-on e fortalecer seu portfólio
              com atividades alinhadas às demandas
              do mercado de tecnologia.
            </p>

          </div>
        </div>

      </div>

    </main>
  );
}