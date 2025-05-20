// src\components\BemVindo\index.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/Logo-fifa.png';

function PaginaInicial() {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('/cadastro');
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <h1>Seja Bem-Vindo(a) a FIFA!</h1>
      <button type="button" onClick={handleCadastroClick}>
        Página de Cadastro
      </button>
    </div>
  );
}

export default PaginaInicial;