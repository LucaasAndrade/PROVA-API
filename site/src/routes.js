import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Cadastrar from './pages/cadastrar';
import Consultar from './pages/consultar';


export default function Index(){
return(
<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/pet/cadastrar'} element={<Cadastrar/>} />
        <Route path={'/pet/consultar'} element={<Consultar/>} />
    </Routes>
</BrowserRouter>)
}