import Image from "next/image";

export default function Home() {
  return (
    <main className="pagina">

      {/* NAVBAR */}
      <header className="navbar">

        <div className="logo">
          <img src="/logop.png" alt="lumio" />
        </div>

        <nav className="nav-menu">
          <a className="nav-link"> Início</a>
          <a className="nav-link">Cursos</a>
          <a className="nav-link">Como funciona</a>
          <a className="nav-link">Planos</a>
          <a className="nav-link">Sobre</a>
        </nav>

        <div className="buttons">
          <button className="btn-navbar">Criar conta</button>
          <button className="btn-navbar">Entrar</button>
        </div>

      </header>


      {/* HERO */}
      <section className="hero">

        <div className="left">

          <div className="linha"></div>

          <h1 className="hero-title">
            Os melhores cursos <br />
            para impulsionar a{" "}
            <span className="hero-highlight">
              sua carreira.
            </span>
          </h1>

          <p className="hero-text">
            Organize seus cursos, acompanhe seu progresso
            e explore trilhas de conhecimento feitas
            para te levar mais longe.
          </p>


          <div className="cards">

            <div className="card">
              <div className="icon">
                <Image
                  src="/curso.png"
                  alt="curso"
                  width={40}
                  height={40}
                />
              </div>
              <span className="texto-card">
                Cursos organizados
              </span>
            </div>

            <div className="card">
              <div className="icon">
                <Image
                  src="/progresso.png"
                  alt="progresso"
                  width={40}
                  height={40}
                />
              </div>
              <span className="texto-card">
                Acompanhamento de progresso
              </span>
            </div>

            <div className="card">
              <div className="icon">
                <Image
                  src="/trilha.png"
                  alt="trilha"
                  width={40}
                  height={40}
                />
              </div>
              <span className="texto-card">
                Trilhas de aprendizado
              </span>
            </div>

          </div>


          <button className="cta">
            COMECE AGORA
            <img src="/arrow.png" alt="arrow" />
          </button>

        </div>


        <div className="imagem">
          <Image
            src="/foguete.png"
            alt="foguete"
            width={350}
            height={350}
          />
        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <Image
          className="footer-logo"
          src="/logo.png"
          alt="logo"
          width={180}
          height={60}
        />

        <Image
          className="footer-logo"
          src="/logo.png"
          alt="logo"
          width={180}
          height={60}
        />

        <Image
          className="footer-logo"
          src="/logo.png"
          alt="logo"
          width={180}
          height={60}
        />

        <Image
          className="footer-logo"
          src="/logo.png"
          alt="logo"
          width={180}
          height={60}
        />

      </footer>


      {/* TECNOLOGIA */}
      <section className="tecnologia">

        <h2 className="tec-title">
          Transformando seu futuro com tecnologia.
        </h2>

        <div className="tec-content">

          <div className="tec-left">

            <Image
              src="/robo.png"
              alt="robo"
              width={500}
              height={500}
            />

            <div className="numeros">

              <div className="numero-box">
                <h3 className="numero-title">3K</h3>
                <p className="numero-text">Projetos</p>
                <Image
                  src="/projeto-icon.png"
                  alt="projeto"
                  width={70}
                  height={70}
                />
              </div>

              <div className="numero-box">
                <h3 className="numero-title">+200</h3>
                <p className="numero-text">Alunos</p>
                <Image
                  src="/aluno-icon.png"
                  alt="aluno"
                  width={70}
                  height={70}
                />
              </div>

              <div className="numero-box">
                <h3 className="numero-title">+350</h3>
                <p className="numero-text">Certificados</p>
                <Image
                  src="/certificado-icon.png"
                  alt="certificado"
                  width={70}
                  height={70}
                />
              </div>

            </div>
          </div>


          <div className="tec-right">

            <p className="tec-text">
              Na Lumio, você aprende programação,
              design e tecnologia através de
              projetos práticos, desafios
              inteligentes e experiências
              voltadas para o mercado.
            </p>

            <div className="barra">
              <h4 className="barra-title">
                Trilhas Front-End
              </h4>
              <div className="linha-barra">
                <div className="fill w90"></div>
              </div>
            </div>

            <div className="barra">
              <h4 className="barra-title">
                Projetos Práticos
              </h4>
              <div className="linha-barra">
                <div className="fill w80"></div>
              </div>
            </div>

            <div className="barra">
              <h4 className="barra-title">
                Carreiras Tech
              </h4>
              <div className="linha-barra">
                <div className="fill w85"></div>
              </div>
            </div>

            <button className="btn-trilhas">
              Trilhas
            </button>

          </div>
        </div>
      </section>
      {/* ÁREAS */}
<section className="areas">

  <h2 className="areas-title">
    Áreas de conhecimento
  </h2>


  {/* FRONT */}
  <div className="area-card">

    <div className="area-top">

      <Image
        src="/frontend-icon.png"
        alt="frontend"
        width={45}
        height={45}
      />

      <h3 className="area-card-title">
        Front End
      </h3>

    </div>

    <p className="area-card-text">
      Aprenda a desenvolver interfaces modernas,
      responsivas e interativas utilizando HTML,
      CSS, JavaScript e React para criar
      experiências digitais de alto impacto.
    </p>

    <button className="area-btn">
      Conheça mais
    </button>

  </div>


  {/* BACK */}
  <div className="area-card">

    <div className="area-top">

      <Image
        src="/backend-icon.png"
        alt="backend"
        width={45}
        height={45}
      />

      <h3 className="area-card-title">
        Back End
      </h3>

    </div>

    <p className="area-card-text">
      Construa a estrutura por trás das aplicações
      desenvolvendo APIs, servidores e bancos de
      dados com foco em performance, segurança
      e escalabilidade.
    </p>

    <button className="area-btn">
      Conheça mais
    </button>

  </div>


  {/* DESIGN */}
  <div className="area-card">

    <div className="area-top">

      <Image
        src="/design-icon.png"
        alt="design"
        width={45}
        height={45}
      />

      <h3 className="area-card-title">
        UI/UX Design
      </h3>

    </div>

    <p className="area-card-text">
      Projete interfaces funcionais e experiências
      intuitivas, aplicando princípios de design,
      prototipação e usabilidade para criar
      produtos digitais centrados no usuário.
    </p>

    <button className="area-btn">
      Conheça mais
    </button>

  </div>

</section>
    </main>
  );
}