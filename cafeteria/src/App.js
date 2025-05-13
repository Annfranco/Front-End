import { useState } from 'react';
import logo from './assets/images/coffee.webp';
import torta from './assets/images/torta.webp';
import UserInput from './components/UserInput';
import UserList from './components/UserList';
import './App.css';

function App() {

  const [usuarios, setUsuarios] = useState(['Maria', 'Lucas', 'José']);

  const adicionarUsuarios = (novoUsuario) => {
    // Verificando se o novo usuário já existe na lista.
    if (usuarios.includes(novoUsuario)) {
      alert('Usuário já existe na lista.')
      return;
    }
    // Adicionar novo usuário na lista, mantendo os anteriores.
    setUsuarios([...usuarios, novoUsuario]); 
  }

  return (
    <div className='App'>
      <img class="image-one" src={logo} alt='Logo da Empresa'/>
      <hr/>
      <img class="image-two" src={torta} alt='Torta'/>
      <h1>Doce Sonho</h1>
      <img class="image-three" src={torta} alt='Torta'/>
      <hr/>
      <UserInput onAddUser={adicionarUsuarios}/>
      <hr/>
      <UserList usuarios={usuarios}/>
    </div>
  );
}

export default App;
