import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import amanda from '../images/amanda.jpeg';
import hugo from '../images/hugo.jpeg';
import logoAWS from '../images/logo-aws.png';
import logoEdN from '../images/logo-escola-da-nuvem.png';

const Home = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(true);
  }, []);
  
    return (
      <CSSTransition in={showPage} timeout={500} classNames="page" unmountOnExit>
        <>
        <div className='div_header'>
          <img src={logoEdN} alt="logo-escola-da-nuvem" id='logo-escola-da-nuvem' />
          <div className='div_title'>
            <h1>TCC - GRUPO 03</h1>
            <h2>Escola da Nuvem - C5L2 AWS 01</h2>
            <h3>Professor: Lucas Garkauskas | Instrutor: José Helder</h3>
          </div>
          <img src={logoAWS} alt="logo-aws" id='logo-aws' />
        </div>
        <div className="div_linha">
          <div className="linha"></div>
        </div>
        <div className='div_section'>
          <h2>Site para divulgação de currículos dos alunos do grupo</h2>
          <div className='div_curriculos'>
            
          <Link to={'/curriculo-amanda'} className='integrante'> 
            <div className='div_integrante'>
              <div className='integrante_image'>
                <img src={amanda} alt="amanda" className='image-curriculo' />
                <span>VER CURRÍCULO</span>
              </div>
              <h3>Amanda</h3>
            </div>
          </Link>

          <Link to={'/curriculo-hugo'} className='integrante'>
            <div className='div_integrante'>
              <div className='integrante_image'>
                <img src={hugo} alt="hugo" className='image-curriculo' />
                <span>VER CURRÍCULO</span>
              </div>
                <h3>Hugo</h3>
            </div>
          </Link>
          </div>
        </div>
        <footer>© 2023 Escola da Nuvem | Desenvolvido em React por <a href="https://www.linkedin.com/in/amanda-lopes-/" target="_blank" rel="noreferrer">Amanda Lopes</a> </footer>
        </>
      </CSSTransition>
    )
  }

  export default Home;
