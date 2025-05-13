// src\components\FormularioCadastro\index.js

// fetch = ele consulta a api usando o protocolo Http
// axios = é uma biblioteca que facilita a consulta a api
// instalação = npm install react-router-dom axios

import React, { useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import useMensagem from '../../hooks/useMensagem'
import logo from '../../assets/images/passaro-azul.png'
import MensagemFeedback from '../../components/MensagemFeedback'

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:8080/usuarios', { nome, email, senha})
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso')
            setNome('')
            setEmail('')
            setSenha('')
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor!'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <div className='container'>
            <img src={logo} alt='Logo da empresa'/>
            <h2>Cadastro de usuários</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarUsuario();}}>
                <input
                    type='text'
                    id ='nome'
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type='text'
                    id ='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type='text'
                    id ='senha'
                    placeholder='Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type='submit'>Casdatrar</button>
            </form>
            <button onClick={() => navigate('/usuarios')} className='link-usuarios'>
                Ver usuários cadastrados
            </button>

            <MensagemFeedback
                mensagem = {mensagem}
                tipo = {tipoMensagem}
                visivel = {visivel}
                onColse = {fecharMensagem}
            />

        </div>
    )
}

export default FormularioCadastro