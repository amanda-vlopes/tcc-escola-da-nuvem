import { Component } from 'react';
import logoAWS from '../images/logo-aws.png';
import logoEdN from '../images/logo-escola-da-nuvem.png';

export default class Error extends Component {
  render() {
    return (
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
        <h2 style={{ textAlign:"center", marginTop:300, fontSize:50 }}>Página não encontrada!</h2>
      </>
    )
  }
}
