

import { useState } from "react"

import {cadastrarPet} from '../../api/petsAPI.js'

export default function TelaCadastro(){
    const [nome, setNome] = useState('')
    const [resposta, setResposta] = useState('');

    async function cadastrarClick(){
        try{
            const r = await cadastrarPet(nome)
            setResposta("Pet Cadastrado com sucesso")
        }
        catch(err){
            setResposta(err.response.data.erro)
        }
    }
    
    return(
        <main>
            <div>
                <h1>TELA DE CADASTRO </h1>
            </div>
            <div> 
                <input type='text' onChange={e => setNome(e.target.value) } />

                <button onClick={cadastrarClick}> Cadastrar </button>
            </div>
            <div>
                {resposta}
            </div>
        </main>
    )
}