import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import MainLayaut from './layauts/MainLayaut'

import Home from "./pages/Home";
import About from './pages/About';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayaut /> ,
      children:[
        {
          index: true,
          element:<Home />
        },
        {
          path:"/about/:id",
          element:<About />
        }
      ]
    }
  ])
 return <RouterProvider router={routes } />
}

export default App
