
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setNavOpen(false); // Close menu on mobile click
    }
  };

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleRequestClick = () => {
    navigate('/solicitar');
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ paddingTop: '80px' }}> {/* Main padding moved here or kept in CSS */}
      <header>
        <div className="navbar">
          <span className="logo">Essência Renovada</span>
          <nav id="main-nav" className={navOpen ? 'open' : ''}>
            <a onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }} className="active">Home</a>
            <a onClick={() => scrollToSection('sobre')} style={{ cursor: 'pointer' }}>Sobre</a>
            <a onClick={() => scrollToSection('mesa')} style={{ cursor: 'pointer' }}>Mesa Radiônica</a>
            <a onClick={() => scrollToSection('servicos')} style={{ cursor: 'pointer' }}>Serviços</a>
            <a onClick={() => scrollToSection('depoimentos')} style={{ cursor: 'pointer' }}>Depoimentos</a>
            <a onClick={() => scrollToSection('contato')} style={{ cursor: 'pointer' }}>Contato</a>
          </nav>
          <button className="nav-action" onClick={handleRequestClick}>Agendar Consulta</button>
          <button 
            className="menu-toggle" 
            aria-label="Abrir Menu" 
            onClick={() => setNavOpen(!navOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h1 className="hero-title">Reconecte-se com Sua Essência</h1>
            <div className="hero-subtitle">Terapia Integrativa com Mesa Radiônica<br/>Equilíbrio, Cura e Transformação</div>
            <p className="hero-intro">Acolhimento e solução para dores emocionais, físicas e espirituais. Um espaço moderno e humanizado para seu autoconhecimento, bem-estar e reconexão interna.</p>
            <button className="cta-main" onClick={handleRequestClick}>Agende Sua Consulta</button>
          </div>
          <div className="hero-bg">
            <div className="mandala-bg">
              <svg className="mandala-svg" viewBox="0 0 315 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="157.5" cy="157.5" r="150" stroke="#D4AF37" strokeDasharray="7,12" strokeWidth="2.7"/>
                <circle cx="157.5" cy="157.5" r="104" stroke="#87CEEB" strokeOpacity="0.16" strokeWidth="1.3"/>
                <circle cx="157.5" cy="157.5" r="80" stroke="#9B7EBD" strokeOpacity="0.14" strokeWidth="2"/>
                <circle cx="157.5" cy="157.5" r="40" stroke="#A8D5BA" strokeOpacity="0.19" strokeWidth="4"/>
                <g opacity="0.19">
                  <ellipse cx="157.5" cy="157.5" rx="55" ry="110" stroke="#9B7EBD" strokeWidth="1.2"/>
                  <ellipse cx="157.5" cy="157.5" rx="110" ry="55" stroke="#A8D5BA" strokeWidth="1"/>
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section id="sobre">
          <h2 className="section-title fade-in-scroll">Conheça Rudaia Correia</h2>
          <div className="about-box fade-in-scroll">
            <div className="about-photo" aria-label="Foto de perfil">
              {/* Using a placeholder if no image file provided, ideally we'd import one */}
              <div style={{width: '98px', height: '98px', borderRadius: '50%', background: '#ccc'}}></div>
            </div>
            <div className="about-content">
              <div className="about-name">Rudáia Correia (Ru Correia)</div>
              <p className="about-text">Meu nome é Rudáia Correia (Ru Correia), sou Terapeuta Integrativa e Complementar com quase 30 anos de experiência, com formação em Mesa Radiônica, Radiestesia, Numerologia, Tarô, Florais de Bach, Massoterapia, Cromoterapia, Mestre em Reiki Usui, Astrologia Básica, Cristais Etéricos.<br/>Desde muito cedo eu sabia que tinha como missão ajudar as pessoas. Fiz várias formações ao longo da vida e venho ajudando a iluminar o caminho de pessoas que estão desconectadas com sua verdadeira essência. Eu amo muito as ferramentas que utilizo, pois cada uma delas tem uma energia diferente e uma contribuição incrível para auxiliar os pacientes.<br/>Mas, confesso que a Mesa Radiônica de Arcanjo Miguel é muito especial e tem resultados rápidos e profundos na vida dos clientes.</p>
              <div className="about-links">
                <a className="blog-external" href="https://religar-se-essencia.blogspot.com/" target="_blank" rel="noopener noreferrer">Acesse meu blog</a>
              </div>
            </div>
          </div>
        </section>

        <section id="mesa">
          <h2 className="section-title fade-in-scroll">O que é a Mesa Radiônica?</h2>
          <div className="section-sub fade-in-scroll">Um Instrumento de Cura Quântica</div>
          <div className="mesa-intro fade-in-scroll">
            <div style={{marginBottom: '16px'}}><strong>A Mesa Radiônica</strong> é um instrumento de terapia energética que proporciona equilíbrio, alinhamento e cura, mudando o campo vibracional do paciente através da radiestesia e radiônica.</div>
            <div className="section-sub" style={{fontSize: '1rem', marginBottom: '8px', color: 'var(--green-soft)'}}>Pilares do Atendimento</div>
            <div className="mesa-pilares-list">
              <span className="pilar-card">Radiestesia</span>
              <span className="pilar-card">Radiônica</span>
              <span className="pilar-card">Geometria Sagrada</span>
              <span className="pilar-card">Espiritualidade</span>
            </div>
            <div className="section-sub" style={{fontSize: '.99rem', marginBottom: '8px', marginTop: '18px', color: 'var(--blue-accent)'}}>Como Funciona</div>
            <div style={{marginBottom: '14px'}}>
              <ul style={{listStyle: 'square inside', fontSize: '.99rem', padding: 0, margin: 0, color: 'var(--gray-text)'}}>
                <li>Através da Mesa Radiônica é feita uma ativação das frequências que atingem a consciência, ativando o propósito divino e o resgate da alegria.</li>
                <li>Baseia-se nos pilares: Radiestesia, Radiônica, Geometria Sagrada e Espiritualidade.</li>
                <li>Pode tratar problemas afetivos, amorosos, financeiros e de saúde, atuando diretamente no reequilíbrio dos corpos físico e sutis do paciente.</li>
              </ul>
            </div>
            <div className="section-sub" style={{fontSize: '.98rem', marginBottom: '10px', color: 'var(--violet-main)'}}>Ferramentas Utilizadas</div>
            <div className="mesa-ferramentas-list">
              <span className="ferramenta-card"><span className="ferramenta-icon"></span>Chama Trina</span>
              <span className="ferramenta-card"><span className="ferramenta-icon"></span>Chama Violeta</span>
              <span className="ferramenta-card"><span className="ferramenta-icon"></span>Gráficos Radiestésicos</span>
              <span className="ferramenta-card"><span className="ferramenta-icon"></span>Florais de Bach</span>
              <span className="ferramenta-card"><span className="ferramenta-icon"></span>Ho'Oponopono</span>
            </div>
            <div className="section-sub" style={{fontSize: '.98rem', marginBottom: '4px', marginTop: '10px', color: 'var(--green-soft)'}}>Benefícios</div>
            <div className="mesa-beneficios-list">
              <span className="beneficio-card">Harmonização das energias</span>
              <span className="beneficio-card">Cura em nível físico, emocional, mental e espiritual</span>
              <span className="beneficio-card">Tratamento de problemas afetivos, financeiros, de saúde</span>
            </div>
          </div>
        </section>

        <section id="servicos">
          <h2 className="section-title fade-in-scroll">Atendimento Personalizado</h2>
          <div className="section-sub fade-in-scroll">Para mulheres acima de 50 anos que desejam se reconectar e transformar sua vida</div>
          <div className="servicos-box fade-in-scroll">
            <div className="servico-card">
              <div className="serv-card-title">Mesa Radiônica</div>
              <div className="serv-destino">Exclusivo para você</div>
              <div className="serv-desc">Atendimento individual e personalizado, utilizando as melhores ferramentas terapêuticas e espirituais para promover equilíbrio, cura e alegria em sua vida.</div>
              <button className="serv-btn" onClick={handleRequestClick}>Agendar Consulta</button>
            </div>
          </div>
        </section>

        <section id="depoimentos">
          <h2 className="section-title fade-in-scroll">O Que Dizem Nossos Pacientes</h2>
          <div className="depoimentos-grid fade-in-scroll">
            <div className="depo-card">
              <div className="depo-photo"><div style={{width:'100%',height:'100%',background:'#A8D5BA'}}></div></div>
              <div>"A Mesa Radiônica transformou minha vida. Sinto-me mais equilibrada e conectada comigo mesma."</div>
              <div className="depo-nome">- Ana L.</div>
            </div>
            <div className="depo-card">
              <div className="depo-photo"><div style={{width:'100%',height:'100%',background:'#A8D5BA'}}></div></div>
              <div>"Nunca imaginei sentir tanta paz interior. O acolhimento e olhar da Ru fazem toda diferença!"</div>
              <div className="depo-nome">- Beatriz S.</div>
            </div>
            <div className="depo-card">
              <div className="depo-photo"><div style={{width:'100%',height:'100%',background:'#A8D5BA'}}></div></div>
              <div>"Em poucas sessões minha energia mudou. Recomendo para toda mulher que busca autocuidado."</div>
              <div className="depo-nome">- Carla G.</div>
            </div>
          </div>
        </section>

        <section id="contato">
          <h2 className="section-title fade-in-scroll">Pronta para Transformar Sua Vida?</h2>
          <div className="section-sub fade-in-scroll">Agende sua consulta e inicie sua jornada de cura e autoconhecimento</div>
          
          <div className="contato-form-box fade-in-scroll" style={{textAlign: 'center'}}>
             <p style={{marginBottom: '20px'}}>
               Para iniciar seu atendimento, clique no botão abaixo para preencher a solicitação de Mesa Radiônica.
             </p>
             <button className="contato-btn" onClick={handleRequestClick}>
               Solicitar Mesa Agora
             </button>
             <div className="contato-info">Atualmente, nossos pacientes chegam por indicação. Seja bem-vinda!</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-menu">
          <a onClick={() => scrollToSection('home')} style={{cursor:'pointer'}}>Home</a>
          <a onClick={() => scrollToSection('sobre')} style={{cursor:'pointer'}}>Sobre</a>
          <a onClick={() => scrollToSection('mesa')} style={{cursor:'pointer'}}>Mesa Radiônica</a>
          <a onClick={() => scrollToSection('servicos')} style={{cursor:'pointer'}}>Serviços</a>
          <a onClick={() => scrollToSection('depoimentos')} style={{cursor:'pointer'}}>Depoimentos</a>
          <a onClick={() => scrollToSection('contato')} style={{cursor:'pointer'}}>Contato</a>
        </div>
        <a className="footer-external" href="https://religar-se-essencia.blogspot.com/" target="_blank" rel="noopener noreferrer">Visite o blog da Ru Correia</a>
        <div className="footer-socials">
          <a className="footer-social-icon" href="#" aria-label="Instagram">
             <span style={{fontSize: '12px', verticalAlign: 'middle'}}>IG</span>
          </a>
          <a className="footer-social-icon" href="#" aria-label="Facebook">
             <span style={{fontSize: '12px', verticalAlign: 'middle'}}>FB</span>
          </a>
        </div>
        <div className="footer-copyright">© 2025 Rudaia Correia - Todos os direitos reservados</div>
      </footer>
    </div>
  );
};

export default Home;
