import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Layout} from "./components/Layout.jsx"
import {Favorite} from "./pages/Favorite.jsx"
import { PokemonDetail} from './pages/PokemonDetail.jsx';
import { StatsTab } from './pages/StatsTab.jsx';
import {AboutTab} from './pages/AboutTab.jsx';

import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favorites",
        element: <Favorite />,
      },
      {
        path: "pokemon/:name",
        element: <PokemonDetail />,
        children: [
          {
            path: "stats",
            element: <StatsTab />,
          },
          {
            path: "about",
            element: <AboutTab />
          }

        ]
      },
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
