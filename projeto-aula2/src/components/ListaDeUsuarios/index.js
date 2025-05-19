// src\components\ListaDeUsuarios\index.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'

function ListaDeUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const response = await axios.get("https://localhost:8080/usuarios")
                setUsuarios(response.data)
            } catch (error) {
                alert("Erro ao carregar os usuários", error)
            }
        }
        carregarUsuarios()
    }, [])

    return (
        <ul id="listasUsuarios" className="lista-usuarios">
            {usuarios.legth === 0 ? (  
                <li>Nenhum usuario encontrado.</li>
                ) : (
                    usuarios.map(usuario => (
                        <li key={usuario.id} >
                            <p><strong>Nome:</strong>{usuario.nome}</p>
                            <p><strong>Email:</strong>{usuario.email}</p>
                            <p><strong>Senha:</strong>{usuario.senha}</p>
                        </li>
                     ))
                 )}
        </ul>
    )

}

export default ListaDeUsuarios;