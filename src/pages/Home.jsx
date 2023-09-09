import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='div_header'>
          <img src="./src/images/logo-escola-da-nuvem.png" alt="logo-escola-da-nuvem" id='logo-escola-da-nuvem' />
          <div className='div_title'>
            <h1>Projeto Final - TCC</h1>
            <h2>Escola da Nuvem - Fundamentos AWS</h2>
          </div>
          <img src="./src/images/logo-aws.png" alt="logo-aws" id='logo-aws' />
        </div>
        <div className='div_section'>
          <h2>Grupo 3 - Curriculos</h2>
          <div className='div_curriculos'>
          <Link to={'/curriculo-alice'} className='integrante'>
            <div className='div_integrante'>
              <div className='integrante_image'>
                <img src="./src/images/alice.jpeg" alt="alice" className='image-curriculo' />
                <span>VER CURRICULO</span>
              </div>
                <h3>Maria Alice</h3>
            </div>
          </Link>

          <Link to={'/curriculo-amanda'} className='integrante'> 
            <div className='div_integrante'>
              <div className='integrante_image'>
                <img src="./src/images/amanda.jpeg" alt="alice" className='image-curriculo' />
                <span>VER CURRICULO</span>
              </div>
              <h3>Amanda</h3>
            </div>
          </Link>

          <Link to={'/curriculo-amanda'} className='integrante'>
            <div className='div_integrante'>
              <div className='integrante_image'>
                <img src="./src/images/hugo.jpeg" alt="alice" className='image-curriculo' />
                <span>VER CURRICULO</span>
              </div>
                <h3>Hugo</h3>
            </div>
          </Link>
          </div>
        </div>
      </>
    )
  }
}
