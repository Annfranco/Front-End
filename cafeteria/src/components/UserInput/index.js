// aula-react\src\components\UserInput\index.js
import { useState } from 'react';
import './styles.css'

const UserInput = ({ onAddUser }) => {
    const [usuario, setUsuario] = useState('')

    const handleChange = (event) => {
        setUsuario(event.usuario.value)
    }

    const handleSubmit = (event) => {
        if (usuario.trim()) {
            onAddUser(usuario)
            setUsuario('')
        } else {
            alert('Preencha o campo com um nome de usuário')
        }
    }

    return (
        <div className="user-input">
            <h2>Adicionar Funcionário</h2>
            <input
                type="text"
                placeholder="Digite o nome do usuário"
                value={usuario}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Adicionar</button>
        </div>
    )
} 

export default UserInput