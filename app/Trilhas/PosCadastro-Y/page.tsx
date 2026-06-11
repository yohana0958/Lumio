'use client';

import { useEffect, useState } from 'react';
import '../PosCadastro-Y/PosCadastro-Y.css';

export default function PosCadastroY() {
  const [nome, setNome] = useState('Usuário');

  useEffect(() => {
    const usuario = localStorage.getItem('nomeUsuario');

    if (usuario) {
      setNome(usuario);
    }
  }, []);

  return (
    <>
      <header className="yh-navbar">

        <div className="yh-logo">
          <img src="/logolumio.png" alt="Lumio" />
        </div>

        <nav className="yh-nav-links">
          <a href="/">Início</a>
          <a href="#">Cursos</a>
          <a href="#">Trilhas</a>
        </nav>

        <div className="yh-profile">
          👤
        </div>

      </header>

      <main className="yh-dashboard-container">

        {/* TOPO */}

        <section className="yh-dashboard-top">

          <div className="yh-dashboard-welcome">

            <div className="yh-dashboard-line"></div>

            <h3>Seja bem-vindo de volta,</h3>

            <h1>{nome}! 👋</h1>

            <p>
              Continue sua jornada e evolua suas habilidades todos os dias.
            </p>

            <button className="yh-dashboard-btn">
              Continuar estudando
            </button>

          </div>

          <div className="yh-dashboard-progress">

            <div className="yh-dashboard-circle">
              <span>68%</span>
              <p>Progresso geral</p>
            </div>

            <div className="yh-dashboard-stats">

              <div>
                <h4>16</h4>
                <p>Sequências</p>
              </div>

              <div>
                <h4>120</h4>
                <p>Aulas assistidas</p>
              </div>

              <div>
                <h4>24</h4>
                <p>Projetos concluídos</p>
              </div>

            </div>

          </div>

        </section>

        {/* CURSO */}

        <section className="yh-card">

          <div className="yh-card-header">
            <h2>Continue de onde parou</h2>
            <span>Ver todos</span>
          </div>

          <div className="yh-course">

            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600"
              alt="curso"
            />

            <div className="yh-course-info">

              <h3>JavaScript Avançado</h3>

              <p>Trilha Front-End Developer</p>

              <div className="yh-progress-bar">
                <div className="yh-progress-fill"></div>
              </div>

              <div className="yh-course-actions">
                <button>Continuar aula</button>
                <a href="#">Ver conteúdo</a>
              </div>

            </div>

          </div>

        </section>

        {/* DESAFIOS */}

        <section className="yh-card">

          <h2 className="yh-section-title">
            Desafios para você
          </h2>

          <div className="yh-challenges">

            <div className="yh-challenge">
              <h3>Desafio Lógico</h3>
              <p>Resolva 5 questões de lógica.</p>
              <span>XP 200</span>
            </div>

            <div className="yh-challenge">
              <h3>CSS Battle</h3>
              <p>Recrie layouts usando apenas CSS.</p>
              <span>XP 280</span>
            </div>

            <div className="yh-challenge">
              <h3>BUG Hunter</h3>
              <p>Encontre erros em um código.</p>
              <span>XP 300</span>
            </div>

          </div>

        </section>

        
      </main>
    </>
  );
}