import { Component } from 'react';
import './Curriculo.css';

export default class CurriculoHugo extends Component {
  render() {
    return (
      <>
        <h1 className='curriculo-header'>Hugo Leonardo Marques Brambati</h1>
        <div className='container'>
          <section id='contact-info'>
            <h2 className='section-title'>Informações de Contato</h2>
            <br />
            <p>
              <strong>Endereço:</strong> Flamengo, Rio de Janeiro/RJ<br />
              <strong>Telefone:</strong> (21) 98628-7207<br />
              <strong>Email:</strong> <a href="mailto:hugobrambatidev@gmail.com">hugobrambatidev@gmail.com</a> <br />
              <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/hugo-brambati/">linkedin.com/in/hugo-brambati/</a><br />
              <strong>GitHub:</strong> <a href="github.com/hugobrambati">github.com/hugobrambati</a>
            </p>
            <br />
          </section>
          
          <section id='summary'>
            <h2 className='section-title'>Resumo Profissional</h2>
            <br />
            <p>
            Experiência sólida em Logística e Administração, atualmente em transição de carreira, com formação
            técnica em informática e cursando Redes de Computadores na Faculdade Estácio. Conhecimento em
            Desenvolvimento e Manutenção de Sistemas Web utilizando SQL Server, MySQL, HTML5, Javascript, HTML, CSS,
            PHP e Python. Habilidades em Desenvolvimento de Sites e Sistemas, com foco em Banco de Dados e
            Fundamentos AWS.
            </p>
            <br />
          </section>

          <section id='education'>
            <h2 className='section-title'>Formação Acadêmica</h2>
            <br />
            <p>
              <strong>Curso Tecnólogo em Redes de Computadores</strong><br />
              Faculdade Estácio de Sá<br />
              Conclusão prevista: Junho 2025<br />
            </p>
            <br />
          </section>

          <section id='experience'>
            <h2 className='section-title'>Experiência Profissional</h2>
            <br />
            <article>
              <h3>Freelancer - janeiro/2022 atualmente</h3><br />
              <h4>Ténico em Informática (Suporte Técnico)</h4>
              <ul>
                <li>- Reparação, manutenção de Computadores, Notebook e celulares.</li>
                <li>- Remoção de hardware com defeitos</li>
                <li>- Instalação e configuração de novos softwares (Antivírus, Pacote de Programas)</li>
                <li>- Instalação, configuração e suporte de sistema operacional Windows e Linux</li>
                <li>- Backup</li>
                <li>- Clonagem de HD</li>
                <li>- Upgrade</li>
              </ul>
            </article>
            <br />
            
            <br />
            <article>
                <h3>Empresa Hotel Frei Caneca – junho/2009 a dezembro/2019</h3><br />
                <h4>Gerente Administrativo</h4>
              <ul>
                <li>- Gestão Pessoal</li>
                <li>- Contratar e supervisionar os fornecedores e entrega de materiais</li>
                <li>- Contas a pagar e receber</li>
                <li>- Controle de entrada e saída de hóspedes e material</li>
                <li>- Atendimento aos Hospedes</li>
                <li>- Coordenar e supervisionar os serviços oferecidos aos clientes, desde a recepção até as acomodações</li>
              </ul>
            </article>
            <br />

            <article>
                <h3>Restaurante Forneria – janeiro/2007 a junho/2009</h3><br />
                <h4>Comprador</h4>
              <ul>
                <li>- Requisição de compras</li>
                <li>- Cotações</li>
                <li>- Pesquisa por novos fornecedores</li>
                <li>- Relatório de necessidade de material</li>
                <li>- Entrada de notas fiscais de insumos</li>
                <li>- Controle de qualidade de insumo</li>
                <li>- Balanço físico</li>
                <li>- Relatório de perda e quebra</li>
              </ul>
            </article>
            <br />
          </section>

          <section id="skills">
            <h2 className='section-title'>Conhecimentos Técnicos</h2>
            <br />
            <ul>
                <li>HTML / CSS</li>
                <li>Javascript</li>
                <li>Python</li>
                <li>Banco de Dados</li>
                <li>Java</li>
                <li>Git e Github</li>
                <li>VSCode</li>
                <li>Xampp</li>
                <li>PHP</li>
                <li>UX (User Experience)</li>
                <li>WordPress</li>
                <li>Windows Server</li>
                <li>AWS Fundamentos</li>
                <li>Gerenciamento Ágil de Projetos</li>
                <li>Angular</li>
                <li>Ionic</li>
                <li>Conceito de redes (DNS, AD, DHCP, IP, Acesso Remoto)</li>
                <li>Linux</li>
            </ul>
            <br />
        </section>
        
        <section id="certificates">
            <h2 className='section-title'>Curso e Certificados</h2>
            <br />
            <ul>
                <li>Fundamentos AWS – Escola da Nuvem – 2023</li>
                <li>Formação Linux Fundamentals – DIO.me - 2023</li>
                <li>Técnico em informática – Senac - 2023</li>
                <li>CCNAv7 Introduction to Networks - Senai SC - 2023</li>
                <li>Networking Essentials - Senac RJ/Cisco - 2023</li>
                <li>Cybersecurity Essentials Cisco - Senac RJ/Cisco - 2023</li>
                <li>Fundamentos de Suporte (Google) – Coursera - 2023</li>
                <li>Programação em Python WEB - Senac RJ - 2023</li>
                <li>Montagem e Manutenção de Desktop - Infobrap - 2022</li>
                <li>Informática do básico ao avançado – Udemy - 2022</li>
                <li>Fundamento de Hardware e Software - Fundação Bradesco - 2022</li>
                <li>Git Github - Curso em Vídeo - 2022</li>
                <li>Manutenção de Smartphone Android e Iphone – Senac – 2021</li>
            </ul>
            <br />
        </section>

        <section id="soft-skills">
            <h2 className='section-title'>Soft Skills</h2>
            <br />
            <ul>
                <li>Proatividade</li>
                <li>Resiliência</li>
                <li>Empatia</li>
                <li>Trabalho em Equipe</li>
            </ul>
            <br />
        </section>
        </div>
      </>
    )
  }
}
