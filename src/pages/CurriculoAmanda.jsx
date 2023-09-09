import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Curriculo.css";

const CurriculoAmanda = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(true);
  }, []);
  
  return (
    <CSSTransition in={showPage} timeout={300} classNames="page" unmountOnExit>
      <>
        <h1 className="curriculo-header">Amanda Vitor Lopes</h1>
        <div className="container">
          <section id="contact-info">
            <h2 className="section-title">Informações de Contato</h2>
            <br />
            <p>
              <strong>Endereço:</strong> Cataguases/MG
              <br />
              <strong>Telefone:</strong> (31) 99526-6535
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:amandavitor@hotmail.com">
                amandavitor@hotmail.com
              </a>{" "}
              <br />
              <strong>Linkedin:</strong>{" "}
              <a href="https://www.linkedin.com/in/amanda-lopes-/">
                linkedin.com/in/amanda-lopes-/
              </a>
              <br />
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/amanda-vlopes">
                github.com/amanda-vlopes
              </a>
            </p>
            <br />
          </section>

          <section id="summary">
            <h2 className="section-title">Resumo Profissional</h2>
            <br />
            <p>
              Formada em Arquitetura e Urbanismo pela Universidade Federal de
              Ouro Preto, com experiência na área de projetos arquitetônicos,
              projetos de combate à incêndio e engenharia de segurança.
              Atualmente estou em transição de carreira para área de tecnologia,
              onde procuro conhecer e aprender a implementar estratégias em
              migração de aplicações para a Cloud, além de ampliar meus
              conhecimentos em linguagens e ferramentas de desenvolvimento web
              como JavaScript, HTML, CSS, React, Node.js, Docker, MySQL,
              Express, TypeScript, Testes de integração e unidade. Almejo uma
              oportunidade para atuar na área de TI, com foco em Cloud.
            </p>
            <br />
          </section>

          <section id="education">
            <h2 className="section-title">Formação Acadêmica</h2>
            <br />
            <h3>Desenvolvimento Web Full Stack</h3>
            <h4>Trybe - Conclusão em janeiro/2024</h4>
            <p>
              1.500 horas de aula com foco em: Introdução ao desenvolvimento de
              software, front-end, back-end, ciência da computação, engenharia
              de software, metodologias ágeis e habilidades comportamentais.
            </p>
            <br />

            <h3>Engenharia de Segurança do Trabalho</h3>
            <h4>
              Pontifícia Universidade Católica de Minas Gerais (PUC-MG) -
              Jun/2020
            </h4>
            <p>Pós-Graduação Lato Sensu - Especialização</p>
            <br />

            <h3>Arquitetura e Urbanismo</h3>
            <h4>Universidade Federal de Ouro Preto (UFOP) - Fev/2018</h4>
            <p>Bacharelado</p>
            <br />

            <h3>Built Environment, Sustainability and Renewable Energy</h3>
            <h4>
              Zuyd Hogeschool | Zuyd University of Applied Sciences - Jul/2015
            </h4>
            <p>Student Exchange Program</p>
            <br />
          </section>

          <section id="experience">
            <h2 className="section-title">Experiência Profissional</h2>
            <br />
            <article>
              <h3>Summer de Instrução</h3>
              <h4>Trybe - Meio período</h4>
              <p>ago de 2023 - o momento</p>
              <br />
              <p>
                Responsável por realizar monitorias técnicas individuais e
                coletivas, revisão de conteúdo de forma síncrona e suporte por
                Slack para resolução de dúvidas. Os conteúdos abordados para
                monitoria e revisão incluem: Fundamentos do Desenvolvimento Web
                contendo HTML, CSS, JAVASCRIPT e testes automatizados com Jest.
                Front-end passando por REACT e REDUX. Back-end abordando
                tecnologias como Mongo, SQL e NODEJS e o módulo de Ciências da
                Computação.
                <br />
                <strong>Competências:</strong> Node.js · React.js · JavaScript ·
                HTML · CSS · Redux.js · MySQL · Unit Tests
              </p>
            </article>
            <br />

            <br />
            <article>
              <h3>Arquiteta</h3>
              <h4>Proalpha Engenharia e Consultoria - Tempo Integral</h4>
              <p>2019 - 2022</p>
              <br />
              <ul>
                <li>
                  • Atuar no desenvolvimento e na concepção de projetos
                  arquitetônicos e de prevenção e combate a incêndio em diversas
                  escalas de projetos.
                </li>
                <li>
                  • Análise e desenvolvimento de projetos, acompanhamento de
                  obras.
                </li>
                <li>
                  • Verificação de projetos, adequando a legislação e normas
                  vigentes.
                </li>
                <li>
                  • Elaborar planilhas orçamentárias, controlar documentos,
                  acompanhar o desenvolvimento do projeto, desenvolver caderno
                  de encargos e memorial descritivo.{" "}
                </li>
                <li>
                  • Realizar levantamento de campo, reuniões internas de
                  alinhamento e contato com clientes.
                </li>
                <li>
                  • Desenvolvimento e concepção de projetos de prevenção e
                  combate a incêndio em subestações elétricas, em instalações de
                  extração e beneficiamento de minério e instalações prediais.
                </li>
                <li>• Apoio em projetos hidrossanitários e elétricos.</li>
                <li>
                  • Compatibilização de projetos de diferentes disciplinas,
                  desenvolvimento de as built, projeto básico, executivo e
                  detalhado.
                </li>
              </ul>
              <p>
                <strong>Competências:</strong> Segurança contra incêndio ·
                Trabalho em equipe · Projetos arquitetônicos · Arquitetura ·
                Planejamento de projetos · AutoCAD
              </p>
            </article>
            <br />

            <article>
              <h3>Iniciação Científica</h3>
              <h4>UFOP - Universidade Federal de Ouro Preto · Meio período</h4>
              <p>2015 - 2018</p>
              <br />

              <ul>
                <li>
                  • Atuar no desenvolvimento de pesquisa em eficiência
                  energética e desempenho térmico de edificações visando o maior
                  conforto do usuário.
                </li>
                <li>
                  • Analisar a influência dos aspectos construtivos de uma
                  edificação e as variáveis climáticas do ambiente no qual a
                  mesma está inserida, no desempenho térmico da edificação.
                </li>
                <li>
                  • Realizar simulação utilizando o software Energy Plus,
                  visando comparar diferentes tipos de materiais, quantidade de
                  aberturas e diferentes orientações das fachadas, e como esses
                  aspectos construtivos influenciam no conforto térmico do
                  usuário e na eficiência energética da edificação.
                </li>
              </ul>
              <p>
                <strong>Competências:</strong> Eficiência energética · Energy
                Plus
              </p>
            </article>
            <br />
          </section>

          <section id="skills">
            <h2 className="section-title">Conhecimentos Técnicos</h2>
            <br />
            <ul>
              <li>Javascript</li>
              <li>HTML / CSS</li>
              <li>React.js</li>
              <li>Redux.js</li>
              <li>React Hooks</li>
              <li>Context API</li>
              <li>Git e Github</li>
              <li>VSCode</li>
              <li>Unix</li>
              <li>Bash</li>
              <li>Unit Tests</li>
              <li>Docker</li>
              <li>MySQL</li>
              <li>Node.js</li>
              <li>API Rest</li>
              <li>Express</li>
              <li>Arquitetura de Software</li>
              <li>ORM - Sequelize</li>
              <li>TypeScript</li>
              <li>Fundamentos AWS</li>
            </ul>
            <br />
          </section>

          <section id="certificates">
            <h2 className="section-title">Curso e Certificados</h2>
            <br />
            <ul>
              <li>Fundamentos AWS – Escola da Nuvem – 2023</li>
              <li>Front-End - Trybe - 2023</li>
              <li>FUndamentals of Web Development - Trybe - 2023</li>
              <li>Curso Introdutório de JavaScript - Trybe - 2023</li>
              <li>Learning Agility - Escola Conquer - 2021</li>
              <li>Comunicação Assertiva - Escola Conquer - 2021</li>
              <li>
                Design thinking e negócios: inovação orientada pelo design - PUC
                Minas 2021
              </li>
              <li>Illustrator – Nível intermediário</li>
              <li>Photoshop - Nível intermediário</li>
              <li>Microsoft Project - Nível intermediário</li>
              <li>Pacote Office: Word, Excel, PowerPoint - Avançados</li>
            </ul>
            <br />
          </section>

          <section id="soft-skills">
            <h2 className="section-title">Soft Skills</h2>
            <br />
            <ul>
              <li>Comunicação</li>
              <li>Flexibilidade</li>
              <li>Adaptabilidade</li>
              <li>Inteligência Emocional</li>
              <li>Empatia</li>
              <li>Trabalho em Equipe</li>
            </ul>
            <br />
          </section>
        </div>
      </>
    </CSSTransition>
  );
};

export default CurriculoAmanda;
