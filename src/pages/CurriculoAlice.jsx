import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Curriculo.css";
const CurriculoAlice = () => {
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowPage(true);
  }, []);

  const handleClick = () => {
    navigate("/");
  };
  return (
    <CSSTransition in={showPage} timeout={400} classNames="page" unmountOnExit>
      <>
        <h1 className="curriculo-header">
          <span
            className="material-symbols-outlined btn-voltar"
            onClick={handleClick}
          >
            arrow_back
          </span>
          Maria Alice de Araujo
        </h1>
        <div className="container">
          <section id="contact-info">
            <h2 className="section-title">Informações de Contato</h2>
            <br />
            <p>
              <strong>Endereço:</strong>São Paulo - Zona Sul
              <br />
              <strong>Telefone:</strong> (11) 9973-4711
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:maliceremax@gmail.com">maliceremax@gmail.com</a>{" "}
              <br />
              <strong>Linkedin:</strong>{" "}
              <a href="https://www.linkedin.com/in/mariaalicearaujo/">
                linkedin.com/in/mariaalicearaujo/
              </a>
              <br />
            </p>
            <br />
          </section>

          <section id="summary">
            <h2 className="section-title">Objetivo</h2>
            <br />
            <p>
              Sou apaixonada por tecnologia e inicie em janeiro de 2023 no
              Profissao Cloud estudos na área de Cloud Computing. Busco uma
              oportunidade para desenvolver habilidades em tecnologias
              relacionadas ao cloud Computing, como Aws, Azure, Google Cloud,
              entre outras áreas. Conquistei a certificação Microsoft azure 900
              e Microsoft Azure SC900.Atualmente estudando Fundamentos AWS pela
              Escola da nuvem.
              <br />
              Meu objetivo é ingressar como Estagiária e me desenvolver e
              crescer junto á organização.
            </p>
            <br />
          </section>

          <section id="experience">
            <h2 className="section-title">Experiência Profissional</h2>
            <br />
            <article>
              <h3>Autônomo</h3>
              <h4>Período: Junho de 2016 até o momento</h4>
              <p>
                Com as crises políticas que se procederam no Brasil e no Mundo,
                foi necessário fechar o ponto.Atualmente realizo serviços free
                lancer em residências de limpeza e passadoria .
              </p>
            </article>
            <br />

            <br />
            <article>
              <h3>Loja de Sapatos</h3>
              <h4>Período: Janeiro de 2011 a junho 2016</h4>
              <p>
                Implementei e administrei uma pequena loja de sapatos no centro
                de São Paulo. Administrava todo o processo, desde compras de
                produtos, organização , vendas, negociação de conflitos,
                entregas, compras e vendas de produtos. Foram anos de muito
                trabalho, mas com retorno e clientela.
              </p>
            </article>
            <br />

            <h3>MWM Restaurante e Churrascaria Ltda</h3>
            <h4>Período: abril/2008 a jan/2011</h4>
            <br />
            <h3>De Nadai Alimentação e Serviços Ltda</h3>
            <h4>Período: junho/2005 a outubro/2007</h4>
            <br />
            <h3>Internutri Ltda-Me Nutrição e qualidade de Vida</h3>
            <h4>Período: janeiro/2003 a junho/2005</h4>
            <br />
            <h3>Ticket Serviços – Accor S/A – GR</h3>
            <h4>Período: junho/1991 a janeiro/2003</h4>
            <br />
            <h3>Banco Bradesco</h3>
            <h4>Período: junho/1989 a junho/1991</h4>
            <br />
            <h3>Hospital Ipiranga</h3>
            <h4>Período: junho/1988 a junho/1989</h4>
            <br />
          </section>

          <section id="skills">
            <h2 className="section-title">Habilidades Relacionadas</h2>
            <br />
            <p>
              Trabalho desenvolvido em empresas como Hospital Ipiranga, Colgate
              Palmolive, Pirelli Campos Elísios, Davene, Febem Imigrantes,
              Bradesco, Goodyear, Laboratório EMS, Refeição Cook Chill, Escola
              Monteiro Lobato em São Jose dos Campos.
            </p>
            <br />
            <ul>
              <li>Gerência de equipes</li>
              <li>Liderança de grupos</li>
              <li>Treinamento de pessoas</li>
              <li>Organização de eventos</li>
              <li>Planejamento de custos e execução de Budget</li>
              <li>Controle de processos, de conflitos e inovação.</li>
              <li>Comprometimento, Persistência</li>
              <li>Treinamento de Boas práticas de manipulação</li>
            </ul>
            <br />
          </section>

          <section id="certificates">
            <h2 className="section-title">Atividades</h2>
            <br />
            <ul>
              <li>Estudar Cloud</li>
              <li>Inglês</li>
              <li>Academia</li>
              <li>Assistir Filmes</li>
              <li>Trabalho Voluntário</li>
            </ul>
            <br />
          </section>
        </div>
      </>
    </CSSTransition>
  );
};

export default CurriculoAlice;
