import { RouterProvider } from "react-router-dom"
import {routes} from './app.routes.jsx'
import "./features/shared/global.scss"


function App() {

  return (
    <RouterProvider router={routes}/>
  );
}

export default App
