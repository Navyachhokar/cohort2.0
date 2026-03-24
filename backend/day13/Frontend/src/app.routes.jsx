import {createBrowserRouter} from 'react-router-dom';
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import './features/auth/style/form.scss'


export const routes = createBrowserRouter([
    {
        path: '/login',
        element: (<Login />)
    },
    {
        path: '/register',
        element: (<Register />)
    },
    {
        path: '/',
        element: (<h1>Welcome to the page</h1>)
    }
])