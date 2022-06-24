import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function cadastrarPet(nome){
    const resposta = await api.post('/pets', {
        "nome": nome
    });
    return resposta.data;
}

export async function listarTodos(){
    const resposta = await api.get('/pets')
    return resposta.data;
}