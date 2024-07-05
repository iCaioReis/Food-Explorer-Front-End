import { Routes, Route} from 'react-router-dom';

import { AddDish} from '../pages/AddDish';
import { Home } from '../pages/Home';
import { Dish } from '../pages/Dish';

export function AppRoutes () {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/prato' element={<Dish/>}/>
            <Route path='/adicionarprato' element={<AddDish/>}/>
        </Routes>
    )
}