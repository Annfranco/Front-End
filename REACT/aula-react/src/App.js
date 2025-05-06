import { useState } from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  // Permite adicionar estado ao componente (monitorar mudanças no conteúdo).
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Maria', 'Lucas', 'José']);

  const adicionarUsuario = () => {
    // Verificando se o novo usuário já existe na lista.
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe na lista.')
      return;
    }
    // Adicionar novo usuário na lista, mantendo os anteriores.
    setUsuarios([...usuarios, usuario]); 
    // Limpar campo de entrada.
    setUsuario(''); 
  }

  return (
    <div className='App'>
      <img src={logo} className="logo"/>
      <hr/>
      <h2>Adicionar usuário</h2>
      <input
        type='text'
        placeholder='Digite o nome do usuário'
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button onClick={adicionarUsuario}>Adicionar</button>
      <hr/>
      <h2>Lista de usuários cadastrados</h2>
      
      <ol>
        {usuarios.map((usuario, index) => (
        <li key={index}>{usuario}</li>
        ))}
      </ol>

    </div>
  );
}

export default App;
