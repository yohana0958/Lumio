import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pagina">

      {/* NAVBAR */}
      <header className="navbar">

        <div className="logo">
          <img src="/logop.png" alt="lumio" />
        </div>

        <nav className="nav-menu">
          <a className="nav-link">Início</a>
          <a className="nav-link">Cursos</a>
          <a className="nav-link">Como funciona</a>
          <a className="nav-link">Planos</a>
          <a className="nav-link">Sobre</a>
        </nav>

        <div className="buttons">
          <Link href="/cadastro" className="btn-navbar">Criar conta
          </Link>
          <Link href="/login" className="btn-navbar">
            Entrar
          </Link>

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

          <Link href="/Trilhas/PosCadastro-Y" className="cta">
            COMECE AGORA
            <img src="/arrow.png" alt="arrow" />
          </Link>

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

                <p className="numero-text">
                  Projetos
                </p>

                <Image
                  src="/projeto-icon.png"
                  alt="projeto"
                  width={70}
                  height={70}
                />
              </div>


              <div className="numero-box">
                <h3 className="numero-title">+200</h3>

                <p className="numero-text">
                  Alunos
                </p>

                <Image
                  src="/aluno-icon.png"
                  alt="aluno"
                  width={70}
                  height={70}
                />
              </div>


              <div className="numero-box">
                <h3 className="numero-title">+350</h3>

                <p className="numero-text">
                  Certificados
                </p>

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

            <Link href="/Trilhas">

              <button className="btn-trilhas">
                Trilhas
              </button>

            </Link>
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


      {/* PROJETOS MAVY */}

      <section className="mavy-projetos-section">

        <h2 className="mavy-projetos-title">
          Projetos que Geram Resultados
        </h2>

        <p className="mavy-projetos-subtitle">
          Projetos reais desenvolvidos para colocar em prática
          os conhecimentos adquiridos.
        </p>

        <div className="mavy-projetos-grid">

          {/* CARD 1 */}
          <div className="mavy-projeto-card">

            <Image
              src="/projeto1.png"
              alt="Landing Page"
              width={300}
              height={180}
              className="mavy-projeto-imagem"
            />

            <div className="mavy-projeto-conteudo">

              <span className="mavy-projeto-categoria">
                Front-End
              </span>

              <h3 className="mavy-projeto-titulo">
                Landing Page Moderna
              </h3>

              <div className="mavy-projeto-rodape">

                <span className="mavy-projeto-link">
                  Ver projeto
                </span>

                <Image
                  src="/arrow.png"
                  alt="seta"
                  width={20}
                  height={20}
                  className="mavy-projeto-seta"
                />

              </div>
            </div>
          </div>


          {/* CARD 2 */}
          <div className="mavy-projeto-card">

            <Image
              src="/projeto2.png"
              alt="Dashboard"
              width={300}
              height={180}
              className="mavy-projeto-imagem"
            />

            <div className="mavy-projeto-conteudo">

              <span className="mavy-projeto-categoria">
                UI Design
              </span>

              <h3 className="mavy-projeto-titulo">
                Plataforma de Organização
              </h3>

              <div className="mavy-projeto-rodape">

                <span className="mavy-projeto-link">
                  Ver projeto
                </span>

                <Image
                  src="/arrow.png"
                  alt="seta"
                  width={20}
                  height={20}
                  className="mavy-projeto-seta"
                />

              </div>
            </div>
          </div>


          {/* CARD 3 */}
          <div className="mavy-projeto-card">

            <Image
              src="/projeto3.png"
              alt="Sistema"
              width={300}
              height={180}
              className="mavy-projeto-imagem"
            />

            <div className="mavy-projeto-conteudo">

              <span className="mavy-projeto-categoria">
                Back-End
              </span>

              <h3 className="mavy-projeto-titulo">
                Sistema Inteligente
              </h3>

              <div className="mavy-projeto-rodape">

                <span className="mavy-projeto-link">
                  Ver projeto
                </span>

                <Image
                  src="/arrow.png"
                  alt="seta"
                  width={20}
                  height={20}
                  className="mavy-projeto-seta"
                />

              </div>
            </div>
          </div>


          {/* CARD 4 */}
          <div className="mavy-projeto-card">

            <Image
              src="/projeto4.png"
              alt="Delivery"
              width={300}
              height={180}
              className="mavy-projeto-imagem"
            />

            <div className="mavy-projeto-conteudo">

              <span className="mavy-projeto-categoria">
                Full Stack
              </span>

              <h3 className="mavy-projeto-titulo">
                Plataforma de Delivery
              </h3>

              <div className="mavy-projeto-rodape">

                <span className="mavy-projeto-link">
                  Ver projeto
                </span>

                <Image
                  src="/arrow.png"
                  alt="seta"
                  width={20}
                  height={20}
                  className="mavy-projeto-seta"
                />

              </div>
            </div>
          </div>

        </div>

      </section>
      <section className="contatos-mavy-container">
        <div className="contatos-mavy-content">

          <div className="contatos-mavy-left">

            <h1>
              Seu melhor futuro é <span>Lumio!</span>
            </h1>

            <p>
              Entre em contato conosco para tirar dúvidas,
              solicitar informações ou conhecer melhor
              nossos serviços. Nossa equipe está pronta
              para atender você da melhor forma possível.
            </p>

            <form className="contatos-mavy-form">

              <input
                type="text"
                placeholder="Lumio Soluções Digitais LTDA"
              />

              <input
                type="email"
                placeholder="lumio@gmail.com"
              />

              <input
                type="text"
                placeholder="Tel: +55 (00) 1111-2222"
              />

              <input
                type="text"
                placeholder="SAC: 0800 222 3333"
              />

              <button type="button">
                Contacte-nos
              </button>

            </form>

            <h4>
              já tem uma conta? <span>entrar</span>
            </h4>

          </div>

          <div className="contatos-mavy-right">

            <Image
              src="/Notbook.png"
              alt="Notebook"
              width={700}
              height={500}
            />

          </div>

        </div>
        </section>

      {/*CONTATOS IZABELE*/}
      

      {/* FOOTER BEATRIZ */}
      <footer className="bea-footer">

        <div className="bea-footer-container">

          <div className="bea-footer-logo">

            <img
              src="/logoClara.png"
              alt="Lumio"
              className="bea-footer-img"
            />

            <p>
              A plataforma que transforma
              estudantes em profissionais.
            </p>

          </div>

          <div className="bea-footer-links">

            <div className="bea-footer-coluna">

              <h3>Plataforma</h3>

              <a href="#">Cursos</a>
              <a href="#">Trilhas</a>
              <a href="#">Projetos</a>
              <a href="#">Comunidade</a>

            </div>

            <div className="bea-footer-coluna">

              <h3>Suporte</h3>

              <a href="#">Central de ajuda</a>
              <a href="#">Contato</a>
              <a href="#">FAQ</a>

            </div>

            <div className="bea-footer-coluna">

              <h3>Legal</h3>

              <a href="#">Termos de uso</a>
              <a href="#">Política de privacidade</a>
              <a href="#">Política de cookies</a>

            </div>

          </div>

        </div>

        <div className="bea-footer-copy">

          <p>
            Aprenda. Crie. Evolua.
          </p>

        </div>

      </footer>
    </main>
  );
}