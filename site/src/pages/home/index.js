
import { useNavigate } from "react-router-dom";


export default function Home(){
    const navigate = useNavigate();

    function navegarCadastroClick(){
        navigate('/pet/cadastrar')
    }
    function navegarConsultaClick(){
        navigate('pet/consultar')
    }
    return(
        <main>
            <div> 
                Cadastre um PET
            </div>
            <div>
                <button onClick={navegarCadastroClick}> Tela de Cadastro </button>
                <br/>
                <button onClick={navegarConsultaClick}> Tela de Consulta </button>
            </div>

        </main>
    );
}