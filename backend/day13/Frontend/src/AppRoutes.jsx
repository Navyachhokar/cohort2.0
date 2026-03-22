import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import './features/auth/style/form.scss'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login'element={<Login/>} />
                <Route path='/register'element={<Register/>} />    
            </Routes>
        </BrowserRouter>
    )
}
// export const routes = BrowserRouter([
//     {
//         path: '/login',
//         element: (<Login />)
//     },
//     {
//         path: '/register',
//         element: (<Register />)
//     }
// ])NOT WORKING!!!

export default AppRoutes;