import { listarTodos } from '../../api/petsAPI.js'
import { useEffect, useState } from 'react'
    

export default function ConsultarPets(){
    const [consultar, setConsultar] = useState([]);

    async function carregarToods(){
        const resp = await listarTodos();
        setConsultar(resp);
    }

    useEffect(() => {
        carregarToods();
    }, [])

    return(
        <main>
            <h1>
                ConsultarPets Pets
            </h1>

            {consultar.map(pet => 
                <section>
                    <div>
                        <h3> PETS CADASTRADOS </h3>
                    </div>
                    <div>
                        <table>
                            <td>
                                <ol> ID </ol>
                                <ol> Nome </ol>
                            </td>
                            <th>
                                <ol> {pet.id} </ol>
                                <ol> {pet.nome} </ol>
                            </th>
                        </table>
                    </div>
                </section>
                
                )}
        </main>
    )
}